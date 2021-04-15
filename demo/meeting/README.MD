# Static site
* Ensure aws-cdk is [installed](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)
* Ensure account/region are [bootstrapped](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)

## Using the Chime SDK Meeting React Demo
### Requirements
- AWS CDK [Installed](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_install) and [Bootstrapped](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)
- npm [Installed](https://docs.npmjs.com/cli/v7/commands/npm-install)
- yalc [Installed](https://www.npmjs.com/package/yalc) - `npm i yalc -g'
## Deploy

```
chmod +x deploy.sh
./deploy.sh
```

## Using

This CDK will deploy a serverless backend and a CloudFront + S3 frontend.  The Output of the CDK will contain a CloudFront URL that can be used to test the Chime SDK React Meeting.  Additionally, you can run a server locally: `/front-end-resources/react-meeting/npm run start`

## Cleanup

`cdk destroy --all`