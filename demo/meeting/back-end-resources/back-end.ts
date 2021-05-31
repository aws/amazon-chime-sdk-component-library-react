// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import dynamodb = require('@aws-cdk/aws-dynamodb');
import lambda = require('@aws-cdk/aws-lambda');
import { Construct } from '@aws-cdk/core';
import cdk = require('@aws-cdk/core');
import apigateway = require('@aws-cdk/aws-apigateway'); 
import iam = require('@aws-cdk/aws-iam')
import loggroup = require('@aws-cdk/aws-logs');

export class BackEnd extends Construct {
    constructor(parent: Construct, name: string) {
        super(parent, name);

        const meetingsTable = new dynamodb.Table(this, 'meetings', {
            partitionKey: {
              name: 'Title',
              type: dynamodb.AttributeType.STRING
            },
            tableName: 'meetings',
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            timeToLiveAttribute: 'TTL',
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,            
          });

        const attendeeTable = new dynamodb.Table(this, 'attendees', {
          partitionKey: {
            name: 'AttendeeId',
            type: dynamodb.AttributeType.STRING
          },
          tableName: 'attendees',
          removalPolicy: cdk.RemovalPolicy.DESTROY,
          billingMode: dynamodb.BillingMode.PAY_PER_REQUEST
        });

        const lambdaChimeRole = new iam.Role(this, 'LambdaChimeRole', {
          assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        });
    
        lambdaChimeRole.addToPolicy(new iam.PolicyStatement({
          resources: ['*'],
          actions: ['chime:CreateMeeting',
                    'chime:DeleteMeeting',
                    'chime:GetMeeting',
                    'chime:ListMeetings',
                    'chime:BatchCreateAttendee',
                    'chime:CreateAttendee',
                    'chime:DeleteAttendee',
                    'chime:GetAttendee',
                    'chime:ListAttendees',
        ]}));

        const lambdaLogsRole = new iam.Role(this, 'LambdaLogRole', {
          assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        });

        lambdaLogsRole.addToPolicy(new iam.PolicyStatement({
          resources: ['*'],
          actions: ['logs:CreateLogStream',
                    'logs:PutLogEvents',
                    'logs:DescribeLogStreams']
        }));

        // const layer = new lambda.LayerVersion(this, 'MeetingUtilsLayer', {
        //     code: new lambda.AssetCode('back-end-resources/lambda-layer'),
        //     compatibleRuntimes: [lambda.Runtime.NODEJS_12_X],
        //     license: 'Apache-2.0',
        //     description: 'Meeting Utils Layer',
        // });

        const joinLambda = new lambda.Function(this, 'joinMeeting', {
            code: lambda.Code.fromAsset("back-end-resources/src", {exclude: ["**", "!utils.js", "!join.js"]}),
            handler: 'join.handler',
            runtime: lambda.Runtime.NODEJS_12_X,
            environment: {
              MEETINGS_TABLE_NAME: meetingsTable.tableName,
              ATTENDEES_TABLE_NAME: attendeeTable.tableName,
            },
            // layers: [layer],
            role: lambdaChimeRole
        });

        const attendeeLambda = new lambda.Function(this, 'attendee', {
            code: lambda.Code.fromAsset("back-end-resources/src", {exclude: ["**", "!utils.js", "!attendee.js"]}),
            handler: 'attendee.handler',
            runtime: lambda.Runtime.NODEJS_12_X,
            environment: {
              MEETINGS_TABLE_NAME: meetingsTable.tableName,
              ATTENDEES_TABLE_NAME: attendeeTable.tableName,
            },
            // layers: [layer],
            role: lambdaChimeRole
        });

        const endLambda = new lambda.Function(this, 'endMeeting', {
            code: lambda.Code.fromAsset("back-end-resources/src", {exclude: ["**", "!utils.js", "!end.js"]}),
            handler: 'end.handler',
            runtime: lambda.Runtime.NODEJS_12_X,
            environment: {
              MEETINGS_TABLE_NAME: meetingsTable.tableName,
              ATTENDEES_TABLE_NAME: attendeeTable.tableName,
            },
            // layers: [layer],
            role: lambdaChimeRole
        });
      
        const logGroup = new loggroup.LogGroup(this, 'LogGroup', {
          retention: loggroup.RetentionDays.ONE_WEEK,
        });

        
      const logsLambda = new lambda.Function(this, 'logMeeting', {
          code: lambda.Code.fromAsset("back-end-resources/src", {exclude: ["**", "!utils.js", "!logs.js"]}),
          handler: 'logs.handler',
          runtime: lambda.Runtime.NODEJS_12_X,
          environment: {
            MEETINGS_TABLE_NAME: meetingsTable.tableName,
            ATTENDEES_TABLE_NAME: attendeeTable.tableName,
            BROWSER_LOG_GROUP_NAME: logGroup.logGroupName
          },
          // layers: [layer],
          role: lambdaLogsRole
        });

        meetingsTable.grantReadWriteData(joinLambda);
        attendeeTable.grantReadWriteData(joinLambda);
        meetingsTable.grantReadWriteData(endLambda);
        attendeeTable.grantReadWriteData(endLambda);
        meetingsTable.grantReadWriteData(attendeeLambda);
        attendeeTable.grantReadWriteData(attendeeLambda);

        const api = new apigateway.RestApi(this, 'meetingApi', {
            endpointConfiguration: {
              types: [ apigateway.EndpointType.REGIONAL ]
            }
        });

        const apiURL = new cdk.CfnOutput(this, 'apiURL', { 
          value: api.url,
          exportName: "APIURL"
        });        

        apiURL.overrideLogicalId('apiURL')

        const join = api.root.addResource('join');
        const joinIntegration = new apigateway.LambdaIntegration(joinLambda);
        join.addMethod('POST', joinIntegration);
        addCorsOptions(join);        
      
        const attendee = api.root.addResource('attendee');
        const attendeeIntegration = new apigateway.LambdaIntegration(attendeeLambda);
        attendee.addMethod('GET', attendeeIntegration);
        addCorsOptions(attendee);

        const end = api.root.addResource('end');
        const endIntegration = new apigateway.LambdaIntegration(endLambda);
        end.addMethod('POST', endIntegration);
        addCorsOptions(end);
        
        const logs = api.root.addResource('logs');
        const logsIntegration = new apigateway.LambdaIntegration(logsLambda);
        logs.addMethod('POST', logsIntegration);
        addCorsOptions(logs);
        };
}

export function addCorsOptions(apiResource: apigateway.IResource) {
  apiResource.addMethod('OPTIONS', new apigateway.MockIntegration({
    integrationResponses: [{
      statusCode: '200',
      responseParameters: {
        'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
        'method.response.header.Access-Control-Allow-Origin': "'*'",
        'method.response.header.Access-Control-Allow-Credentials': "'false'",
        'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,PUT,POST,DELETE'",
      },
    }],
    passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
    requestTemplates: {
      "application/json": "{\"statusCode\": 200}"
    },
  }), {
    methodResponses: [{
      statusCode: '200',
      responseParameters: {
        'method.response.header.Access-Control-Allow-Headers': true,
        'method.response.header.Access-Control-Allow-Methods': true,
        'method.response.header.Access-Control-Allow-Credentials': true,
        'method.response.header.Access-Control-Allow-Origin': true,
      },  
    }]
  })
}