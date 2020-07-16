# README - React Meeting Demo

This is the SDK react meeting demo app. It shows how to use the Amazon Chime SDK and Chime SDK UI Component Library to build a react meeting app.

## To run the demo app locally:

1. Install root dependencies within the root directory: `npm install`

2. Navigate to the demo folder: `cd demo/meeting`

3. Install dependencies: `npm install`

4. Start the webpack server: `npm run start:client`

5. Open a second terminal. Within the same directory, start the server: `npm run start:backend`

6. Open https://0.0.0.0:9000/ in your browser


## To deploy the serverless device demo

### Install aws and sam command line tools

* [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
* [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

### Run deployment script

The following will create a CloudFormation stack containing a Lambda and API Gateway deployment that runs the demo. Note that S3 bucket name should be globally unique.

```
cd /serverless
node ./deploy.js -r us-east-1 -b <YOUR-S3-BUCKET-NAME> -s <YOUR-CLOUDFORMATION-STACK-NAME>
```

The script will create an S3 bucket and CloudFormation stack with Lambda and API Gateway resources required to run the demo. After the script finishes, it will output a URL that can be opened in a browser.
