## Using the Chime SDK React Meeting Demo
### Requirements
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

## Cleanup

`cdk destroy --all`

This will destoy all components created with this CDK, including the S3 bucket used for hosting.