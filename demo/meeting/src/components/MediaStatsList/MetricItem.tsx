// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { StyledItemMetricName, StyledItemMetricValue } from './Styled';

export interface MetricItemProps {
  metricName: string;
  metricValues: string[];
}

export const MetricItem: React.FC<MetricItemProps> = ({
  metricName,
  metricValues
}) => {
  const showMetricItem = metricValues[0] && metricValues[0] !== '';
  return (
    <>
      {showMetricItem && (
        <>
          <StyledItemMetricName>{metricName}</StyledItemMetricName>
          {metricValues.map(metricValue => {
            return <StyledItemMetricValue>{metricValue}</StyledItemMetricValue>;
          })}
        </>
      )}
    </>
  );
};

export default MetricItem;
