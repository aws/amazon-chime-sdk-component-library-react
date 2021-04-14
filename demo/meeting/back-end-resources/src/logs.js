// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var AWS = require('aws-sdk');
const chime = new AWS.Chime({ region: 'us-east-1' });
const utils = require('utils');
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');
const meetingsTableName = process.env.MEETINGS_TABLE_NAME;
const attendeesTableName = process.env.ATTENDEES_TABLE_NAME;
const logGroupName = process.env.BROWSER_LOG_GROUP_NAME;

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

exports.handler = async (event, context) => {
    var response = {
      "statusCode": 200,
      "headers": { 
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Credentials": false },
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