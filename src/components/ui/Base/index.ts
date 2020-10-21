// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { SpaceProps } from 'styled-system';
import { space } from 'styled-system';
import { BaseSdkProps } from '../../sdk/Base';

export interface BaseProps extends SpaceProps, BaseSdkProps {
  /** Optional tag to render the component as a different HTML tag */
  tag?: any;
}

export interface FocusableProps {
  /** Optional tab index for keyboard accessibility */
  tabIndex?: number;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<any>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<any>) => void;
}

export const baseStyles = ({ css }: BaseProps) =>
  css ? `@media { ${css} };` : '';
export const baseSpacing = (props: BaseProps) => space(props);
