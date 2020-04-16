import styled from 'styled-components';

import { ModalProps } from './';

const ModalWidths = {
  'medium': '32vw',
  'large': '50vw',
  'fullscreen': '100vw',
}

const ModalHeights = {
  'medium': '60%',
  'large': '80%',
  'fullscreen': '100%',
}

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
  z-index: 2;
  overflow-x: hidden;

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.75rem 0.75rem 0.75rem 1rem;
    border-radius: 0.25rem;
    color: ${props => props.theme.modal.text};
    background-color: ${props => props.theme.modal.bgd};
    width: ${props => ModalWidths[props.size]};
    max-height: ${props => ModalHeights[props.size]};
    min-height: ${props => props.size === 'fullscreen' ? '100vh' : '30vh'};
  }

  @media only screen and (max-width: 600px) {
    .main {
      max-height: none;
      width: 100vw;
      height: 100vh;
    }
  }

  .header {
    flex-shrink: 0;
  }

  .closeButton {
      position: absolute;
      top: .25rem;
      right: .25rem;
      z-index: 3;
  }

  .title {
      position: sticky;
      top: 1rem;
      margin: 0;
      text-align: center;
      padding: .5rem 0;
      font-size: ${props => props.theme.modal.titleSize};
      font-weight: ${props => props.theme.modal.titleWeight};
  }

  .content {
    flex-grow: 1;
    overflow-y: auto;
  }
`;
