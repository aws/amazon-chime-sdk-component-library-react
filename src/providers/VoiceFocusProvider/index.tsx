// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  Device,
  VoiceFocusDeviceOptions,
  VoiceFocusDeviceTransformer,
  VoiceFocusSpec,
  VoiceFocusTransformDevice,
} from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { JoinMeetingInfo } from '../../types';
import useMemoCompare from '../../utils/use-memo-compare';
import { useLogger } from '../LoggerProvider';

interface Props {
  /** Determines how you want Amazon Voice Focus to behave. This spec is used to derive a runtime configuration when a transformer is created. */
  spec?: VoiceFocusSpec;

  /**
   * A set of options that can be supplied when creating an Amazon Voice Focus device.
   * For more info, you can go to https://aws.github.io/amazon-chime-sdk-js/interfaces/voicefocusdeviceoptions.html
   */
  options?: VoiceFocusDeviceOptions;

  /** Optional features like Amazon Chime Echo Reduction capability is enabled at the meeting level when CreateMeeting is called. */
  createMeetingResponse?: JoinMeetingInfo;
}

interface VoiceFocusState {
  isVoiceFocusSupported: boolean | undefined;
  addVoiceFocus: (
    device: Device
  ) => Promise<Device | VoiceFocusTransformDevice>;
}

const VoiceFocusContext = createContext<VoiceFocusState | null>(null);

