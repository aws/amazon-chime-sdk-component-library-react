import React, { FC, useState, FormEvent } from 'react';

import Input from '../components/Input';
import ApiGatewayClient from '../ApiGatewayClient';

const MeetingForm: FC = () => {
  const [inputName, setInputName] = useState("");

  const handleJoinMeeting = (e: FormEvent) => {
    e.preventDefault();
    ApiGatewayClient.createCustomer(inputName);
    console.log("TODO: show loading bar or status on UI");
  };

  return (
    <form className="MeetingForm">
      <p>Start a video chat with an agent representative</p>
      <Input
        type={"text"}
        name={"inputName"}
        value={inputName}
        placeholder={"Your Name"}
        onChange={e => setInputName(e.target.value)}
      />
      <button onClick={handleJoinMeeting}>Call</button>
    </form>
  );
}

export default MeetingForm;