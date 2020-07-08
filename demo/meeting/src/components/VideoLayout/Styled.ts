// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

interface Props {
  contentActive: boolean;
}

export const StyledLayout = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: content;

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      width: 100%;
    }
  }

  .videos {
    height: 100%;
    ${props => (props.contentActive ? 'max-height: 20%;' : '')}
  }

  .local-video {
    transform: rotateY(180deg);
    width: 20vw;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
