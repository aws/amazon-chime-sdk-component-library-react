import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  time: string;
}

const Card: React.FC<CardProps> = ({ title, time }) => {
  const StyledSpan = styled.span`
    margin-right: 2rem;
  `;
  
  const res = (
    <div>
      <StyledSpan>{title}</StyledSpan>
      <span>{time}</span>
    </div>
  );
  return res;
}

export default Card;
