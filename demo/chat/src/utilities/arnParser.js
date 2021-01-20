const arnParser = (arn) => {
  // Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
  // SPDX-License-Identifier: Apache-2.0

  const arnMap = [
    'arn',
    'aws',
    'service',
    'region',
    'namespace',
    'relativeId',
    'relativeValue',
  ];
  return arn.split(':').reduce(function (aggregator, piece, index) {
    aggregator[arnMap[index]] = piece;
    return aggregator;
  }, {});
};

export default arnParser;
