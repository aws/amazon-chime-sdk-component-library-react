// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Microphone, Camera, Dialer, Sound, Phone, Laptop } from '../icons';
import ControlBar from '.';
import ControlBarItem from './ControlBarItem';

export default {
  title: 'ControlBar',
};

export const _ControlBar = () => {
  const [muted, setMuted] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  const microphoneButtonProps = {
    icon: muted ? <Microphone disabled /> : <Microphone /> ,
    onClick: () => setMuted(!muted),
    label: 'Mute',
  }

  const cameraButtonProps = {
    icon: cameraActive ? <Camera /> : <Camera disabled />,
    popOver: [
      { onClick: () => console.log('camera popover option 1'), children: <span>Some option text</span>},
      { onClick: () => console.log('camera popover option 2'), children: <span>More option text</span>},
    ],
    onClick: () => setCameraActive(!cameraActive),
    label: 'Camera',
  }

  const dialButtonProps = {
    icon: <Dialer />,
    onClick: () => console.log('Toggle dial pad'),
    label: 'Dial',
  }

  const hangUpButtonProps = {
    icon: <Phone />,
    onClick: () => console.log('End meeting'),
    label: 'End',
  }

  const volumeButtonProps = {
    icon: <Sound />,
    onClick: () => console.log('Volume button clicked'),
    popOver: [
      { onClick: () => console.log('volume popover option 1'), children: <span>Some option text</span>},
      { onClick: () => console.log('volume popover option 2'), children: <span>More option text</span>},
    ],
    label: 'Volume',
  }

  const laptopButtonProps = {
    icon: <Laptop />,
    onClick: () => console.log('Screen button clicked'),
    label: 'Screen'
  }

  return(
    <ControlBar
      showLabels={boolean('show labels', true)}
      layout={select(
        'layout',{
          top: 'top',
          bottom:'bottom',
          right: 'right',
          left: 'left',
          undockedVertical: 'undocked-vertical',
          undockedHorizontal: 'undocked-horizontal',
         },
        'top'
      )}
    >
        <ControlBarItem {...microphoneButtonProps} />
        <ControlBarItem {...volumeButtonProps} />
        <ControlBarItem {...cameraButtonProps} />
        <ControlBarItem {...dialButtonProps} />
        <ControlBarItem {...laptopButtonProps} />
        <ControlBarItem {...hangUpButtonProps} />
    </ControlBar>
    )
};
