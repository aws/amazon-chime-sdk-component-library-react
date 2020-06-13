/*

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({
  region: "us-east-1"
});

exports.handler = async (event, context, callback) => {
  const response = await getOldestCustomer();
  callback(null, response);
};

const getOldestCustomer = async () => {
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
    // Sort the items on CreatedDate and get the first item
    let items = result['Items'];
    if(items && items.length > 0) {
      items.sort(compare);
      response.body = JSON.stringify({message: "success", data: items[0]});
    } else {
      response.body = JSON.stringify({message: "success", data: null});    
    }
    response.statusCode = 200;
  } catch(err) {
    console.log("In Error:", err);   
  }
  return response;
};

const compare = (customerA, customerB) => {
  if (customerA['CreatedDate'] > customerB['CreatedDate']) {
    return 1;  
  } 
  if (customerA['CreatedDate'] < customerB['CreatedDate']) {
    return -1;
  }
  return 0;
};

*/
