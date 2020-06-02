import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import { getErrorContext } from '../providers/ErrorProvider';
import Input from '../components/Input';
import routes from '../constants/routes';
import Modal from '../components/Modal';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import DevicePermissionPrompt from './DevicePermissionPrompt';

const MeetingForm: React.FC = () => {
  const [meetingId, setMeetingId] = useState("");
  const [inputName, setInputName] = useState("");
  const [region, setRegion] = useState("us-east-1");
  const [isLoading, setIsLoading] = useState(false);
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();
  const meetingManager: MeetingManager | null = useContext(MeetingContext);

  const handleJoinMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const meeting = await meetingManager?.authenticate(meetingId, inputName, region);
      console.log("Join meeting info ", meeting);
      history.push(`${routes.DEVICE}`);
    } catch(error) {
      updateErrorMessage(error.message);
    }
  }

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setInputName('');
    setIsLoading(false);
  };

  return (
    <form className="MeetingForm" onSubmit={handleJoinMeeting}>
      <h1>Join a meeting</h1>
      <Input
        type={"text"}
        name={"meetingId"}
        required={true}
        value={meetingId}
        placeholder={"Meeting ID"}
        onChange={e => setMeetingId(e.target.value)}
      />
      <Input
        type={"text"}
        name={"inputName"}
        required={true}
        value={inputName}
        placeholder={"Your Name"}
        onChange={e => setInputName(e.target.value)}
      />
      <select onChange={e => setRegion(e.target.value)}>
        <option value="us-east-1">United States (N. Virginia)</option>
        <option value="ap-northeast-1">Japan (Tokyo)</option>
        <option value="ap-southeast-1">Singapore</option>
        <option value="ap-southeast-2">Australia (Sydney)</option>
        <option value="ca-central-1">Canada</option>
        <option value="eu-central-1">Germany (Frankfurt)</option>
        <option value="eu-north-1">Sweden (Stockholm)</option>
        <option value="eu-west-1">Ireland</option>
        <option value="eu-west-2">United Kingdom (London)</option>
        <option value="eu-west-3">France (Paris)</option>
        <option value="sa-east-1">Brazil (São Paulo)</option>
        <option value="us-east-2">United States (Ohio)</option>
        <option value="us-west-1">United States (N. California)</option>
        <option value="us-west-2">United States (Oregon)</option>
      </select>
      <br /><br />
      <button type="submit" disabled={isLoading}>Continue</button>
      {isLoading && <Spinner />}
      <p>Anyone with access to the meeting link can join.</p>
      
      {errorMessage && (
        <Modal onClose={closeError}>
          <Card
            header={`Meeting ID: ${meetingId}`}
            title="Unable to find meeting"
            description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
            smallText={errorMessage}
          />
        </Modal>
      )}
      <DevicePermissionPrompt />
    </form>
  );
}

export default MeetingForm;
