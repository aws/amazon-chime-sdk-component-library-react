// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';

import Add from '../Add';
import Arrow from '../Arrow';
import Attendees from '../Attendees';
import Camera from '../Camera';
import Caret from '../Caret';
import Caution from '../Caution';
import Chat from '../Chat';
import Check from '../Check';
import CheckRound from '../CheckRound';
import Clear from '../Clear';
import Clock from '../Clock';
import Cog from '../Cog';
import Dots from '../Dots';
import ScreenShare from '../ScreenShare';
import Crown from '../Crown';
import DeskPhone from '../DeskPhone';
import Dialer from '../Dialer';
import Hamburger from '../Hamburger';
import Information from '../Information';
import Laptop from '../Laptop';
import LeaveMeeting from '../LeaveMeeting';
import Meeting from '../Meeting';
import Microphone from '../Microphone';
import Pause from '../Pause';
import Phone from '../Phone';
import Play from '../Play';
import Presenter from '../Presenter';
import Record from '../Record';
import Remove from '../Remove';
import Rooms from '../Rooms';
import Search from '../Search';
import Share from '../Share';
import SignalStrength from '../SignalStrength';
import Sound from '../Sound';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/All',
  component: null,
};

const icons = [
  Add,
  Arrow,
  Attendees,
  Camera,
  Caret,
  Caution,
  Chat,
  Check,
  CheckRound,
  Clear,
  Clock,
  Cog,
  Dots,
  ScreenShare,
  Crown,
  DeskPhone,
  Dialer,
  Hamburger,
  Information,
  Laptop,
  LeaveMeeting,
  Meeting,
  Microphone,
  Pause,
  Phone,
  Play,
  Presenter,
  Record,
  Remove,
  Rooms,
  Search,
  Share,
  SignalStrength,
  Sound,
];

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1.5rem;
  width: 80px;
  padding: 0.5rem;
  border-radius: 2px;
`;

const getIconAndName = (Component) => {
  return (
    <IconWrapper>
      <Component width={text('width', '4rem')} />
      <p>{Component.displayName}</p>
    </IconWrapper>
  );
};

export const _All = () => {
  return (
    <Flex container flexDirection="row" alignItems="center" flexWrap="wrap">
      {icons.map((i) => getIconAndName(i))}
    </Flex>
  );
};
