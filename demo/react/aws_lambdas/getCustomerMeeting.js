/*

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({
  region: "us-east-1"
});

exports.handler = async (event, context, callback) => {
  const customerId = event['queryStringParameters']['customerId'];
  let response = {
    statusCode: 500,
    body: JSON.stringify({message: "error", data: null}),
    headers:{ 'Access-Control-Allow-Origin' : '*' }
  };
  const result = await getMeetingForCustomer(customerId);
  if(result.message == "success") {
    response.statusCode = 200;
    if(result.data == null) {
      // No error retrieving the data but meeting not yet created
      response.body = JSON.stringify({message: "success", data: null});  
    } else {
      // No error retrieving the data, meeting is created
      response.body = JSON.stringify({message: "success", data: result.data});  
    }
  }
  return response;
};

const getMeetingForCustomer = async (customerId) => {
  const response = { message: "error", data: null };
  const params = {
    "TableName": "Meeting"
  };
  try {
    const result = await docClient.scan(params).promise();
    if(result && result.Items) {
      const info = result.Items.find((item) => item.CustomerId && item.CustomerId == customerId);
      if(info) {
        const data = {
          customerAttendee: info.CustomerAttendee,
          meeting: info.Meeting
        };  
        response.data = data;
      } else {
        response.data = null;
      }
    } else {
      response.data = null;
    }
    response.message = "success";
  } catch(err) {
    console.log("Error :", err);  
  }
  return response;
};

*/
