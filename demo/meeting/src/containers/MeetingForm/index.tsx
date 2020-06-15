import React, { useState, useContext, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormField,
  Input,
  Select,
  PrimaryButton,
} from 'amazon-chime-sdk-component-library-react';

import {
  MeetingManager,
  MeetingContext,
} from '../../providers/MeetingProvider';
import { getErrorContext } from '../../providers/ErrorProvider';
import routes from '../../constants/routes';
import Modal from '../../components/Modal';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import DevicePermissionPrompt from '../DevicePermissionPrompt';
import { AVAILABLE_AWS_REGIONS } from '../../constants';
import { StyledForm } from './Styled';
import getFormattedOptionsForSelect from '../../utils/select-options-format';

const MeetingForm: React.FC = () => {
  const [meetingId, setMeetingId] = useState('');
  const [inputName, setInputName] = useState('');
  const [region, setRegion] = useState('us-east-1');
  const [isLoading, setIsLoading] = useState(false);
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();
  const meetingManager: MeetingManager | null = useContext(MeetingContext);

  const handleJoinMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const meeting = await meetingManager?.authenticate(
        meetingId,
        inputName,
        region
      );
      console.log('Join meeting info ', meeting);
      history.push(routes.DEVICE);
    } catch (error) {
      updateErrorMessage(error.message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setInputName('');
    setIsLoading(false);
  };

  return (
    <StyledForm>
      <h1>Join a meeting</h1>
      <FormField
        field={Input}
        label="Meeting Id"
        value={meetingId}
        fieldProps={{
          name: 'meetingId',
          placeholder: 'Enter Meeting Id',
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setMeetingId(e.target.value)
        }
        layout="stack"
      />
      <FormField
        field={Input}
        label="Name"
        value={inputName}
        fieldProps={{
          name: 'inputName',
          placeholder: 'Enter Your Name',
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setInputName(e.target.value)
        }
        layout="stack"
      />
      <FormField
        field={Select}
        options={getFormattedOptionsForSelect(AVAILABLE_AWS_REGIONS)}
        onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
          setRegion(e.target.value)
        }
        value={region}
        label="Select AWS region"
        layout="stack"
      />
      {!isLoading && (
        <PrimaryButton
          className="btn-submit"
          label="Continue"
          onClick={handleJoinMeeting}
        />
      )}
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
    </StyledForm>
  );
};

export default MeetingForm;
