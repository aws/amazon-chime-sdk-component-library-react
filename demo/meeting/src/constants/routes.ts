// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

const awsPath = '/Prod';
export const rootPath: string = window.location.href.includes(awsPath)
  ? `${awsPath}/`
  : '/';

const routes = {
  HOME: `${rootPath}`,
  DEVICE: `${rootPath}devices`,
  MEETING: `${rootPath}meeting`,
  CHECKER: `${rootPath}checker`,
  CHECKER_DETAIL: `${rootPath}checker-result`,
};

export default routes;
