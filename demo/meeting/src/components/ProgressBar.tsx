import React from 'react';
import styled from 'styled-components';

const Track = styled.div`
  width: 100%;
  height: 0.625rem;
  background-color: #ecf0f1;
  border-radius: 0.25rem;
`;

const Progress = styled.div<ProgressBarProps>`
  width: ${props => props.percentage}%;
  height: 0.625rem;
  background-color: #18BC9C;
  border-radius: 0.25rem;
  transition: width 33ms ease-in-out;
`;

interface ProgressBarProps {
  percentage: number;
  id: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ id, percentage }) => {

  const clamp = (min: number, value: number, max: number) => {
    return Math.min(Math.max(min, value), max);
  }

  return (
    <Track>
      <Progress id={id} percentage={clamp(0, percentage, 100)} />
    </Track>
  );
}

export default ProgressBar;
