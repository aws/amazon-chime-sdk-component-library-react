// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  Heading,
  AppCheckerProvider
} from 'amazon-chime-sdk-component-library-react';

import AppCheckerResult from '../../containers/AppCheckerResult';
import { StyledLayout } from './Styled';

const AppCheckerDetail = () => {
  return (
    <AppCheckerProvider>
      <StyledLayout>
        <Heading tag="h2" level={4} css="align-self: center">
          Device Readiness tests
        </Heading>
        <AppCheckerResult />
      </StyledLayout>
    </AppCheckerProvider>
  );
};

export default AppCheckerDetail;
