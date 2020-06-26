import React from 'react';
import { Heading } from 'amazon-chime-sdk-component-library-react';

import DeviceSelection from '../../containers/DeviceSelection';
import JoinMeetingDetails from '../../containers/MeetingJoinDetails';

import { StyledLayout } from './Styled';

const DeviceSetup: React.FC = () => (
  <StyledLayout>
    <Heading tag="h1" level={3} css="align-self: flex-start">
      Device settings
    </Heading>
    <DeviceSelection />
    <JoinMeetingDetails />
  </StyledLayout>
);

export default DeviceSetup;
