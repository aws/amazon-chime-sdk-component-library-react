// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { StyledPopOverHeader } from './Styled';

export interface PopOverHeaderProps {
  /** The title of the PopOver menu header. */
  title?: string;
  /** The subtitle of the PopOver menu header. */
  subtitle?: string;
  /** The source of the PopOver menu image. */
  imgSrc?: string;
}

export const PopOverHeader: FC<PopOverHeaderProps> = ({
  title,
  subtitle,
  imgSrc
}) => (
  <StyledPopOverHeader data-testid="popover-header">
    {imgSrc && <img src={imgSrc} alt={title} />}
    {title && <p className="ch-title">{title}</p>}
    {subtitle && <p className="ch-subtitle">{subtitle}</p>}
  </StyledPopOverHeader>
);

export default PopOverHeader;