export const VoiceFocusProvider: React.FC<React.PropsWithChildren<Props>> = ({
  spec,
  options,
  createMeetingResponse,
  children,
}) => {
  const logger = useLogger();
  const [isVoiceFocusSupported, setIsVoiceFocusSupported] = useState<
    boolean | undefined
  >(undefined);
  const [voiceFocusDevice, setVoiceFocusDevice] =
    useState<VoiceFocusTransformDevice | null>(null);
  const [voiceFocusTransformer, setVoiceFocusTransformer] =
    useState<VoiceFocusDeviceTransformer | null>(null);

  // Make sure that minor changes to the spec don't result in recomputation:
  // Any value of `{}` and undefined are all considered the same.
  const vfSpec = useMemoCompare(
    spec,
    (
      prev: VoiceFocusSpec | undefined,
      next: VoiceFocusSpec | undefined
    ): boolean => {
      if (
        Object.is(prev, next) ||
        JSON.stringify(prev) === JSON.stringify(next)
      ) {
        return true;
      }

      // Either prev is undefined and next is the empty object, or
      // next is undefined and prev is the empty object, or they are
      // both the empty object.
      const isPrevEmpty =
        prev === undefined || (prev && Object.keys(prev).length === 0);
      const isNextEmpty =
        next === undefined || (next && Object.keys(next).length === 0);

      if (isPrevEmpty && isNextEmpty) {
        return true;
      }

      // They are a richer objects, and we won't try to compare them.
      return false;
    }
  );

  const addVoiceFocus = async (
    device: Device
  ): Promise<Device | VoiceFocusTransformDevice> => {
    logger.info(
      `Add Amazon Voice Focus to the following audio input device ${device}`
    );
    // TODO: We don't need to intialize a new transformer every time we create a voice focus transformer device
    // We could potentially check for if a transformer exists already AND that the voiceFocusDevice exists and hasnt been stopped.
    // If both of those statements are true, then chooseNewInnerDevice instead of creating a new processor

    if (!isVoiceFocusSupported) {
      logger.debug('Not supported, not creating device.');
      return device;
    }

    try {
      const transformer = await getVoiceFocusDeviceTransformer();
      const vf = await transformer?.createTransformDevice(device);
      if (vf) {
        logger.info('Created a new Amazon Voice Focus transform device.');
        setVoiceFocusDevice(vf);
        return vf;
      }
    } catch (e) {
      logger.error(`Amazon Voice Focus is not supported. ${e}`);
    }

    return device;
  };

  let currentPromise:
    | Promise<VoiceFocusDeviceTransformer | undefined>
    | undefined;

  /**
   * We use currentPromise to store the latest promise of VoiceFocusDeviceTransformer.
   * If the builder changes the spec or options when the previous promise is still pending,
   * We will just grab the latest settings to create an Amazon Voice Focus transformer.
   * This function will always return the most recent promise.
   */
  async function getVoiceFocusDeviceTransformer(): Promise<
    VoiceFocusDeviceTransformer | undefined
  > {
    if (voiceFocusTransformer) {
      return voiceFocusTransformer;
    }

    // This should only be hit if `isVoiceFocusSupported` was true at some point,
    // but the transformer is now missing, which means we are updating the transformer.
    return currentPromise;
  }

  async function createVoiceFocusDeviceTransformer(
    spec: VoiceFocusSpec | undefined,
    options: VoiceFocusDeviceOptions | undefined,
    canceled: () => boolean,
    createMeetingResponse?: JoinMeetingInfo | undefined
  ): Promise<VoiceFocusDeviceTransformer> {
    const fetch = VoiceFocusDeviceTransformer.create(
      spec,
      options,
      undefined,
      createMeetingResponse
    );
    fetch
      .then((transformer) => {
        // A different request arrived afterwards. Drop this one on the floor
        // using the cancellation mechanism of `useEffect`.
        if (canceled()) {
          return;
        }

        currentPromise = undefined;
        setVoiceFocusTransformer(transformer);
        setVoiceFocusDevice(null);
        setIsVoiceFocusSupported(transformer && transformer.isSupported());
      })
      .catch(() => {
        if (canceled()) {
          return;
        }

        currentPromise = undefined;
        setVoiceFocusTransformer(null);
        setVoiceFocusDevice(null);
        setIsVoiceFocusSupported(false);
      });

    return (currentPromise = fetch);
  }

  async function initVoiceFocus(
    vfSpec: VoiceFocusSpec | undefined,
    options: VoiceFocusDeviceOptions | undefined,
    canceled: () => boolean,
    createMeetingResponse: JoinMeetingInfo | undefined
  ): Promise<void> {
    // Throw away the old one and reinitialize.
    voiceFocusDevice?.stop();
    if (voiceFocusTransformer) {
      VoiceFocusDeviceTransformer.destroyVoiceFocus(voiceFocusTransformer);
    }
    setVoiceFocusTransformer(null);
    setVoiceFocusDevice(null);
    createVoiceFocusDeviceTransformer(
      vfSpec,
      options,
      canceled,
      createMeetingResponse
    );
  }

  useEffect(() => {
    let canceled = false;
    if (createMeetingResponse) {
      initVoiceFocus(vfSpec, options, () => canceled, createMeetingResponse);
    }
    return () => {
      canceled = true;
    };
  }, [vfSpec, options, createMeetingResponse]);

  useEffect(() => {
    if (isVoiceFocusSupported === undefined) {
      return;
    }

    if (isVoiceFocusSupported) {
      logger.info('Amazon Voice Focus is supported.');
    } else {
      logger.warn('Amazon Voice Focus is not supported.');
    }
  }, [isVoiceFocusSupported]);

  useEffect(() => {
    if (voiceFocusDevice) {
      logger.info(
        `Current Amazon Voice Focus transform device: ${voiceFocusDevice}`
      );
    }
    return () => {
      if (voiceFocusDevice) {
        logger.info(
          'Destroying voice focus device : ' + JSON.stringify(voiceFocusDevice)
        );
        voiceFocusDevice?.stop();
      } else {
        logger.info("Voice focus device doesn't exist");
      }
    };
  }, [voiceFocusDevice]);

  useEffect(() => {
    return () => {
      if (voiceFocusTransformer) {
        VoiceFocusDeviceTransformer.destroyVoiceFocus(voiceFocusTransformer);
        logger.info(
          'Destroying voice focus transformer : ' +
            JSON.stringify(voiceFocusTransformer)
        );
      } else {
        logger.info("VoiceFocusTransformer doesn't exist");
      }
    };
  }, [voiceFocusTransformer]);

  const value: VoiceFocusState = {
    isVoiceFocusSupported,
    addVoiceFocus,
  };

  return (
    <VoiceFocusContext.Provider value={value}>
      {children}
    </VoiceFocusContext.Provider>
  );
};

export const useVoiceFocus = (): VoiceFocusState => {
  const context = useContext(VoiceFocusContext);

  if (!context) {
    throw new Error('useVoiceFocus must be used within VoiceFocusProvider');
  }
  return context;
};
