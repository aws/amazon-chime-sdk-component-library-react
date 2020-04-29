/*

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({
  region: "us-east-1"
});

exports.handler = async (event, context, callback) => {
  const response = await getAllAvailableCustomers();
  callback(null, response);
};

const getAllAvailableCustomers = async () => {
  let response = {
    statusCode: 504,
    body: JSON.stringify({message: "error", data: null}),
    headers:{ 'Access-Control-Allow-Origin' : '*' }
  };
  const params = {
    TableName: "Customers"
  };
  try {
    const result = await docClient.scan(params).promise();
    // We want to sort the items on CreatedDate
    let items = result['Items'];
    if(items && items.length > 0) {
      items.sort(compare);
      response.body = JSON.stringify({message: "success", data: items});
    }
    response.statusCode = 200;
  } catch(err) {
      console.log("In Error:", err);   
  }
  return response;
};

const compare = (customerA, customerB) => {
  if(customerA['CreatedDate'] > customerB['CreatedDate']) {
    return 1;  
  } 
  if(customerA['CreatedDate'] < customerB['CreatedDate']) {
    return -1;
  }
  return 0;
};

*/
