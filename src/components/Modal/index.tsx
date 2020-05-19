import React, { FC, useEffect, useRef, HTMLAttributes } from 'react';

import { StyledModal } from './Styled';
import trapFocus from '../../utils/trap-focus';
import Portal from '../Portal';
import { KEY_CODES } from '../../constants';
import ModalContext from './ModalContext';

import useClickOutside from '../../hooks/useClickOutside';
import useUniqueId from '../../hooks/useUniqueId';

export type ModalSize = 'medium' | 'large' | 'fullscreen'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  size?: ModalSize;
  rootId?: string;
};

export const Modal:FC<ModalProps> = props => {
  const {
    size = 'medium',
    onClose,
    children,
    rootId,
  } = props;

  const labelID = useUniqueId();
  const contentEl = useRef<HTMLDivElement>(null);
  const mainEl = useRef<HTMLDivElement>(null);

  const modalContext = { onClose, labelID };

  useClickOutside(mainEl, onClose);

  useEffect(() => {
    // return focus to the element that triggered the
    // modal when the modal closes
    const activeNode: any = document.activeElement;
    return () => !!activeNode && activeNode.focus();
  }, []);

  useEffect(() => {
    // ensure that the focus event fires after Portal render is complete
    setTimeout(() => mainEl.current?.focus(), 0);

    const onKeydown = (e:any) => {
      if (e.keyCode === KEY_CODES.ESCAPE && onClose) {
        onClose();
      } else {
        trapFocus(e, (contentEl.current as HTMLElement))
      }
    }

    window.addEventListener('keydown', e => onKeydown(e))
    return () => window.removeEventListener('keydown', e => onKeydown(e));
  }, []);

  return (
    <Portal rootId={rootId}>
      <ModalContext.Provider value={modalContext}>
        <StyledModal
          {...props}
          size={size}
          ref={contentEl}
          data-testid="modal"
        >
          <section
            aria-modal
            ref={mainEl}
            role="dialog"
            tabIndex={0}
            aria-labelledby={labelID}
          >
            {children}
          </section>
        </StyledModal>
      </ModalContext.Provider>
    </Portal>
  );
};

export default Modal;
