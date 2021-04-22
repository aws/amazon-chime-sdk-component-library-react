// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  useState,
  useContext,
  ChangeEvent,
  useCallback,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';

import {
  Input,
  Flex,
  Heading,
  FormField,
  PrimaryButton,
  SecondaryButton,
  useMeetingManager,
  Modal,
  ModalBody,
  ModalHeader,
} from 'amazon-chime-sdk-component-library-react';

import { getErrorContext } from '../../providers/ErrorProvider';
import routes from '../../constants/routes';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import DevicePermissionPrompt from '../DevicePermissionPrompt';
import {
  fetchMeeting,
  createGetAttendeeCallback,
  getAllMeetings,
} from '../../utils/api';
import { useAppState } from '../../providers/AppStateProvider';

const MeetingForm: React.FC = () => {
  const meetingManager = useMeetingManager();
  const {
    setAppMeetingInfo,
    region: appRegion,
    meetingId: appMeetingId,
  } = useAppState();
  const [meetingId, setMeetingId] = useState(appMeetingId);
  const [meetingErr, setMeetingErr] = useState(false);
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [region] = useState(appRegion);
  const [isLoading, setIsLoading] = useState(false);
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();
  // new features
  const [meetings, setMeetings] = useState<any>([]);
  const getMeetings = useCallback(async () => {
    const data = await getAllMeetings();
    // eslint-disable-next-line no-shadow
    const meetings = [];
    // eslint-disable-next-line no-shadow,guard-for-in,no-restricted-syntax
    for (const meetingId in data) {
      const meeting = {
        name: meetingId,
        meetingInfo: data[meetingId],
      };
      meetings.push(meeting);
    }
    console.error('Data:', meetings);
    setMeetings(meetings);
  }, []);
  const [newMeetingId, setNewMeetingId] = useState('');
  const [newMeetingErr, setNewMeetingErr] = useState(false);

  // todo use queryHook
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const meeting = urlParams.get('meeting') || '';
    setMeetingId(meeting);
    getMeetings();
  }, [getMeetings]);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(
      function() {
        console.log('Async: Copying to clipboard was successful!');
      },
      function(err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }, []);

  const handleJoinToSelectedMeeting = useCallback(async (item: any) => {
    setMeetingId(item.name);
  }, []);

  const handleCreateNewMeeting = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const id = newMeetingId.trim().toLocaleLowerCase();

      if (!id) {
        setNewMeetingErr(true);
        return;
      }

      setIsLoading(true);
      try {
        await fetchMeeting(id, '', region);
        await getMeetings();
      } catch (error) {
        updateErrorMessage(error.message);
      } finally {
        setIsLoading(false);
        setNewMeetingId('');
        // setNewRegion(appRegion)
      }
    },
    [getMeetings, newMeetingId, region, updateErrorMessage]
  );

  const handleJoinMeeting = async (e: React.FormEvent) => {
    e.preventDefault();

    const id = meetingId.trim().toLocaleLowerCase();
    const attendeeName = name.trim();

    if (!id || !attendeeName) {
      if (!attendeeName) {
        setNameErr(true);
      }

      if (!id) {
        setMeetingErr(true);
      }

      return;
    }

    setIsLoading(true);
    meetingManager.getAttendee = createGetAttendeeCallback(id);

    try {
      const { JoinInfo } = await fetchMeeting(id, attendeeName, region);

      await meetingManager.join({
        meetingInfo: JoinInfo.Meeting,
        attendeeInfo: JoinInfo.Attendee,
      });

      setAppMeetingInfo(id, attendeeName, region);
      history.push(routes.DEVICE);
    } catch (error) {
      updateErrorMessage(error.message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setName('');
    setIsLoading(false);
  };
  return (
    <>
      <form>
        <Heading tag="h3" level={4} css="margin-bottom: 1rem">
          New meeting
        </Heading>

        <FormField
          field={Input}
          label="New Meeting Id"
          value={newMeetingId}
          infoText="Anyone with access to the meeting ID can join"
          fieldProps={{
            name: 'newMeetingId',
            placeholder: 'Enter Meeting Id',
          }}
          errorText="Please enter a valid meeting ID"
          error={newMeetingErr}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setNewMeetingId(e.target.value);
            if (newMeetingErr) {
              setNewMeetingErr(false);
            }
          }}
        />

        <Flex
          container
          layout="fill-space-centered"
          style={{ marginTop: '2.5rem' }}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <PrimaryButton
              label="Create new"
              onClick={handleCreateNewMeeting}
            />
          )}
        </Flex>
      </form>

      <Heading tag="h3" level={4} css="margin-bottom: 1rem">
        All meetings
      </Heading>
      <ul>
        {meetings.map((item: any, index: any) => {
          const { name } = item;
          return (
            <li key={`${name}-${index}`}>
              <Flex
                layout="equal-columns"
                justifyContent="space-around"
                alignItems="center"
                css="margin: 1rem"
              >
                <div>
                  <SecondaryButton
                    label="Join to:"
                    onClick={e => {
                      e.preventDefault();
                      handleJoinToSelectedMeeting(item);
                    }}
                  />
                </div>
                <div>
                  <span style={{ textAlign: 'center' }}>{name}</span>
                </div>
                <div>
                  <SecondaryButton
                    label="Copy link"
                    onClick={e => {
                      e.preventDefault();
                      const link = `${window.location.hostname}:${window.location.port}?meeting=${name}`;
                      copy(link);
                    }}
                  />
                </div>
              </Flex>
            </li>
          );
        })}
      </ul>
      <form>
        <Heading tag="h1" level={4} css="margin-bottom: 1rem">
          Join a meeting
        </Heading>
        <FormField
          field={Input}
          label="Meeting Id"
          value={meetingId}
          infoText="Anyone with access to the meeting ID can join"
          fieldProps={{
            name: 'meetingId',
            placeholder: 'Enter Meeting Id',
          }}
          errorText="Please enter a valid meeting ID"
          error={meetingErr}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setMeetingId(e.target.value);
            if (meetingErr) {
              setMeetingErr(false);
            }
          }}
        />
        <FormField
          field={Input}
          label="Name"
          value={name}
          fieldProps={{
            name: 'name',
            placeholder: 'Enter Your Name',
          }}
          errorText="Please enter a valid name"
          error={nameErr}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setName(e.target.value);
            if (nameErr) {
              setNameErr(false);
            }
          }}
        />
        <Flex
          container
          layout="fill-space-centered"
          style={{ marginTop: '2.5rem' }}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <PrimaryButton label="Continue" onClick={handleJoinMeeting} />
          )}
        </Flex>
        {errorMessage && (
          <Modal size="md" onClose={closeError}>
            <ModalHeader title={`Meeting ID: ${meetingId}`} />
            <ModalBody>
              <Card
                title="Unable to join meeting"
                description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
                smallText={errorMessage}
              />
            </ModalBody>
          </Modal>
        )}
        <DevicePermissionPrompt />
      </form>
    </>
  );
};

export default MeetingForm;
