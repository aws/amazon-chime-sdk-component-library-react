import React from 'react';
import { Heading } from 'amazon-chime-sdk-component-library-react';

import DeviceSelection from '../../containers/DeviceSelection';
import JoinMeetingDetails from '../../containers/MeetingJoinDetails';

import { StyledLayout } from './Styled';

const DeviceSetup: React.FC = () => (
  <StyledLayout>
    <Heading as="h1" level="h3" css="align-self: flex-start">
      Device settings
    </Heading>
    <DeviceSelection />
    <JoinMeetingDetails />
  </StyledLayout>
);

export default DeviceSetup;
