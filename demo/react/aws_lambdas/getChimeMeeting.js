/*

const AWS = require('aws-sdk');
const chime = new AWS.Chime({region: 'us-east-1'});
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');

exports.handler = async (event, context, callback) => {
  const meetingId = event['queryStringParameters']['meetingId'];
  let response = {
    statusCode: 500,
    body: JSON.stringify({message: "error", data: null}),
    headers:{ 'Access-Control-Allow-Origin' : '*' },
  };
  let result = null;
  try {
    result = await chime.getMeeting({
      'MeetingId': meetingId
    }).promise();
    response.statusCode = 200;
    if(result) {
      // meeting valid
      response.body = JSON.stringify({message: "success", data: result, meetingExists: true});  
    } else {
      // No error in retreiving meeting, but it has ended
      response.body = JSON.stringify({message: "success", data: null, meetingExists: false});
    }
  } catch(err) {
    console.log("Error while checking chime:getMeeting", err);
  }
  callback(null, response);
};

*/
