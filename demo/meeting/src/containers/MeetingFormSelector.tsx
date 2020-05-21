import React from 'react';

import MeetingForm from './MeetingForm';
import SIPMeeting from './SIPMeeting';
import useToggle from '../hooks/useToggle';
import SIPMeetingProvider from '../providers/SIPMeetingProvider';

const MeetingFormSelector: React.FC = () => {
  const { isTrue, toggleIsTrue } = useToggle(false);
  const formToShow = isTrue ? (
    <SIPMeetingProvider>
      <SIPMeeting />
    </SIPMeetingProvider>
  ) : (
    <MeetingForm />
  );
  const buttonText = isTrue
    ? 'Join normal meeting (Without SIP)'
    : 'Joining via voice connector (With SIP)';

  return (
    <>
      {formToShow}
      <button type="button" onClick={toggleIsTrue}>
        {buttonText}
      </button>
    </>
  );
};

export default MeetingFormSelector;
