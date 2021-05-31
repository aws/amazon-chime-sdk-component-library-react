// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import cdkExports from '../cdk-outputs.json';

const apiPath = cdkExports.MeetingBackEnd.apiURL

const awsPath = '/prod';
export const rootPath: string = window.location.href.includes(awsPath)
  ? `${awsPath}/`
  : '/';


// export const apiPath = process.env.API_PATH

const routes = {
  API: `${apiPath}`,
  HOME: `${rootPath}`,
  DEVICE: `${rootPath}devices`,
  MEETING: `${rootPath}meeting`,
  JOIN: `${rootPath}join`,
};

export default routes;