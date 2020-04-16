import React, { FC, useEffect, useRef, useState } from 'react';
import {  createPortal } from "react-dom";

import Plus from '../icons/Plus'; // TODO replace with close icon
import { StyledModal } from './Styled';
import trapFocus from '../../utils/trap-focus';
import IconButton from '../Button/IconButton';
import Portal from '../Portal';

export type ModalSize = 'medium' | 'large' | 'fullscreen' 

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isCloseable?: boolean;
    onClose?: () => void;
    title?: string;
    children: any;
    size: ModalSize;
    rootId: string;
};

export const Modal:FC<ModalProps> = props => {
    const {
        isCloseable = true,
        onClose = () => null,
        title,
        children,
        size = 'medium',
        rootId,
    } = props;

    const contentEl = useRef<HTMLDivElement>(null);

    const onKeyboardEvent = (e:any) => {
        if (e.keyCode === 27) {
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
            <StyledModal {...props} onClick={isCloseable ? onClose : () => null} ref={contentEl}>
                <div
                    className='main'
                    onClick={e => e.stopPropagation()}
                >
                    <div className='header'>
                        {isCloseable && <IconButton label='Close' icon={<Plus/>} className='closeButton' onClick={onClose}/>}
                        {title && <h1 className='title'>{title}</h1>}
                    </div>
                    <div className='content'>{children}</div>
                </div>
            </StyledModal>
        </Portal>
    )
};

export default Modal;