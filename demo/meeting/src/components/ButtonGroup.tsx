import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  padding: 0.5rem 1rem;
`;

export const ButtonGroup: React.FC = ({ children }) => {

  return (
    <StyledButtonGroup>
      {children}
    </StyledButtonGroup>
  );
}

export default ButtonGroup;
