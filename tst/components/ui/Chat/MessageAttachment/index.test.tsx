// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import MessageAttachment from '../../../../../src/components/ui/Chat/MessageAttachment';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';
describe('MessageAttachment', () => {
  const defaultProps = {
    name: 'File.txt',
    size: '23.2KB',
    downloadUrl: 'https://test.com/download.txt',
  };

  it('should render a MessageAttachment component in the document', () => {
    const component = <MessageAttachment {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const message = getByText('File.txt');

    expect(message).toBeInTheDocument();
  });

  it('should render a MessageAttachment with unknown filesize', () => {
    const props = {
      name: 'File.txt',
      downloadUrl: 'https://test.com/file.txt',
    };
    const component = <MessageAttachment {...props} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const message = getByText('Unknown');

    expect(message).toBeInTheDocument();
  });

  it('should render a MessageAttachment with img', () => {
    const props = {
      name: 'File.txt',
      downloadUrl: 'https://test.com/file.txt',
      renderImg: true,
    };
    const component = <MessageAttachment {...props} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const img = getByTestId('preview-img');

    expect(img).toBeInTheDocument();
  });
});
