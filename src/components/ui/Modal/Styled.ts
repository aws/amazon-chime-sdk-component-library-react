// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { fadeAnimation, slideDownAndScaleUp } from '../../../utils/animations';
import { ModalProps } from './';

export const StyledModal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.modal.wrapperBgd};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.theme.zIndex.modal};
  overflow-x: hidden;
  animation: ${fadeAnimation} 0.25s ease 0s forwards;
  will-change: opacity;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${props => props.theme.radii.default};
    color: ${props => props.theme.modal.text};
    background-color: ${props => props.theme.modal.bgd};
    width: ${props => props.theme.modalSizes[props.size || 'md'].width};
    box-shadow: ${props => props.theme.modal.shadow};
    max-width: ${props =>
      props.size === 'fullscreen'
        ? props.theme.modalSizes[props.size].width
        : '90vw'};
    height: ${props =>
      props.size === 'fullscreen'
        ? props.theme.modalSizes[props.size].height
        : 'auto'};
    max-height: ${props => props.theme.modalSizes[props.size || 'md'].height};
    will-change: transform, opacity;
    animation: ${slideDownAndScaleUp} 0.15s ease 0s forwards;

    @media only screen and (max-height: 25rem) {
      position: absolute;
      top: 2rem;
      height: auto;
      max-height: none;
    }
  }
`;

export const StyledModalHeader = styled.header`
  padding: 1rem 1.5rem;

  .ch-close-button {
    position: absolute;
    right: 1.55rem;
    top: 1rem;
  }

  .ch-title {
    padding-right: 2rem;
    margin: 0;
    font-size: ${props => props.theme.modal.titleSize};
    font-weight: ${props => props.theme.modal.titleWeight};
  }
`;

export const StyledModalBody = styled.div`
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
  padding: 0 1.5rem;
  flex-grow: 1;
  overflow-y: auto;
`;

export const StyledModalButtonGroup = styled.footer`
  padding: 1.5rem;
  border-top: 1px solid ${props => props.theme.modal.border};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: row-reverse;
  }

  button + button {
    margin: 0 0.5rem 0 0.5rem;
  }

  @media (max-width: 35rem) {
    flex-direction: column;

    button {
      width: 100%;
    }

    div:first-child {
      display: flex;
      flex-direction: column;
    }

    button + button,
    div + div {
      margin: 0.5rem 0 0;
    }
  }
`;
