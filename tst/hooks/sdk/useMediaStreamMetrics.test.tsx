// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import {
  AudioVideoObserver,
  DefaultAudioVideoFacade,
  ClientMetricReport,
  NoOpAudioVideoController,
  NoOpDebugLogger,
} from 'amazon-chime-sdk-js';
import React from 'react';

import { AudioVideoContext } from '../../../src';
import useMediaStreamMetrics from '../../../src/hooks/sdk/useMediaStreamMetrics';

class FakeClientMetricReport extends ClientMetricReport {
  constructor() {
    super(new NoOpDebugLogger());
  }

  getObservableVideoMetrics(): { [p: string]: { [p: string]: {} } } {
    return {
      1: {
        1: {
          videoDownstreamBitrate: 8000,
          videoDownstreamPacketLossPercent: 50,
          videoDownstreamPacketsReceived: 1000,
        },
      },
    };
  }

  getObservableMetrics(): { [p: string]: number } {
    return {
      availableOutgoingBitrate: 1000,
      availableIncomingBitrate: 1000,
    };
  }
}

class NoOPAudioVideoFacade extends DefaultAudioVideoFacade {
  observerQueue: Set<AudioVideoObserver> = new Set<AudioVideoObserver>();

  constructor() {
    super(
      new NoOpAudioVideoController(),
      // @ts-ignore
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    );
  }

  addObserver(observer: AudioVideoObserver): void {
    this.observerQueue.add(observer);
  }

  removeObserver(observer: AudioVideoObserver): void {
    this.observerQueue.delete(observer);
  }

  publicMetrics(): void {
    const clientMetricReport = new FakeClientMetricReport();
    for (const observer of this.observerQueue) {
      if (observer.metricsDidReceive) {
        observer.metricsDidReceive(clientMetricReport);
      }
    }
  }
}

const initialMediaStreamMetrics = {
  audioPacketsSentFractionLossPercent: null,
  audioPacketsReceivedFractionLossPercent: null,
  availableOutgoingBandwidth: null,
  availableIncomingBandwidth: null,
  videoStreamMetrics: {},
};

const expectedMediaStreamMetrics = {
  audioPacketsSentFractionLossPercent: NaN,
  audioPacketsReceivedFractionLossPercent: NaN,
  availableOutgoingBandwidth: 1,
  availableIncomingBandwidth: 1,
  videoStreamMetrics: {
    '1': {
      '1': {
        videoDownstreamBitrate: 8000,
        videoDownstreamPacketLossPercent: 50,
        videoDownstreamPacketsReceived: 1000,
      },
    },
  },
};

describe('useMediaStreamMetrics', () => {
  it('mount/unmount', () => {
    const audioVideoFacade = new NoOPAudioVideoFacade();
    const addObserverSpy = jest.spyOn(audioVideoFacade, 'addObserver');
    const removeObserverSpy = jest.spyOn(audioVideoFacade, 'addObserver');

    const { result, unmount } = renderHook(() => useMediaStreamMetrics(), {
      wrapper: ({ children }) => (
        <AudioVideoContext.Provider value={audioVideoFacade}>
          {children}
        </AudioVideoContext.Provider>
      ),
    });

    expect(addObserverSpy).toHaveBeenCalledTimes(1);
    expect(result.current).toStrictEqual(initialMediaStreamMetrics);
    unmount();
    expect(removeObserverSpy).toHaveBeenCalledTimes(1);
  });

  it('returns correct metrics value', () => {
    const audioVideoFacade = new NoOPAudioVideoFacade();

    const { result } = renderHook(() => useMediaStreamMetrics(), {
      wrapper: ({ children }) => (
        <AudioVideoContext.Provider value={audioVideoFacade}>
          {children}
        </AudioVideoContext.Provider>
      ),
    });

    expect(result.current).toStrictEqual(initialMediaStreamMetrics);

    act(() => {
      audioVideoFacade.publicMetrics();
    });

    expect(result.current).toStrictEqual(expectedMediaStreamMetrics);
  });
});
