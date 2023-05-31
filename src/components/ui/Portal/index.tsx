// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  /** Specifies the DOM node that the children of the portal will be render into. */
  rootId?: string;
}

export const Portal: FC<React.PropsWithChildren<PortalProps>> = ({
  children,
  rootId,
}) => {
  let el: HTMLElement | null;
  let newRoot: HTMLElement | null;
  const [mount, setMount] = useState<any>();

  useEffect(() => {
    if (rootId) {
      el = document.getElementById(rootId);
    }

    if (el) {
      setMount(el);
    } else {
      newRoot = document.createElement('div');
      document.body.appendChild(newRoot);
      setMount(newRoot);
    }
    return () => {
      !!newRoot && newRoot.remove();
    };
  }, [rootId]);

  return mount ? createPortal(children, mount) : null;
};

export default Portal;
