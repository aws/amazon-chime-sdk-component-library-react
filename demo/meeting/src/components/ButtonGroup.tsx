// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

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
