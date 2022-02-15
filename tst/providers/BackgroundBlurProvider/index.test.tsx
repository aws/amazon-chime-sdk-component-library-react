// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup } from '@testing-library/react';
import { BackgroundBlurOptions } from 'amazon-chime-sdk-js';
import { clear, mockUserAgent } from 'jest-useragent-mock'

import { BackgroundBlurProvider, useBackgroundBlur } from '../../../src';
import { renderWithTheme } from '../../test-helpers';
import lightTheme from '../../../src/theme/light';


describe('BackgroundBlurProvider', () => {
  afterEach(() => {
    clear();
  });

  it('should not change props', async () => {
    const blurOptions: BackgroundBlurOptions = {
      blurStrength: 20
    };

    // Mock the user agent to ensure the BackgroundBlurVideoFrameProcessor gets
    // created. Otherwise, the amazon-chime-sdk-js will not detect a valid
    // browser to use.
    mockUserAgent('Chrome/96.0');

    // Spy on the console logs to verify React lifecycle state.
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

    // Render the provider.
    await act( async () => {
      renderWithTheme(lightTheme,
        <BackgroundBlurProvider options={blurOptions} />
      );
    });

    // Clean-up the rendered DOM.
    cleanup();

    // Verify the options object passed is not changed by reference.
    expect(blurOptions).toStrictEqual({ blurStrength: 20 });

    // Verify the console logs. Note that we expect the background blur
    // processor to be cleaned up at most once during this test. This
    // happens when the component remounts. If it is happening more than
    // once, that means some dependency or parent is changing the parameters
    // erroneously.
    expect(consoleLogMock).toHaveBeenCalledTimes(2);
    expect(consoleLogMock).toHaveBeenCalledWith("Initializing background blur processor with", undefined, blurOptions);
    expect(consoleLogMock).toHaveBeenCalledWith("Specs or options were changed. Destroying and re-initializing background blur processor.");

    // Even though we are using a NoOpVideoFrameProcessor, the input specs
    // and options that are passed to the amazon-chime-sdk-js are still
    // run through `resolveOptions` and `resolveSpec` in the
    // `BackgroundBlurVideoFrameProcessor` constructor so any invalid API
    // boundary changes to those are still validated by this test. The
    // first warning call is output by `BackgroundBlurVideoFrameProcessor`
    // and we don't validate it strictly because there's a non-deterministic
    // timestamp. Verifying the call count should be good enough.
    expect(consoleWarnMock).toHaveBeenCalledTimes(2);
    expect(consoleWarnMock).toHaveBeenLastCalledWith("Initialized NoOpVideoFrameProcessor.");

    // No errors should happen.
    expect(consoleErrorMock).toHaveBeenCalledTimes(0);

    // Restore the mocks.
    consoleLogMock.mockRestore();
    consoleWarnMock.mockRestore();
    consoleErrorMock.mockRestore();
  });
});
