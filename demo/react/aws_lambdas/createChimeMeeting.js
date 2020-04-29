/*

// function to create a unique id
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// require AWS SDK 
const AWS = require('aws-sdk'); 

// Create the new AWS Chime object in the 'us-east-1' region
const chime = new AWS.Chime({region: 'us-east-1'}); 

// Create and attach the AWS service endpoint for chime
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');

// Document Client for the DynamoDB table operations
const docClient = new AWS.DynamoDB.DocumentClient({
    region: "us-east-1"
  });

let request = null, agentAttendee = null, customerAttendee = null;

// lambda handler
exports.handler = async (event, context, callback) => {
  let meeting = null;
  const customerId = event['queryStringParameters']['customerId'];
  // create a unique request id
  const requestId = uuid();

  // specify media placement region
  const region = 'us-east-1'; 

  // prepare the request for creating the chime meeting
  request = {
    ClientRequestToken: requestId,
    MediaRegion: region,
  };s
  try {
    // create chime meeting
    meeting = await chime.createMeeting(request).promise();
  } catch (err) {
    console.log("Some error occured in creating the meeting", err);
  }
  
  // if meeting created successfully -> create attendees -> agent and customer
  if(meeting) {
    // create the agent attendee creation request
    request = {
      MeetingId: meeting.Meeting.MeetingId,
      ExternalUserId: uuid()
    };
    agentAttendee = null;
    try {
      // create agent attendee
      agentAttendee = await chime.createAttendee(request).promise();
    } catch (err) {
      console.log("Some error occured in creating the agent as attendee", err);
    }
    
    // create the customer attendee creation request
    if(agentAttendee) {
      request = {
        MeetingId: meeting.Meeting.MeetingId,
        ExternalUserId: customerId
      };
      customerAttendee = null;
      try {
        // create customer attendee
        customerAttendee = await chime.createAttendee(request).promise();
      } catch (err) {
        console.log("Some error occured in creating the customer as attendee", err);
      }
    }
  }
  
  let response = {
    statusCode: 500,
    body: 'Internal error occured, check lambda execution logs',
    'headers': {
      "Access-Control-Allow-Origin": "*"
    }
  };
  
  // once the meeting is created with agent and customer as attendees send this response  
  if( meeting && agentAttendee && customerAttendee ) {
    const joinInfo = {
      "meeting": meeting,
      "agentAttendee": agentAttendee,
      "customerAttendee": customerAttendee
    };

    // create the meeting entry in meeting table
    const result = await putMeetingItem(joinInfo, customerId);
    if(result == "success") {
      // Delete the current customer from Customer table queue as the current created meeting is handling this customer
      await deleteCustomer(customerId);
      response = {
        "statusCode": 200,
        "body": JSON.stringify(joinInfo)
      };
    }
  }
  callback(null, response);
};

const putMeetingItem = async (joinInfo, customerId) => {
  const { meeting, customerAttendee, agentAttendee } = joinInfo;
  const meetingId = meeting.Meeting.MeetingId;
  const createdDate = Date.now();
  const params = {
    TableName: "Meeting",
    Item: {
      "MeetingId": meetingId,
      "Meeting": meeting,
      "CustomerId": customerId,
      "AgentId": agentAttendee.Attendee.AttendeeId,
      "CustomerAttendee": customerAttendee,
      "AgentAttendee": agentAttendee,
      "CreatedDate": createdDate
    }
  };
  try {
    await docClient.put(params).promise();
    return "success";
  } catch(err) {
    console.log("In Error State", err);
    return "error";
  } 
};

const deleteCustomer = async (customerId) => {
  const params = {
    TableName: "Customers",
    Key: {
      "CustomerId": customerId
    }
  };
  try {
    await docClient.delete(params).promise();
  } catch(err) {
    console.log("In Error State", err);
  }
};

*/
