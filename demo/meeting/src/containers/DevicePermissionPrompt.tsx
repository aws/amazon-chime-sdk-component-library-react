// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import useDevicePermissionStatus from '../hooks/useDevicePermissionStatus';
import Card from '../components/Card';
import { DevicePermissionStatus } from '../enums';

const StyledPermissionPrompt = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  .content {
    width: 20rem;
    height: 10rem;
    background-color: #fefefe;
    padding: 2rem;
    border-radius: 0.25rem;
  }
`;

// Show permission prompt when the user is granting the browser permissions
// Show nothing if permission is already granted or component loads on initial render
const DevicePermissionPrompt = () => {
  const permission = useDevicePermissionStatus();

  return permission === DevicePermissionStatus.IN_PROGRESS ? (
    <StyledPermissionPrompt>
      <div className="content">
        <Card
          header="Permissions check"
          title="Unable to get device labels"
          description="In order to select media devices, we need to do a quick permissions check of your mic and camera. When the pop-up appears, choose Allow."
        />
      </div>
    </StyledPermissionPrompt>
  ) : null;
};

export default DevicePermissionPrompt;
