// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB();
const chime = new AWS.Chime({ region: 'us-east-1' });
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');

// Optional features like Echo Reduction is only available on Regional Meetings API
// https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Meetings.html
const chimeRegional = new AWS.ChimeSDKMeetings({ region: 'us-east-1' });
const chimeRegionalEndpoint = 
  process.env.REGIONAL_ENDPOINT || 
  'https://meetings-chime.us-east-1.amazonaws.com';
chimeRegional.endpoint = new AWS.Endpoint(chimeRegionalEndpoint);

// return regional API just for Echo Reduction for now.
function getClientForMeeting(meeting, echoReduction = 'false') {
  if ( echoReduction === 'true' || (
    meeting &&
    meeting.Meeting &&
    meeting.Meeting.MeetingFeatures &&
    meeting.Meeting.MeetingFeatures.Audio &&
    meeting.Meeting.MeetingFeatures.Audio.EchoReduction === 'AVAILABLE')
  ) {
      return chimeRegional;
    }
  return chime;
}

const oneDayFromNow = Math.floor(Date.now() / 1000) + 60 * 60 * 24;

// Read resource names from the environment
const meetingsTableName = process.env.MEETINGS_TABLE_NAME;
const attendeesTableName = process.env.ATTENDEES_TABLE_NAME;
const sqsQueueArn = process.env.SQS_QUEUE_ARN;
const provideQueueArn = process.env.USE_EVENT_BRIDGE === 'false';
const logGroupName = process.env.BROWSER_LOG_GROUP_NAME;

// Create a unique id
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Retrieve meeting from the meeting table by meeting title
const getMeeting = async (meetingTitle) => {
  const result = await ddb.getItem({
    TableName: meetingsTableName,
    Key: {
      'Title': {
        S: meetingTitle
      },
    },
  }).promise();
  return result.Item ? JSON.parse(result.Item.Data.S) : null;
}

// Add meeting in the meeting table
const putMeeting = async (title, meetingInfo) => {
  await ddb.putItem({
    TableName: meetingsTableName,
    Item: {
      'Title': { S: title },
      'Data': { S: JSON.stringify(meetingInfo) },
      'TTL': {
        N: '' + oneDayFromNow
      }
    }
  }).promise();
}

// Retrieve attendee from the attendee table
const getAttendee = async (title, attendeeId) => {
  const result = await ddb.getItem({
    TableName: attendeesTableName,
    Key: {
      'AttendeeId': {
        S: `${title}/${attendeeId}`
      }
    }
  }).promise();
  if (!result.Item) {
    return 'Unknown';
  }
  return result.Item.Name.S;
}

// Add attendee in the attendee table
const putAttendee = async (title, attendeeId, name) => {
  await ddb.putItem({
    TableName: attendeesTableName,
    Item: {
      'AttendeeId': {
        S: `${title}/${attendeeId}`
      },
      'Name': { S: name },
      'TTL': {
        N: '' + oneDayFromNow
      }
    }
  }).promise();
}

// Set up SQS notifications
function getNotificationsConfig() {
  if (provideQueueArn) {
    return  {
      SqsQueueArn: sqsQueueArn,
    };
  }
  return {}
}

exports.createMeeting = async (event, context, callback) => {
  var response = {
    "statusCode": 200,
    "headers": {},
    "body": '',
    "isBase64Encoded": false
  };
  const title = event.queryStringParameters.title;
  const region = event.queryStringParameters.region || 'us-east-1';

  if (!title) {
    response["statusCode"] = 400;
    response["body"] = "Must provide title";
    callback(null, response);
    return;
  }

  let meetingInfo = await getMeeting(title);
  const client = getClientForMeeting(meetingInfo, event.queryStringParameters.ns_es);
  if (!meetingInfo) {
    const request = {
      ClientRequestToken: uuid(),
      MediaRegion: region,
      NotificationsConfiguration: getNotificationsConfig(),
      ExternalMeetingId: title.substring(0, 64),
    };
    if (event.queryStringParameters.ns_es === 'true') {
      request.MeetingFeatures = {
        Audio: {
          // The EchoReduction parameter helps the user enable and use Amazon Echo Reduction.
          EchoReduction: 'AVAILABLE'
        }
      };
    } 
    console.info('Creating new meeting: ' + JSON.stringify(request));
    meetingInfo = await client.createMeeting(request).promise();
    await putMeeting(title, meetingInfo);
  }

  const joinInfo = {
    JoinInfo: {
      Title: title,
      Meeting: meetingInfo.Meeting,
    },
  };

  response.body = JSON.stringify(joinInfo, '', 2);
  callback(null, response);
};

