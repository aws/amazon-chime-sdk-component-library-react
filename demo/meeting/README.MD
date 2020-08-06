# README - React Meeting Demo

This is the SDK react meeting demo app. It shows how to use the Amazon Chime SDK and Chime SDK UI Component Library to build a react meeting app.

## To run the demo app locally:

1. If you haven't already, [configure your AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

2. Install root dependencies within the root directory: `npm install`

3. Navigate to the meeting demo folder: `cd demo/meeting`

4. Install dependencies: `npm install`

5. Start the webpack server and node server concurrently: `npm run start`

6. Open https://0.0.0.0:9000/ in your browser

### Troubleshooting

- You can change the `amazon-chime-sdk-js` [log level](https://aws.github.io/amazon-chime-sdk-js/enums/loglevel.html) by providing `logLevel` through URL as a query parameter with value 'warn' | 'error' | 'info' | 'debug' | 'off'.
   ```
    https://0.0.0.0:9000/?logLevel=debug
    ```

- `UnrecognizedClientException: The security token included in the request is invalid.` when trying to join a meeting

  This likely means that your AWS credentials are invalid. Refer to the [AWS Configuration docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) for setting up your credentials.

## To deploy the serverless device demo

### Install aws and sam command line tools

- [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

### Run deployment script

The following will create a CloudFormation stack containing a Lambda and API Gateway deployment that runs the demo. Note that S3 bucket name should be globally unique.

```
cd /serverless
node ./deploy.js -r us-east-1 -b <YOUR-S3-BUCKET-NAME> -s <YOUR-CLOUDFORMATION-STACK-NAME>
```

The script will create an S3 bucket and CloudFormation stack with Lambda and API Gateway resources required to run the demo. After the script finishes, it will output a URL that can be opened in a browser.
