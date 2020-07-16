// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

const awsPath: string = '/Prod';
const rootPath: string = window.location.href.includes(awsPath) ? `${awsPath}/` : '/';

const routes = {
  HOME: `${rootPath}`,
  DEVICE: `${rootPath}devices`,
  MEETING: `${rootPath}meeting`,
}

export default routes;
