// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { SmallText, StyledCard } from './Styled';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string;
  title: string;
  description: any;
  smallText?: string;
}

const Card: React.FC<CardProps> = ({
  header,
  title,
  description,
  smallText
}: CardProps) => (
  <StyledCard>
    {header && <div className="header">{header}</div>}
    <div className="body">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      {smallText && <SmallText>{smallText}</SmallText>}
    </div>
  </StyledCard>
);

export default Card;