exports.join = async (event, context, callback) => {
  var response = {
    "statusCode": 200,
    "headers": {},
    "body": '',
    "isBase64Encoded": false
  };
  const title = event.queryStringParameters.title;
  const name = event.queryStringParameters.name;
  const region = event.queryStringParameters.region || 'us-east-1';

  if (!title || !name) {
    response["statusCode"] = 400;
    response["body"] = "Must provide title and name";
    callback(null, response);
    return;
  }

  let meetingInfo = await getMeeting(title);
  const client = getClientForMeeting(meetingInfo, event.queryStringParameters.ns_es);
  if (!meetingInfo) {
    const request = {
      ClientRequestToken: uuid(),
      MediaRegion: region,
      NotificationsConfiguration: getNotificationsConfig(),
      ExternalMeetingId: title.substring(0, 64),
    };
    if (event.queryStringParameters.ns_es === 'true') {
      request.MeetingFeatures = {
        Audio: {
          // The EchoReduction parameter helps the user enable and use Amazon Echo Reduction.
          EchoReduction: 'AVAILABLE'
        }
      };
    }
    console.info('Creating new meeting before joining: ' + JSON.stringify(request));
    meetingInfo = await client.createMeeting(request).promise();
    await putMeeting(title, meetingInfo);
  }

  console.info('Adding new attendee');
  const attendeeInfo = (await client.createAttendee({
      MeetingId: meetingInfo.Meeting.MeetingId,
      ExternalUserId: uuid(),
    }).promise());
  putAttendee(title, attendeeInfo.Attendee.AttendeeId, name);

  const joinInfo = {
    JoinInfo: {
      Title: title,
      Meeting: meetingInfo.Meeting,
      Attendee: attendeeInfo.Attendee
    },
  };

  response.body = JSON.stringify(joinInfo, '', 2);
  callback(null, response);
};

exports.end = async (event, context, callback) => {
  var response = {
    "statusCode": 200,
    "headers": {},
    "body": '',
    "isBase64Encoded": false
  };
  const title = event.queryStringParameters.title;
  let meetingInfo = await getMeeting(title);
  const client = getClientForMeeting(meetingInfo);
  await client.deleteMeeting({
    MeetingId: meetingInfo.Meeting.MeetingId,
  }).promise();
  callback(null, response);
};

exports.attendee = async (event, context, callback) => {
  var response = {
    "statusCode": 200,
    "headers": {},
    "body": '',
    "isBase64Encoded": false
  };
  const title = event.queryStringParameters.title;
  const attendeeId = event.queryStringParameters.attendee;
  const attendeeInfo = {
    AttendeeInfo: {
      AttendeeId: attendeeId,
      Name: await getAttendee(title, attendeeId),
    },
  };
  response.body = JSON.stringify(attendeeInfo, '', 2);
  callback(null, response);
}

// Called when SQS receives records of meeting events and logs out those records
exports.sqs_handler = async (event, context, callback) => {
  const records = event.Records;

  console.log(records);

  return {};
}

// Called when EventBridge receives a meeting event and logs out the event
exports.event_bridge_handler = async (event, context, callback) => {
  console.log(event);

  return {};
}

async function ensureLogStream(cloudWatchClient, logStreamName) {
  var describeLogStreamsParams = {
    "logGroupName": logGroupName,
    "logStreamNamePrefix": logStreamName
  };
  var response = await cloudWatchClient.describeLogStreams(describeLogStreamsParams).promise();
  var foundStream = response.logStreams.find(s => s.logStreamName === logStreamName);
  if (foundStream) {
    return foundStream.uploadSequenceToken;
  }
  var putLogEventsInput = {
    "logGroupName": logGroupName,
    "logStreamName": logStreamName
  };
  await cloudWatchClient.createLogStream(putLogEventsInput).promise();
  return null;
}

exports.logs = async (event, context) => {
  var response = {
    "statusCode": 200,
    "headers": {},
    "body": '',
    "isBase64Encoded": false
  };
  {
    var body = JSON.parse(event.body);
    if (!body.logs || !body.meetingId || !body.attendeeId || !body.appName) {
      response.body = "Empty Parameters Received";
      response.statusCode = 400;
      return response;
    }
    const logStreamName = "ChimeSDKMeeting_" + body.meetingId.toString();
    var cloudWatchClient = new AWS.CloudWatchLogs({
      apiVersion: '2014-03-28'
    });
    var putLogEventsInput = {
      "logGroupName": logGroupName,
      "logStreamName": logStreamName
    };
    var uploadSequence = await ensureLogStream(cloudWatchClient, logStreamName);
    if (uploadSequence) {
      putLogEventsInput["sequenceToken"] = uploadSequence;
    }
    var logEvents = [];
    if (body.logs.length > 0) {
      for (let i = 0; i < body.logs.length; i++) {
        var log = body.logs[i];
        var timestampIso = new Date(log.timestampMs).toISOString();
        var message = `${timestampIso} [${log.sequenceNumber}] [${log.logLevel}] [mid: ${body.meetingId.toString()}] [aid: ${body.attendeeId}]: ${log.message}`;
        logEvents.push({
          "message": message,
          "timestamp": log.timestampMs
        });
      }
      putLogEventsInput["logEvents"] = logEvents;
      await cloudWatchClient.putLogEvents(putLogEventsInput).promise();
    }
  }
  return response;
};
