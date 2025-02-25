// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import isPropValid from '@emotion/is-prop-valid';
import { css } from 'styled-components';

// use for elements that contain text for screen readers, but need no visual representation
export const visuallyHidden = css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute !important;
`;

export const ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const isValidCSSHex = (hex: string): boolean => {
  // matches 6 digit characters prefixed with a '#'.
  return /^#[0-9A-F]{6}$/i.test(hex);
};

export const hexTorgba = (hex: string, alpha: number = 1): string => {
  if (!isValidCSSHex(hex)) {
    return '';
  }

  const [r, g, b]: any = hex.match(/\w\w/g)?.map((h) => parseInt(h, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha || 1})`;
};

// There's a breaking change in styled-components v6 - shouldForwardProp is no longer provided by default
// https://styled-components.com/docs/faqs#shouldforwardprop-is-no-longer-provided-by-default
// This maintains backwards compatibility with v5 by filtering props using @emotion/is-prop-valid
// https://styled-components.com/docs/faqs#shouldforwardprop-is-no-longer-provided-by-default

/**
 * Creates a configuration object for styled-components to control prop forwarding
 * @param additionalProps - Array of custom prop names that should be forwarded
 * @returns Configuration object with shouldForwardProp function
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createStyledConfig = (additionalProps: string[] = []) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  shouldForwardProp: (prop: string) => {
    // Forward custom props
    if (additionalProps.includes(prop)) return true;

    return isPropValid(prop);
  },
});

export const defaultStyledConfig = createStyledConfig();
