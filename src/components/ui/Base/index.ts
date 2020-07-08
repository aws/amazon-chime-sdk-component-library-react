// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { SpaceProps } from 'styled-system';
import { space } from 'styled-system';

export interface BaseProps extends SpaceProps {
  tag?: any;
  css?: string;
  className?: string;
}

export const baseStyles = ({ css }: BaseProps) => (css ? `${css};` : '');
export const baseSpacing = (props: BaseProps) => space(props);
