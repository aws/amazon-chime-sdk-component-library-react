import React, { useState } from 'react';

import Input from '../components/Input';

const MeetingForm: React.FC = () => {
  const [meetingId, setMeetingId] = useState("");
  const [inputName, setInputName] = useState("");

  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Need to add meeting manager and initiate meeting sesssion");
  };

  return (
    <form className="MeetingForm">
      <h1>Join a meeting</h1>
      <Input
        type={"text"}
        name={"meetingId"}
        value={meetingId}
        placeholder={"Meeting ID"}
        onChange={e => setMeetingId(e.target.value)}
      />
      <Input
        type={"text"}
        name={"inputName"}
        value={inputName}
        placeholder={"Your Name"}
        onChange={e => setInputName(e.target.value)}
      />
      <button onClick={handleJoinMeeting}>Continue</button>
      <p>Anyone with access to the meeting link can join.</p>
    </form>
  );
}

export default MeetingForm;
