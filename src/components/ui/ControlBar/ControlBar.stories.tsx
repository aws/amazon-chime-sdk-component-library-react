// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Microphone, Camera, Dialer, Sound, Phone, Laptop } from '../icons';
import ControlBar from '.';
import ControlBarButton from './ControlBarButton';
import ControlBarDocs from './ControlBar.mdx';

import PopOverItem from '../PopOver/PopOverItem';
import PopOverSubMenu from '../PopOver/PopOverSubMenu';
import PopOverSeparator from '../PopOver/PopOverSeparator';
import PopOverHeader from '../PopOver/PopOverHeader';

export default {
  title: 'UI Components/ControlBar',
  parameters: {
    docs: {
      page: ControlBarDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ControlBar,
  excludeStories: ['ControlBarForDocs'],
};

export const ControlBarForDocs = () => {
  const [muted, setMuted] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  const microphoneButtonProps = {
    icon: muted ? <Microphone muted /> : <Microphone />,
    onClick: () => setMuted(!muted),
    label: 'Mute',
  };

  const cameraButtonProps = {
    icon: cameraActive ? <Camera /> : <Camera disabled />,
    isSelected: true,
    popOver: [
      {
        onClick: () => console.log('camera popover option 1'),
        children: <span>Some option text</span>,
      },
      {
        onClick: () => console.log('camera popover option 2'),
        children: <span>More option text</span>,
      },
    ],
    onClick: () => setCameraActive(!cameraActive),
    label: 'Camera',
  };

  const dialButtonProps = {
    icon: <Dialer />,
    onClick: () => console.log('Toggle dial pad'),
    label: 'Dial',
  };

  const hangUpButtonProps = {
    icon: <Phone />,
    onClick: () => console.log('End meeting'),
    label: 'End',
  };

  const volumeButtonProps = {
    icon: <Sound />,
    onClick: () => console.log('Volume button clicked'),
    popOver: [
      {
        onClick: () => console.log('volume popover option 1'),
        children: <span>Some option text</span>,
      },
      {
        onClick: () => console.log('volume popover option 2'),
        children: <span>More option text</span>,
      },
    ],
    label: 'Volume',
  };

  const laptopButtonProps = {
    icon: <Laptop />,
    onClick: () => console.log('Screen button clicked'),
    label: 'Screen',
  };

  return (
    <ControlBar showLabels={true} layout="left" css="position: absolute;">
      <ControlBarButton {...microphoneButtonProps}>
        <PopOverHeader title="Title text" subtitle="Subtitle text" />
        <PopOverItem as="button" onClick={() => console.log('clicked')}>
          <span>Also test content</span>
        </PopOverItem>
        <PopOverSeparator />
        <PopOverItem as="button" onClick={() => console.log('clicked')}>
          <span>This is more test content</span>
        </PopOverItem>
        <PopOverSubMenu text="This is a submenu">
          <PopOverItem as="button" onClick={() => console.log('clicked')}>
            <span>This is also a submenu component</span>
          </PopOverItem>
          <PopOverItem as="button" onClick={() => console.log('clicked')}>
            <span>This is also a submenu component</span>
          </PopOverItem>
        </PopOverSubMenu>
        <PopOverItem as="button" onClick={() => console.log('clicked')}>
          <span>This has very long text</span>
        </PopOverItem>
      </ControlBarButton>
      <ControlBarButton {...volumeButtonProps} />
      <ControlBarButton {...cameraButtonProps} />
      <ControlBarButton {...dialButtonProps} />
      <ControlBarButton {...laptopButtonProps} />
      <ControlBarButton {...hangUpButtonProps} />
    </ControlBar>
  );
};

export const _ControlBar = () => {
  const [muted, setMuted] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  const microphoneButtonProps = {
    icon: muted ? <Microphone muted /> : <Microphone />,
    onClick: () => setMuted(!muted),
    label: 'Mute',
  };

  const cameraButtonProps = {
    icon: cameraActive ? <Camera /> : <Camera disabled />,
    isSelected: true,
    popOver: [
      {
        onClick: () => console.log('camera popover option 1'),
        children: <span>Some option text</span>,
      },
      {
        onClick: () => console.log('camera popover option 2'),
        children: <span>More option text</span>,
      },
    ],
    onClick: () => setCameraActive(!cameraActive),
    label: 'Camera',
  };

  const dialButtonProps = {
    icon: <Dialer />,
    onClick: () => console.log('Toggle dial pad'),
    label: 'Dial',
  };

  const hangUpButtonProps = {
    icon: <Phone />,
    onClick: () => console.log('End meeting'),
    label: 'End',
  };

  const volumeButtonProps = {
    icon: <Sound />,
    onClick: () => console.log('Volume button clicked'),
    popOver: [
      {
        onClick: () => console.log('volume popover option 1'),
        children: <span>Some option text</span>,
      },
      {
        onClick: () => console.log('volume popover option 2'),
        children: <span>More option text</span>,
      },
    ],
    label: 'Volume',
  };

  const laptopButtonProps = {
    icon: <Laptop />,
    onClick: () => console.log('Screen button clicked'),
    label: 'Screen',
  };

  return (
    <ControlBar
      showLabels={boolean('show labels', true)}
      responsive={boolean('responsive', true)}
      layout={select(
        'layout',
        {
          top: 'top',
          bottom: 'bottom',
          right: 'right',
          left: 'left',
          undockedVertical: 'undocked-vertical',
          undockedHorizontal: 'undocked-horizontal',
        },
        'top'
      )}
    >
      <ControlBarButton {...microphoneButtonProps} />
      <ControlBarButton {...volumeButtonProps}>
        <PopOverItem as="button" onClick={() => console.log('clicked')}>
          <span>This is more test content</span>
        </PopOverItem>
      </ControlBarButton>
      <ControlBarButton {...cameraButtonProps} />
      <ControlBarButton {...dialButtonProps} />
      <ControlBarButton {...laptopButtonProps} />
      <ControlBarButton {...hangUpButtonProps} popOverPlacement="bottom-end">
        <PopOverHeader title="Title text" subtitle="Subtitle text" />
        <PopOverItem as="button" onClick={() => console.log('clicked')}>
          <span>Also test content</span>
        </PopOverItem>
        <PopOverSeparator />
        <PopOverItem as="button" onClick={() => console.log('clicked')}>
          <span>This is more test content</span>
        </PopOverItem>
        <PopOverSubMenu text="This is a submenu">
          <PopOverItem as="button" onClick={() => console.log('clicked')}>
            <span>This is also a submenu component</span>
          </PopOverItem>
          <PopOverItem as="button" onClick={() => console.log('clicked')}>
            <span>This is also a submenu component</span>
          </PopOverItem>
        </PopOverSubMenu>
        <PopOverItem as="button" onClick={() => console.log('clicked')}>
          <span>This is also a submenu component</span>
        </PopOverItem>
      </ControlBarButton>
    </ControlBar>
  );
};
