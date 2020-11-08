// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { BaseProps } from '../../Base';
import { StyledMessageAttachmentContent } from './Styled';
import { Document } from '../../icons';

export interface MessageAttachmentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** The name of the attachment. */
  name: string;
  /** The file URL string to download attachment. */
  downloadUrl: string;
  /** The size of attachment. */
  size?: string;
}

export const MessageAttachment: FC<MessageAttachmentProps> = ({
  size = 'Unknown',
  ...props
}) => {
  const { name, downloadUrl } = props;

  return (
    <StyledMessageAttachmentContent {...props}>
      <div className="attachment-icon">
        <Document className="document-icon" width="2rem" height="2rem" />
      </div>

      <div className="attachment-name">
        <a target="_blank" href={downloadUrl}>
          {name}
        </a>
        <span className="attachment-size">{size}</span>
      </div>
    </StyledMessageAttachmentContent>
  );
};

export default MessageAttachment;
