// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var AWS = require('aws-sdk');
const chime = new AWS.Chime({ region: 'us-east-1' });
const utils = require('utils');
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');
const meetingsTableName = process.env.MEETINGS_TABLE_NAME;
const attendeesTableName = process.env.ATTENDEES_TABLE_NAME;

exports.handler = async (event, context, callback) => {
  var response = {
    "statusCode": 200,
    "headers": { 
      "Access-Control-Allow-Origin": "*", 
      "Access-Control-Allow-Credentials": false },
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

  let meetingInfo = await utils.getMeeting(title);
  if (!meetingInfo) {
    const request = {
      ClientRequestToken: utils.uuid(),
      MediaRegion: region,
    };
    console.info('Creating new meeting before joining: ' + JSON.stringify(request));
    meetingInfo = await chime.createMeeting(request).promise();
    await utils.putMeeting(title, meetingInfo);
  }

  console.info('Adding new attendee');
  const attendeeInfo = (await chime.createAttendee({
      MeetingId: meetingInfo.Meeting.MeetingId,
      ExternalUserId: utils.uuid(),
    }).promise());
  utils.putAttendee(title, attendeeInfo.Attendee.AttendeeId, name);

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
  