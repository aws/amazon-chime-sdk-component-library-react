// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import cloudfront = require('@aws-cdk/aws-cloudfront');
import s3 = require('@aws-cdk/aws-s3');
import s3deploy = require('@aws-cdk/aws-s3-deployment');
import cdk = require('@aws-cdk/core');
import { Construct } from '@aws-cdk/core';
import iam = require('@aws-cdk/aws-iam')

/**
 * Static site infrastructure, which deploys site content to an S3 bucket.
 *
 * The site redirects from HTTP to HTTPS, using a CloudFront distribution,
 * Route53 alias record, and ACM certificate.
 */
export class FrontEnd extends Construct {
    constructor(parent: Construct, name: string) {
        super(parent, name);

        // Content bucket
        const siteBucket = new s3.Bucket(this, 'SiteBucket', {
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'index.html',
            publicReadAccess: false,

            // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
            // the new bucket, and it will remain in your account until manually deleted. By setting the policy to
            // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true, // NOT recommended for production code
        });
        new cdk.CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });

        // TLS certificate
        const distributionOAI = new cloudfront.OriginAccessIdentity(this, 'OAI', {
            comment: "distribution OAI"
        })

        // CloudFront distribution that provides HTTPS
        const distribution = new cloudfront.CloudFrontWebDistribution(this, 'SiteDistribution', {
            errorConfigurations: [
                {
                    errorCode: 404,
                    responseCode: 200,
                    responsePagePath: '/index.html',
                }
            ],
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: siteBucket,
                        originAccessIdentity: distributionOAI
                    },
                    behaviors : [ {isDefaultBehavior: true}],
                },
            ],
        });

        new cdk.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });
        new cdk.CfnOutput(this, "siteURL", {
            value: 'https://' + distribution.distributionDomainName
        })

        const policyStatement = new iam.PolicyStatement();
        policyStatement.addActions('s3:GetBucket*');
        policyStatement.addActions('s3:GetObject*');
        policyStatement.addActions('s3:List*');
        policyStatement.addResources(siteBucket.bucketArn);
        policyStatement.addResources(`${siteBucket.bucketArn}/*`);
        policyStatement.addCanonicalUserPrincipal(distributionOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId);
    
        siteBucket.addToResourcePolicy(policyStatement);

        // Deploy site contents to S3 bucket
        new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
            sources: [ s3deploy.Source.asset('front-end-resources/react-meeting/build') ],
            destinationBucket: siteBucket,
            distribution,
            distributionPaths: ['/*'],
          });
    }
}
