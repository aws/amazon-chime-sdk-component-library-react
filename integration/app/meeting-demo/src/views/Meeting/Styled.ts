// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import styled from 'styled-components';

interface Props {
  showNav: boolean;
  showRoster: boolean;
}

export const StyledLayout = styled.main<Props>`
  height: 100vh;
  width: 100%;

  display: grid;

  .video-content {
    grid-area: content;
  }

  ${({ showNav, showRoster }) => {
    if (showNav && showRoster) {
      return `
        grid-template-columns: auto auto 1fr;
        grid-template-areas: 'nav roster content';
      `;
    }

    if (showNav) {
      return `
        grid-template-columns: auto 1fr;
        grid-template-areas: 'nav content';
      `;
    }

    if (showRoster) {
      return `
        grid-template-columns: auto 1fr;
        grid-template-areas: 'roster content';
      `;
    }

    return `
      grid-template-columns: 1fr;
      grid-template-areas: 'content';
    `;
  }}

  .nav {
    grid-area: nav;
  }

  .roster {
    grid-area: roster;
    z-index: 2;
  }

  @media screen and (min-width: 769px) {
    .mobile-toggle {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content';

    .nav {
      grid-area: unset;
      position: fixed;
    }

    .roster {
      grid-area: unset;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 320px;
    }
  }

  @media screen and (max-width: 460px) {
    .roster {
      max-width: 100%;
    }
  }
`;

export const StyledContent = styled.div`
  position: relative;
  grid-area: content;
  height: 100%;
  display: flex;
  flex-direction: column;

  .videos {
    flex: 1;
  }

  .controls {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 768px) {
    .controls {
      position: static;
      transform: unset;
    }
  }
`;
