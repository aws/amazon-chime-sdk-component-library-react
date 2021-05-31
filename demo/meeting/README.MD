## Using the Chime SDK React Meeting Demo+6### Requirements
- npm [installed](https://docs.npmjs.com/cli/v7/commands/npm-install)
- AWS CLI [installed](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- AWS CDK [installed](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_install) and [Bootstrapped](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)
- - Install: `npm install -g aws-cdk`
- - Be sure to have the latest version installed.  If you need to upgrade, uninstall `npm uninstall -g aws-cdk` and reinstall.
- yalc [Installed](https://www.npmjs.com/package/yalc) - `npm i yalc -g'
## Deploy

```
chmod +x deploy.sh
./deploy.sh
```
This will deploy a serverless backend and a CloudFront + S3 frontend.  The Output of the CDK will contain a CloudFront URL that can be used to test the Chime SDK React Meeting.  

## Using Locally

While backend resources are required to run this demo, the front end can be run in a hosted model or locally.  To run the front end locally without hosting:
`./deploy.sh backend-only`
Once the backend resources are deployed, the demo can be run from:
```
cd front-end-resources/react-meeting
npm run start
```

## Resources

Please note that this demo uses ```yalc``` to publish the amazon-chime-sdk-component-library-react locally and will use this in either local or hosted mode.  

Back end resources used by this demo will be deployed to AWS as Lambda Functions and Dynamo DBs.  As part of this CDK, the API Gateway URL will be loaded to the front end resources (```front-end-resources/react-meeting/src/cdk-outputs.json```) and used in both local and hosted modes.

## Cleanup

`cdk destroy --all` to destroy both front end and back end resources or `cdk destroy MeetingFrontEnd` to destroy only the front end resources.  These resources can also be deleted in the [CloudFormation console](https://console.aws.amazon.com/cloudformation).

This will destoy all components created with this CDK, including the S3 bucket used for hosting.