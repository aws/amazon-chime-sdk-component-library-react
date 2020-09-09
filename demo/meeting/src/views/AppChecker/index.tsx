// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import {
  CameraSelection,
  MicSelection,
  SpeakerSelection,
  Heading,
} from 'amazon-chime-sdk-component-library-react';

import { StyledLayout } from './Styled';
import RegionSelection from '../../containers/MeetingForm/RegionSelection';
import { useAppState } from '../../providers/AppStateProvider';
import AppCheckerSubmit from '../../components/AppCheckerSubmit';

const AppChecker = () => {
  const { region: appRegion } = useAppState();
  const [region, setRegion] = useState(appRegion);

  return (
    <StyledLayout>
      <Heading tag="h1" level={3} css="align-self: flex-start">
        App Readiness Checker
      </Heading>
      <div style={{ paddingTop: '2rem' }}>
        <SpeakerSelection />
        <MicSelection />
        <CameraSelection />
        <RegionSelection setRegion={setRegion} region={region} />
        <AppCheckerSubmit />
      </div>
    </StyledLayout>
  );
};

export default AppChecker;
