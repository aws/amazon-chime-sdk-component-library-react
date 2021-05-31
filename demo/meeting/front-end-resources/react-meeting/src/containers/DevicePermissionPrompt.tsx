// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  Modal,
  ModalBody,
  ModalHeader,
  DevicePermissionStatus,
  useDevicePermissionStatus
} from 'amazon-chime-sdk-component-library-react';

import Card from '../components/Card';

// Show permission prompt when the user is granting the browser permissions
// Show nothing if permission is already granted or component loads on initial render
const DevicePermissionPrompt = () => {
  const permission = useDevicePermissionStatus();

  return permission === DevicePermissionStatus.IN_PROGRESS ? (
    <Modal
      size="md"
      onClose={(): void => console.log('Permission prompt closed')}
      rootId="device-permission-modal-root"
    >
      <ModalHeader
        title="Device Label Permissions check"
        displayClose={false}
      />
      <ModalBody>
        <Card
          title="Unable to get device labels"
          description={
            <>
              <p>
                In order to select media devices, we need to do a quick
                permissions check of your mic and camera.
              </p>
              <p>
                When the pop-up appears, choose <strong>Allow</strong>.
              </p>
            </>
          }
        />
      </ModalBody>
    </Modal>
  ) : null;
};

export default DevicePermissionPrompt;
