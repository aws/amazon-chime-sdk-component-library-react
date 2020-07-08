// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { StyledPopOverHeader } from './Styled';

export interface PopOverHeaderProps {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
}

export const PopOverHeader: FC<PopOverHeaderProps> = ({ title, subtitle, imgSrc }) =>  (
  <StyledPopOverHeader data-testid='popover-header'>
    {imgSrc && <img src={imgSrc} alt={title} />}
    {title && <p className="title">{title}</p>}
    {subtitle && <p className="subtitle">{subtitle}</p>}
  </StyledPopOverHeader>
);

export default PopOverHeader;
