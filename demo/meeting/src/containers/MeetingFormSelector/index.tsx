import React from 'react';
import { SecondaryButton } from 'amazon-chime-sdk-component-library-react';

import MeetingForm from '../MeetingForm';
import SIPMeeting from '../SIPMeeting';
import useToggle from '../../hooks/useToggle';
import SIPMeetingProvider from '../../providers/SIPMeetingProvider';
import { StyledDiv } from './Styled';

const MeetingFormSelector: React.FC = () => {
  const { isActive, toggle } = useToggle(false);
  const formToShow = isActive ? (
    <SIPMeetingProvider>
      <SIPMeeting />
    </SIPMeetingProvider>
  ) : (
    <MeetingForm />
  );
  const buttonText = isActive
    ? 'Join normal meeting (Without SIP)'
    : 'Joining via voice connector (With SIP)';

  return (
    <StyledDiv>
      {formToShow}
      <SecondaryButton
        className="btn-toggle-form"
        label={buttonText}
        onClick={toggle}
      />
    </StyledDiv>
  );
};

export default MeetingFormSelector;
