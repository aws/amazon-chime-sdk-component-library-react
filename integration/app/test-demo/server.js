const compression = require('compression');
const fs = require('fs');
const url = require('url');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

let hostname = '127.0.0.1';
let port = 8080;
let protocol = 'http';
let options = {};

const chime = new AWS.Chime({ region: 'us-east-1' });

const meetingCache = {};
const attendeeCache = {};

const log = message => {
  console.log(`${new Date().toISOString()} ${message}`);
};

const app = 'meeting';

const server = require(protocol).createServer(
  options,
  async (request, response) => {
    log(`${request.method} ${request.url} BEGIN`);
    compression({})(request, response, () => { });
    try {
      if (
        request.method === 'POST' &&
        request.url.startsWith('/join?')
      ) {
        const query = url.parse(request.url, true).query;
        const title = query.title;
        const name = query.name;
        const region = query.region || 'us-east-1';

        if (!meetingCache[title]) {
          meetingCache[title] = await chime
            .createMeeting({
              ClientRequestToken: uuidv4(),
              MediaRegion: region
            })
            .promise();
          attendeeCache[title] = {};
        }
        const joinInfo = {
          JoinInfo: {
            Title: title,
            Meeting: meetingCache[title].Meeting,
            Attendee: (
              await chime
                .createAttendee({
                  MeetingId: meetingCache[title].Meeting.MeetingId,
                  ExternalUserId: uuidv4()
                })
                .promise()
            ).Attendee
          }
        };
        attendeeCache[title][joinInfo.JoinInfo.Attendee.AttendeeId] = name;
        response.statusCode = 201;
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify(joinInfo), 'utf8');
        response.end();
        log(JSON.stringify(joinInfo, null, 2));
      } else if (
        request.method === 'GET' &&
        request.url.startsWith('/attendee?')
      ) {
        const query = url.parse(request.url, true).query;
        const attendeeInfo = {
          AttendeeInfo: {
            AttendeeId: query.attendee,
            Name: attendeeCache[query.title][query.attendee]
          }
        };
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify(attendeeInfo), 'utf8');
        response.end();
        log(JSON.stringify(attendeeInfo, null, 2));
      } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('404 Not Found');
      }
    } catch (err) {
      log(`server caught error: ${err}`);
      response.statusCode = 403;
      response.setHeader('Content-Type', 'application/json');
      response.write(JSON.stringify({ error: err.message }), 'utf8');
      response.end();
    }
    log(`${request.method} ${request.url} END`);
  }
);

server.listen(port, hostname, () => {
  log(`server running at ${protocol}://${hostname}:${port}/`);
});
