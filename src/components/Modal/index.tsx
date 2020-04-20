import React, { FC, useEffect, useRef } from 'react';

import Remove from '../icons/Remove';
import { StyledModal } from './Styled';
import trapFocus from '../../utils/trap-focus';
import IconButton from '../Button/IconButton';
import Portal from '../Portal';
import { KEY_CODES } from '../../constants';

export type ModalSize = 'medium' | 'large' | 'fullscreen' 

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
    title?: string;
    children: any;
    size: ModalSize;
    rootId: string;
};

export const Modal:FC<ModalProps> = props => {
    const {
        onClose,
        title,
        children,
        size = 'medium',
        rootId,
    } = props;

    const contentEl = useRef<HTMLDivElement>(null);

    const onKeyboardEvent = (e:any) => {
        if (e.keyCode === KEY_CODES.ESCAPE && onClose) {
            onClose();
        } else {
            trapFocus(e, (contentEl.current as HTMLElement))
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', e => onKeyboardEvent(e))
        return () => window.removeEventListener('keydown', e => onKeyboardEvent(e))      
    }, []);

    return (
        <Portal rootId={rootId}>
            <StyledModal {...props} onClick={onClose} ref={contentEl} data-testid="modal">
                <div className='main' onClick={e => e.stopPropagation()}>
                    <div className='header'>
                        {onClose && <IconButton label='Close' icon={<Remove/>} className='closeButton' onClick={onClose} data-testid="closeButton"/>}
                        {title && <h1 className='title'>{title}</h1>}
                    </div>
                    <div className='content'>{children}</div>
                </div>
            </StyledModal>
        </Portal>
    )
};

export default Modal;