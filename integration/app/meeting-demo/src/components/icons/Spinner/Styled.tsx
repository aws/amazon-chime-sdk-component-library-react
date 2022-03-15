// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import styled from 'styled-components';

export const StyledSpinner = styled.dl`
  .spinner {
    animation: spin 2s infinite ease;
    width: 2rem;
    height: 2rem;
  }

  @keyframes spin {
  
    from {
      transform: rotate(0deg);
    }
    
    to {
      transform: rotate(360deg);
    }
  }
`;

