// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import Flex from '../Flex';
import MicVolumeIndicator from '.';
import IconButton from '../Button/IconButton';
import SecondaryButton from '../Button/SecondaryButton';

export default {
  title: 'UI Components/Microphone Volume',
};


export const BasicMic = () => {
  const [volume, setVolume] = useState(0);
  const handleVolumeUp = () => volume <= .9 ? setVolume(volume + .1) : setVolume(1);
  const handleVolumeDown = () => volume >= .11 ? setVolume(volume - .1) : setVolume(0);
  return (
    <>
      <Flex layout="fill-space-centered">
        <MicVolumeIndicator volume={volume} muted={boolean('muted', false)} signalStrength={select('signalStrength', [0.5, 1], 1)} css='width:1.5rem; height: 1.5rem;' />
      </Flex>
      <Flex layout='fill-space-centered'>
        <SecondaryButton label='-' id='down' onClick={handleVolumeDown} />
        <SecondaryButton label='+' id='up' onClick={handleVolumeUp}/>
      </Flex>
    </>
  );
};

BasicMic.story = {
  name: 'Basic Mic',
};

export const MicAsButton = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);
  const handleVolumeUp = () => volume <= .9 ? setVolume(volume + .1) : setVolume(1);
  const handleVolumeDown = () => volume >= .11 ? setVolume(volume - .1) : setVolume(0); // JS is bad at math
  return (
    <>
    <Flex layout="fill-space-centered">
      <IconButton
        onClick={() => setIsMuted(!isMuted)} label='Microphone'
        icon={
          <MicVolumeIndicator
            volume={volume} 
            muted={isMuted}
            signalStrength={select('signalStrength', [0.5, 1], 1)}
          />
        }
        iconSize={select('iconSize', ['sm', 'md', 'lg'], 'sm')} 
      />
    </Flex>
    <Flex layout='fill-space-centered'>
      <SecondaryButton label='-' id='down' onClick={handleVolumeDown} />
      <SecondaryButton label='+' id='up' onClick={handleVolumeUp}/>
    </Flex>
    </>
  );
};

MicAsButton.story = {
  name: 'Mic as button',
};
