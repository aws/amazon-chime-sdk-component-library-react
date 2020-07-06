// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string;
  title: string;
  description: string;
  smallText?: string;
}

const SmallText = styled.small`
  color: rgba(0, 0, 0, 0.5);
`;

const StyledCard = styled.div`
  .card-header {
    font-size: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

const Card: React.FC<CardProps> = ({
  header,
  title,
  description,
  smallText,
}: CardProps) => (
  <StyledCard>
    {header && <div className="card-header">{header}</div>}
    <div className="card-body">
      <div className="card-title">{title}</div>
      <p className="card-description">{description}</p>
      {smallText && <SmallText>{smallText}</SmallText>}
    </div>
  </StyledCard>
);

export default Card;
