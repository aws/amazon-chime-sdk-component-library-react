// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import MeetingRoster from '../MeetingRoster';
import Navigation from '.';
import { useNavigation } from '../../providers/NavigationProvider';

const NavigationControl = () => {
  const { showNavbar, showRoster } = useNavigation();

  return (
    <>
      {showNavbar ? <Navigation /> : null}
      {showRoster ? <MeetingRoster /> : null}
    </>
  );
};

export default NavigationControl;
