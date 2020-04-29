/*

const AWS = require('aws-sdk');
const chime = new AWS.Chime({region: 'us-east-1'});
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');

// Document Client for the DynamoDB table operations
const docClient = new AWS.DynamoDB.DocumentClient({
  region: "us-east-1"
});
  
exports.handler = async (event, context, callback) => {
  let meetingInfo = null, result = null;
  const meetingId = event['queryStringParameters']['meetingId'];
  let response = {
    statusCode: 200,
    body: 'meeting not available',
    headers:{ 'Access-Control-Allow-Origin' : '*' },
  };
  try {
    // Delete the meeting from the Meeting table as well
    await deleteDBMeeting(meetingId);
    
    result = await chime.getMeeting({
      MeetingId: meetingId
    }).promise();
    if(result) {
      // meeting does exist
      meetingInfo = result;
    }
  } catch(err) {
    console.log("Error while checking chime:getMeeting", err);
  }
  if(meetingInfo) {
    const meetingId = meetingInfo.Meeting.MeetingId;
    try {
      result = await chime.deleteMeeting({
        MeetingId: meetingId,
      }).promise();
      response.body = 'meeting deleted successfully';
    } catch(err) {
      console.log("Error while deleting meeting chime:deleteMeeting", err);
    } 
  }
  return response;
};

const deleteDBMeeting = async (meetingId) => {
  const params = {
    TableName: "Meeting",
    Key: {
      "MeetingId": meetingId
    }
  };
  try {
    await docClient.delete(params).promise();
  } catch(err) {
    console.log("In Error State", err);
  }
};

*/
