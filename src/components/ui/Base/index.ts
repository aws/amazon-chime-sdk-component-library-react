// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { SpaceProps } from 'styled-system';
import { space } from 'styled-system';

export interface BaseProps extends SpaceProps {
  /** Optional tag to render the component as a different HTML tag */
  tag?: any;
  /** Optional css string (or string literal) to be rendered with the styled component */
  styles?: string;
  /** Optional class names to appear on the container */
  className?: string;

}

export const baseStyles = ({ styles }: BaseProps) =>
  styles ? `@media { ${styles} };` : '';
export const baseSpacing = (props: BaseProps) => space(props);
