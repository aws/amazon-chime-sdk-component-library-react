// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import MicVolumeIndicator from "../../../../src/components/ui/MicVolumeIndicator";
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Mic Volume Indicator', () => {
  it('should render a microphone', () => {
    const component = <MicVolumeIndicator volume={1} signalStrength={1} />
    const { getByTitle } = renderWithTheme(lightTheme, component);
    const el = getByTitle('Microphone');
    expect(el).toBeInTheDocument();
  });

  it('should render a muted microphone when muted', () => {
    const component = <MicVolumeIndicator volume={1} signalStrength={1} muted />
    const { getByTitle } = renderWithTheme(lightTheme, component);
    const el = getByTitle('Muted microphone');
    expect(el).toBeInTheDocument();
  });

  it('should render a volume indicator at 10% volume', () => {
    const component = <MicVolumeIndicator volume={0.1} signalStrength={1} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const canvas = getByTestId('volume-fill');
    expect(canvas).toBeInTheDocument();
  });

  it('should render a volume indicator at 100% volume', () => {
    const component = <MicVolumeIndicator volume={1} signalStrength={1} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const canvas = getByTestId('volume-fill');
    expect(canvas).toBeInTheDocument();
  });

  it('should render a poor connection icon when signal <= .5', () => {
    const component = <MicVolumeIndicator volume={1} signalStrength={.5} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const el = getByTestId('poor-connection-mic');
    expect(el).toBeInTheDocument();
  })
})