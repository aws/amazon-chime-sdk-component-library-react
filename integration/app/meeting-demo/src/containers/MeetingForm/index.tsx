// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {ChangeEvent, useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Checkbox,
  DeviceLabels,
  Flex,
  FormField,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  PrimaryButton,
  Select,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';
import { DefaultBrowserBehavior } from 'amazon-chime-sdk-js';

import {getErrorContext} from '../../providers/ErrorProvider';
import routes from '../../constants/routes';
import Card from '../../components/Card';
import Spinner from '../../components/icons/Spinner';
import DevicePermissionPrompt from '../DevicePermissionPrompt';
import RegionSelection from './RegionSelection';
import {createGetAttendeeCallback, fetchMeeting} from '../../utils/api';
import {useAppState} from '../../providers/AppStateProvider';
import {MeetingMode, VideoFiltersCpuUtilization} from '../../types';
import meetingConfig from '../../meetingConfig';

const VIDEO_TRANSFORM_FILTER_OPTIONS = [
  { value: VideoFiltersCpuUtilization.Disabled, label: 'Disable Video Filter' }, 
  { value: VideoFiltersCpuUtilization.CPU10Percent, label: 'Video Filter CPU 10%' }, 
  { value: VideoFiltersCpuUtilization.CPU20Percent, label: 'Video Filter CPU 20%' }, 
  { value: VideoFiltersCpuUtilization.CPU40Percent, label: 'Video Filter CPU 40%' },
];

const MeetingForm: React.FC = () => {
  const meetingManager = useMeetingManager();
  const {
    region,
    meetingId,
    localUserName,
    meetingMode,
    enableSimulcast,
    priorityBasedPolicy,
    keepLastFrameWhenPaused,
    isWebAudioEnabled,
    videoTransformCpuUtilization: videoTransformCpuUtilization,
    setJoinInfo,
    isEchoReductionEnabled,
    toggleEchoReduction,
    toggleWebAudio,
    toggleSimulcast,
    togglePriorityBasedPolicy,
    toggleKeepLastFrameWhenPaused,
    setMeetingMode,
    setMeetingId,
    setLocalUserName,
    setRegion,
    setCpuUtilization,
  } = useAppState();
  const [meetingErr, setMeetingErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();
  const browserBehavior = new DefaultBrowserBehavior();

  const handleJoinMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = meetingId.trim().toLocaleLowerCase();
    const attendeeName = localUserName.trim();

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
      const { JoinInfo } = await fetchMeeting(id, attendeeName, region, isEchoReductionEnabled);
      setJoinInfo(JoinInfo);

      await meetingManager.join({
        meetingInfo: JoinInfo?.Meeting,
        attendeeInfo: JoinInfo?.Attendee,
        deviceLabels:
          meetingMode === MeetingMode.Spectator
            ? DeviceLabels.None
            : DeviceLabels.AudioAndVideo,
        meetingManagerConfig: {
          ...meetingConfig,
          enableWebAudio: isWebAudioEnabled,
          simulcastEnabled: enableSimulcast,
          videoDownlinkBandwidthPolicy: priorityBasedPolicy,
          keepLastFrameWhenPaused: keepLastFrameWhenPaused,
        },
      });
      if (meetingMode === MeetingMode.Spectator) {
        await meetingManager.start();
        history.push(`${routes.MEETING}/${meetingId}`);
      } else {
        setMeetingMode(MeetingMode.Attendee);
        history.push(routes.DEVICE);
      }
    } catch (error) {
      updateErrorMessage((error as Error).message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setLocalUserName('');
    setIsLoading(false);
  };

  return (
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
        value={localUserName}
        fieldProps={{
          name: 'name',
          placeholder: 'Enter Your Name',
        }}
        errorText="Please enter a valid name"
        error={nameErr}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setLocalUserName(e.target.value);
          if (nameErr) {
            setNameErr(false);
          }
        }}
      />
      <RegionSelection setRegion={setRegion} region={region} />
      <FormField
        field={Checkbox}
        label="Join w/o Audio and Video"
        value=""
        checked={meetingMode === MeetingMode.Spectator}
        onChange={(): void => {
          if (meetingMode === MeetingMode.Spectator) {
            setMeetingMode(MeetingMode.Attendee);
          } else {
            setMeetingMode(MeetingMode.Spectator);
          }
        }}
      />
      <FormField
        field={Checkbox}
        label="Enable Web Audio"
        value=""
        checked={isWebAudioEnabled}
        onChange={toggleWebAudio}
        infoText="Enable Web Audio to use Voice Focus"
      />
      {/* Amazon Chime Echo Reduction is a premium feature, please refer to the Pricing page for details.*/}
      { isWebAudioEnabled &&
        <FormField
          field={Checkbox}
          label="Enable Echo Reduction"
          value=""
          checked={isEchoReductionEnabled}
          onChange={toggleEchoReduction}
          infoText="Enable Echo Reduction (new meetings only)"
        />
      }
      {/* BlurSelection */}
      {/* Background Video Transform Selections */}
      <FormField
        field={Select}
        options={VIDEO_TRANSFORM_FILTER_OPTIONS}
        onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
          setCpuUtilization(e.target.value);
        }}
        value={videoTransformCpuUtilization}
        label="Background Filters CPU Utilization"
      />
      {/* Video uplink and downlink policies */}
      { browserBehavior.isSimulcastSupported() &&
        <FormField
          field={Checkbox}
          label="Enable Simulcast"
          value=""
          checked={enableSimulcast}
          onChange={toggleSimulcast}
        />
      }

      { browserBehavior.supportDownlinkBandwidthEstimation() &&
        <FormField
          field={Checkbox}
          label="Use Priority-Based Downlink Policy"
          value=""
          checked={priorityBasedPolicy !== undefined}
          onChange={togglePriorityBasedPolicy}
        />
      }
      <FormField
        field={Checkbox}
        label="Keep Last Frame When Paused"
        value=""
        checked={keepLastFrameWhenPaused}
        onChange={toggleKeepLastFrameWhenPaused}
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
  );
};

export default MeetingForm;
