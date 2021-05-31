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
  const attendeeId = event.queryStringParameters.attendee;
  const attendeeInfo = {
    AttendeeInfo: {
      AttendeeId: attendeeId,
      Name: await utils.getAttendee(title, attendeeId),
    },
  };
  response.body = JSON.stringify(attendeeInfo, '', 2);
  callback(null, response);
}