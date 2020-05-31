import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import trapFocus from '../utils/trap-focus';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  onClose: () => void;
  onConfirm?: () => void;
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  background-color: #fefefe;
  padding: 2rem;

  .header {
    display: flex;
    width: 100%;

    .close {
      background: transparent;
      font-size: 1.5rem;
      margin-left: auto;
    }
  }

  .footer button {
    align-self: center;
    width: 5rem;
    margin-top: 1rem;
  }
`;

const Modal: React.FC<ModalProps> = ({ children, onClose, onConfirm }: ModalProps) => {
  const modalEl: any = useRef<HTMLDivElement>(null);

  // Keycode event listeners map
  const keyListenersMap = new Map([
    [27, onClose],
    [9, trapFocus],
  ]);

  useEffect(() => {
    function keyListener(e: KeyboardEvent): void {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e, modalEl.current);
    }

    document.addEventListener('keydown', keyListener);
    return (): void => document.removeEventListener('keydown', keyListener);
  });

  return (
    <Container role="dialog" aria-modal="true" onClick={onClose} ref={modalEl}>
      <Content>
        <div className="header">
          <button type="button" className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="body">{children}</div>
        <div className="footer">
          <button type="button" onClick={onConfirm || onClose}>
            Ok
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Modal;
