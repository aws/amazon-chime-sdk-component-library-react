// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import cdk = require('@aws-cdk/core');
import { FrontEnd } from './front-end-resources/front-end';
import { BackEnd } from './back-end-resources/back-end';

class FrontEndStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
        super(parent, name, props);

        new FrontEnd(this, 'MeetingFrontEnd' 
    );
    }
}
class BackEndStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
      super(parent, name, props);
  
      new BackEnd(this, 'MeetingBackEnd');
  }
  }

const app = new cdk.App();

new BackEndStack(app, 'MeetingBackEnd', { env: {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
}})

new FrontEndStack(app, 'MeetingFrontEnd', { env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
}});

app.synth();
