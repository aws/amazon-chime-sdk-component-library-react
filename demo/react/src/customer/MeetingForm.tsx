import React, { FC, useState, FormEvent } from 'react';

import Input from '../components/Input';


export interface MeetingFormProps {
  handleSubmit: (customerName: string) => void;
  isLoading: boolean;
}

const MeetingForm: FC<MeetingFormProps> = ({handleSubmit, isLoading}) => {
  const [inputName, setInputName] = useState("");

  const startCall = (e: FormEvent, customerName: string) => {
    e.preventDefault();
    handleSubmit(customerName);
  }

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
      <button onClick={e => startCall(e, inputName)}>{isLoading ? "Connecting..." : "Call"}</button>
    </form>
  );
}

export default MeetingForm;