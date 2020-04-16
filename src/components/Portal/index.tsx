import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    rootId: string;
}

const Portal:FC<PortalProps> = ({ children, rootId }) => {

    const [mount, setMount] = useState<any>();

    useEffect(() => {
        const el = document.getElementById(rootId);

        if (el) {
            setMount(el);
        } else {
            const newRoot = document.createElement('div');
            document.body.appendChild(newRoot);
            setMount(newRoot);
        }
    }, [rootId]);

    return mount ? createPortal(children, mount) : null
};

export default Portal;