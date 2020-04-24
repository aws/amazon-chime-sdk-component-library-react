import React, { FC, useState } from 'react'

import { storiesOf } from '@storybook/react';
import Modal, { ModalSize } from '.';

// These dummy buttons in the modal are only to demonstrate tabbing through trapped content
const buttons = [<button key='1'>1</button>, <button key='2'>2</button>, <button key='3'>3</button>, <button key='4'>4</button>, ]

interface PageWithModalProps {
    size: ModalSize;
}

const PageWithModal:FC<PageWithModalProps> = ({ size }) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    return (
        <div>
            <h1>This page will show a modal</h1>
            <button onClick={toggleModal}>Toggle Modal</button>
            {showModal && <Modal title="Modal" size={size} onClose={toggleModal} rootId='modal-root'>{buttons}</Modal>}
        </div>
    )
}

export default {
    title: 'Modal'
};

export const Medium = () => <PageWithModal size='medium'/>;
export const Large = () => <PageWithModal size='large'/>;
export const FullScreen = () => <PageWithModal size='fullscreen'/>;