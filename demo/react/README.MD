# README - 1:1 Video Demo

This README details the steps required to run this 1:1 video react demo. 

## Pre-requisite Setup

### Create Amazon DynamoDB Tables

1. Create Customers Table
    1. AWS Console → AWS DynamoDB → Create Table
    2. Put Table Name → Customers and PartitionKey → CustomerId (String)

2. Create Meetings Table
    1. AWS Console → AWS DynamoDB → Create Table
    2. Put Table Name → Meeting and PartitionKey → MeetingId (String)

### Create AWS IAM Policy to access Amazon DynamoDB Tables

Name: AmazonChimeDynamoDBOnetoOneVideo

1. AWS Console → IAM →  You will see Policies on the left side panel.
2. Create Policy →  In the JSON tab, put the below given AWS IAM Policy (You can get ARNs from the overview section once you create the above tables in DynamoDB console) → Review Policy → Create
   ```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "VisualEditor0",
                "Effect": "Allow",
                "Action": [
                    "dynamodb:PutItem",
                    "dynamodb:DeleteItem",
                    "dynamodb:GetItem",
                    "dynamodb:Scan",
                    "dynamodb:Query",
                    "dynamodb:UpdateItem"
                ],
                "Resource": [
                    "arn:aws:dynamodb:us-east-1:<YOUR AWS ACCOUNT NUMBER>:table/Meeting",
                    "arn:aws:dynamodb:us-east-1:<YOUR AWS ACCOUNT NUMBER>:table/Customers"
                ]
            }
        ]
    }
    ```

### Create AWS IAM Role

Name: AmazonChimeSDKLambda
You will create a role to attach to the AWS Lambda functions. This role will provide access for AWS Lambda function execution, Amazon Chime SDK operations and Amazon Dynamo DB operations. 
1. AWS Console → IAM →  You will see Roles on the left side panel.
2. Create role → In Select type of trusted entity → Select Lambda → Next: Permissions
3. In Attach permissions policies → Attach below three policies:
    1. AWSLambdaBasicExecutionRole (AWS Managed Policy) - For AWS Lambda function execution through API Gateway
    2. AmazonChimeSDK (AWS Managed Policy) - For Amazon Chime SDK actions
    3. AmazonChimeDynamoDBOnetoOneVideo (The one you created above) 
4. Click Next, Review and Create Role

### Create AWS Lambda Functions

Create the AWS lambda functions which are responsible for creating chime meeting, deleting it, handling customer-agent queue and so on.
1. Create Chime Meeting: Creates the chime meeting with the agent and customer attendee
    1. AWS Console → AWS Lambda → Create Function
    2. Name: createChimeMeeting (file name)
    3. Runtime: Node.js 12.X
    4. Under Permissions → Choose existing role → Select AmazonChimeSDKLambda from dropdown → Create function
    5. Function Code: Copy paste the code from /aws_lambdas/createChimeMeeting
2. Similarly create AWS lambda functions for all the files present in /aws_lambdas directory with respective file names as function name, keep the execution role the same.

### Create AWS API Gateway Endpoint

Now create the AWS API Gateway to trigger the lambda functions. This API Gateway will hold all the REST methods you will use to call the API URLs that will trigger the lambda functions. This will be a plain proxy lambda integration.
API Name: chime-meeting-operations
1. AWS Console → API Gateway → Create API → API Type → Select REST API block.
2. You will see the next screen to choose the protocol. Select REST as the protocol, New API in Create new API section. In the Settings section provide the API name as:  chime-meeting-operations and click create API button. This will create chime-meeting-operations REST API.
3. Now create below resource structure in the chime-meeting-operations:  
    Make sure you have set the URL Query String Parameters ( Under Method Request ) -> Add meetingId or customerId as required query string parameter by referring this below structure.
    ```
    1. Path: /agent/customers
        Method: GET
        Lambda Function: getCustomers
    
    2. Path: /agent/customers/oldest
        Method: GET
        Lambda Function: getOldestCustomer
    
    3. Path: /customer    
        Method: POST
        URL Query String Parameter: customerName
        Lambda Function: createCustomer
    
    4. Path: /customer/meeting
        Method: GET
        URL Query String Parameter: customerId
        Lambda Function: getCustomerMeeting
    
    5. Path: /meeting
        Method: GET
        URL Query String Parameter: meetingId
        Lambda Function: getChimeMeeting
    
        Method: POST
        URL Query String Parameter: customerId
        Lambda Function: createChimeMeeting
    
        Method: DELETE
        URL Query String Parameter: meetingId
        Lambda Function: deleteChimeMeeting
    ```

4. Once you created the resources, create the methods, in each method check and do the following:
    1. Under Method Request:
        1. Settings -> Authorization → AWS_IAM
    2. Under Integration Request:
        1. Under Integration Type ->  Select Lambda Function 
        2. Tick the Use Lambda Proxy integration checkbox
        3. Lambda Region 'us-east-1'
        4. Add the corresponding lambda function created above
        5. It will ask if you want to add permission to this lambda, click on OK
    3. Under Method Response - Expand the 200 response
        1. Under Response Headers for 200, add Access-Control-Allow-Origin
        2. Under Response Body for 200, add Content type as application/json and Models as empty
5. Now, enable CORS on each of the created resource through actions dropdown under resources.
6. After these steps you should have the API Gateway resources fully created. Now go to Actions dropdown → Click 'Deploy API'. It will ask you to create the stage give stage name as 'dev', and click deploy.
7. Now, under the left panel below Resources, you will see Stages. Click on ‘Stages’ → Click the stage you deployed say ‘dev’ → Now you should see the invoke URL on this page.
8. You should now have the API endpoint which is also called as the invokeURL created, deployed and ready to use. Keep this invokeURL handy which will be used locally to call the above created API Gateway methods.

### Create IAM User

You will now create an IAM user which will be used to call the AWS API Gateway URLs created above in the previous step. 
IAM User Name: chime-sdk-dev
1. AWS Console → IAM →  You will see Users on the left side panel.
2. Add User → 
    1. User name: chime-sdk-dev
    2. AWS access type: Check the Programmatic access
    3. Copy the secret and access keys, these will be used to call the API Gateway  APIs created above from local server
3. Set permissions → Attach existing policies directly
    1. Search and attach AmazonAPIGatewayInvokeFullAccess
    2. Click Next: Tags
4. Review → Create user

## Running the Application

To run the react app:
1. Navigate to the demo/react folder
2. Update the accessKey, secretKey, invokeURl and region inside the /src/ApiGatewayClient.tsx 
    Note: We have kept us-east-1 as default region everywhere. If you into any issues region wise, check setting the region us-east-1 everywhere.
    ```
    const CONFIG = {
      invokeUrl: '<YOUR API GATEWAY ENDPOINT INVOKEURL>'
      accessKey: '<IAM chime-sdk-dev USER ACCESS KEY>',
      secretKey: '<IAM chime-sdk-dev USER SECRET KEY>',
      region: '<YOUR AWS REGION>',
    };
    ```
3. Run `npm install`
4. Start the webpack server: `npm run start:client`
5. Check out customer's site at http://localhost:9000/customer and agent's site at http://localhost:9000/agent

Note: Install [cors-unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) extension if you run into CORS errors. 
