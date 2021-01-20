/* eslint-disable no-console */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButtonGroup,
  ModalButton,
} from 'amazon-chime-sdk-component-library-react';

import './ChannelModals.css';

export const ViewChannelDetailsModal = ({ onClose, channel, moderators }) => {
  const modNames = moderators.map((m) => (
    <div key={m.Moderator.Arn}>{m.Moderator.Name}</div>
  ));
  return (
    <Modal onClose={onClose} className="view-details">
      <ModalHeader title="Channel Details" />
      <ModalBody>
        <div className="container">
          <div className="row">
            <div className="key">Channel Name</div>
            <div className="value">{channel.Name}</div>
          </div>

          {moderators.length > 0 ? (
            <div className="row">
              <div className="key">Moderators</div>
              <div className="value">{modNames}</div>
            </div>
          ) : null}

          <div className="row">
            <div className="key">Type</div>
            <div className="value">
              {channel.Privacy === 'PRIVATE' && (
                <span>
                  <span className="main">Private</span>
                  <span className="detail">
                    (non-members can read and send messages)
                  </span>
                </span>
              )}
              {channel.Privacy === 'PUBLIC' && (
                <span>
                  <span className="main">Public</span>
                  <span className="detail">
                    (only members can read and send messages)
                  </span>
                </span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="key">Mode</div>
            <div className="value">
              {channel.Mode === 'RESTRICTED' && (
                <span>
                  <span className="main">Restricted</span>
                  <span className="detail">
                    (administrators and moderators can add members)
                  </span>
                </span>
              )}
              {channel.Mode === 'UNRESTRICTED' && (
                <span>
                  <span className="main">Unrestricted</span>
                  <span className="detail">
                    (any member can add other members)
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalButtonGroup
        primaryButtons={[
          <ModalButton label="OK" variant="primary" closesModal />,
        ]}
      />
    </Modal>
  );
};

export default ViewChannelDetailsModal;
