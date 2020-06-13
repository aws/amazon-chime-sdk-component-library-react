/*

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({
  region: "us-east-1"
});

exports.handler = async (event, context, callback) => {
  const customerName = event['queryStringParameters']['customerName'];
  const response = {
      statusCode: 504,
      body: JSON.stringify({message: "error", data: null}),
      headers:{ 'Access-Control-Allow-Origin' : '*' }
  };
  const result = await addCustomer(customerName);
  if(result.message == "success") {
    response.statusCode = 200;
    response.body = JSON.stringify(result);
  }
  callback(null, response);
};

const addCustomer = async (customerName) => {
  const customerId = uuid();
  const createdDate = Date.now();
  const customer = {
    "CustomerId": customerId,
    "CustomerName": customerName,
    "CreatedDate": createdDate
  };
  const params = {
    TableName: "Customers",
    Item: customer
  };
  try {
    await docClient.put(params).promise();
    return {message: "success", data: customer};
  } catch(err) {
    console.log("In Error State", err);
    return {message: "error", data: null};
  }
};


*/
