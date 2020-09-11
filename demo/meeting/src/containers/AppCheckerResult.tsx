// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useState, useRef } from 'react';
import {
  RadioGroup,
  Flex,
  Badge,
  useAppCheckerManager
} from 'amazon-chime-sdk-component-library-react';

import { endMeeting } from '../utils/api';
import { useAppState } from '../providers/AppStateProvider';
import Spinner from '../components/Spinner';
import { Table, TableHead, TableRow, TableCell } from '../components/Table';
import { IntervalScheduler } from 'amazon-chime-sdk-js';

const videoQualities = [
  { width: 640, height: 480 },
  { width: 1280, height: 720 },
  { width: 1920, height: 1080 }
];

const SUCCEEDED = 'Succeeded';

const options = [
  { value: SUCCEEDED, label: 'Yes' },
  { value: 'Failed', label: 'No' }
];

const AppCheckerResult = () => {
  const appCheckerManager = useAppCheckerManager();
  const { meetingId } = useAppState();
  const [audioOutputResult, setAudioOutputResult] = useState('');
  const [audioInputResult, setAudioInputResult] = useState('');
  const [videoInputResult, setVideoInputResult] = useState('');
  const [resolutionResults, setResolutionResults] = useState<string[]>([]);
  const [networkUDPResult, setNetworkUDPResult] = useState('');
  const [networkTCPResult, setNetworkTCPResult] = useState('');
  const [audioConnectivity, setAudioConnectivity] = useState('');
  const [videoConnectivity, setVideoConnectivity] = useState('');
  const [contentShareConnectivity, setContentShareConnectivity] = useState('');

  const [isAudioOutputCheckLoading, setIsAudioOutputCheckLoading] = useState(
    false
  );
  const [isAudioInputCheckLoading, setIsAudioInputCheckLoading] = useState(
    false
  );
  const [isVideoInputCheckLoading, setIsVideoInputCheckLoading] = useState(
    false
  );
  const [isResolutionCheckLoading, setIsResolutionCheckLoading] = useState(
    false
  );
  const [isNetworkUDPCheckLoading, setIsNetworkUDPCheckLoading] = useState(
    false
  );
  const [isNetworkTCPCheckLoading, setIsNetworkTCPCheckLoading] = useState(
    false
  );
  const [
    isAudioConnectivityCheckLoading,
    setIsAudioConnectivityCheckLoading
  ] = useState(false);
  const [
    isVideoConnectivityCheckLoading,
    setIsVideoConnectivityCheckLoading
  ] = useState(false);
  const [isContentShareCheckLoading, setIsContentShareCheckLoading] = useState(
    false
  );

  const outputResRef = useRef(audioOutputResult);

  function callback(): Promise<boolean> {
    return new Promise(resolve => {
      const scheduler = new IntervalScheduler(1000);
      scheduler.start(() => {
        if (outputResRef.current) {
          scheduler.stop();
          resolve(outputResRef.current === SUCCEEDED);
        }
      });
    });
  }

  useEffect(() => {
    outputResRef.current = audioOutputResult;
  }, [audioOutputResult]);

  useEffect(() => {
    if (!appCheckerManager || !meetingId) {
      return;
    }

    if (audioOutputResult === '') {
      initChecking(callback);
    }
  }, [audioOutputResult]);

  async function initChecking(cb: () => Promise<boolean>): Promise<void> {
    setIsAudioOutputCheckLoading(true);

    await appCheckerManager.checkAudioOutput(cb).then((result: string) => {
      setAudioOutputResult(result);
      setIsAudioOutputCheckLoading(false);
      runRestOfTests();
    });
  }

  async function runRestOfTests(): Promise<void> {
    setIsAudioInputCheckLoading(true);
    await appCheckerManager.checkAudioInput().then((result: string) => {
      setAudioInputResult(result);
      setIsAudioInputCheckLoading(false);
    });

    setIsVideoInputCheckLoading(true);
    await appCheckerManager.checkVideoInput().then((result: string) => {
      setVideoInputResult(result);
      setIsVideoInputCheckLoading(false);
    });

    setIsResolutionCheckLoading(true);
    videoQualities.forEach(async videoQuality => {
      await appCheckerManager
        .checkCameraResolution(videoQuality)
        .then((result: string) => {
          const resultDisplay = `${result}@${videoQuality.width}x${videoQuality.height}p`;
          setResolutionResults(oldResult => [...oldResult, resultDisplay]);
        });
      setIsResolutionCheckLoading(false);
    });

    setIsNetworkUDPCheckLoading(true);
    await appCheckerManager.checkNetworkUDP().then((result: string) => {
      setNetworkUDPResult(result);
      setIsNetworkUDPCheckLoading(false);
    });

    setIsNetworkTCPCheckLoading(true);
    await appCheckerManager.checkNetworkTCP().then((result: string) => {
      setNetworkTCPResult(result);
      setIsNetworkTCPCheckLoading(false);
    });

    setIsAudioConnectivityCheckLoading(true);
    await appCheckerManager.checkAudioConnectivity().then((result: string) => {
      setAudioConnectivity(result);
      setIsAudioConnectivityCheckLoading(false);
    });

    setIsVideoConnectivityCheckLoading(true);
    await appCheckerManager.checkVideoConnectivity().then((result: string) => {
      setVideoConnectivity(result);
      setIsVideoConnectivityCheckLoading(false);
    });

    setIsContentShareCheckLoading(true);
    await appCheckerManager.checkContentShare().then((result: string) => {
      setContentShareConnectivity(result);
      setIsContentShareCheckLoading(false);
    });

    await endMeeting(meetingId);
  }

  useEffect(() => {}, [appCheckerManager, meetingId]);

  const toggleHear = (evt: any) => {
    setAudioOutputResult(evt.target.value);
  };

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead textAlign="left">Readiness Test Type</TableHead>
          <TableHead>Result</TableHead>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Speaker</TableCell>
          <TableCell textAlign="center">
            {isAudioOutputCheckLoading ? (
              <>
                <Spinner />
                <Flex layout="fill-space-centered">
                  <span>Can you hear a sound?</span>
                  <RadioGroup
                    options={options}
                    value={audioOutputResult}
                    onChange={toggleHear}
                  />
                </Flex>
              </>
            ) : (
              <Badge
                value={
                  audioOutputResult === '' ? 'Not started' : audioOutputResult
                }
                status={
                  audioOutputResult === ''
                    ? 'default'
                    : audioOutputResult.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mic</TableCell>
          <TableCell textAlign="center">
            {isAudioInputCheckLoading ? (
              <Spinner />
            ) : (
              <Badge
                value={
                  audioInputResult === '' ? 'Not started' : audioInputResult
                }
                status={
                  audioInputResult === ''
                    ? 'default'
                    : audioInputResult.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Camera</TableCell>
          <TableCell textAlign="center">
            {isVideoInputCheckLoading ? (
              <Spinner />
            ) : (
              <Badge
                value={
                  videoInputResult === '' ? 'Not started' : videoInputResult
                }
                status={
                  videoInputResult === ''
                    ? 'default'
                    : videoInputResult.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Resolution</TableCell>
          <TableCell textAlign="center">
            {isResolutionCheckLoading ? (
              <Spinner />
            ) : resolutionResults.length === 0 ? (
              <Badge value="Not started" status="default" />
            ) : (
              resolutionResults.map(result => {
                return (
                  <Badge
                    key={result}
                    value={result === '' ? 'Not started' : result}
                    status={
                      result === ''
                        ? 'default'
                        : result.startsWith(SUCCEEDED)
                        ? 'success'
                        : 'alert'
                    }
                  />
                );
              })
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Network - UDP</TableCell>
          <TableCell textAlign="center">
            {isNetworkUDPCheckLoading ? (
              <Spinner />
            ) : (
              <Badge
                value={
                  networkUDPResult === '' ? 'Not started' : networkUDPResult
                }
                status={
                  networkUDPResult === ''
                    ? 'default'
                    : networkUDPResult.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Network - TCP</TableCell>
          <TableCell textAlign="center">
            {isNetworkTCPCheckLoading ? (
              <Spinner />
            ) : (
              <Badge
                value={
                  networkTCPResult === '' ? 'Not started' : networkTCPResult
                }
                status={
                  networkTCPResult === ''
                    ? 'default'
                    : networkTCPResult.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Audio Connectivity</TableCell>
          <TableCell textAlign="center">
            {isAudioConnectivityCheckLoading ? (
              <Spinner />
            ) : (
              <Badge
                value={
                  audioConnectivity === '' ? 'Not started' : audioConnectivity
                }
                status={
                  audioConnectivity === ''
                    ? 'default'
                    : audioConnectivity.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Video Connectivity</TableCell>
          <TableCell textAlign="center">
            {isVideoConnectivityCheckLoading ? (
              <Spinner />
            ) : (
              <Badge
                value={
                  videoConnectivity === '' ? 'Not started' : videoConnectivity
                }
                status={
                  videoConnectivity === ''
                    ? 'default'
                    : videoConnectivity.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Content Share</TableCell>
          <TableCell textAlign="center">
            {isContentShareCheckLoading ? (
              <Spinner />
            ) : (
              <Badge
                value={
                  contentShareConnectivity === ''
                    ? 'Not started'
                    : contentShareConnectivity
                }
                status={
                  contentShareConnectivity === ''
                    ? 'default'
                    : contentShareConnectivity.startsWith(SUCCEEDED)
                    ? 'success'
                    : 'alert'
                }
              />
            )}
          </TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default AppCheckerResult;
