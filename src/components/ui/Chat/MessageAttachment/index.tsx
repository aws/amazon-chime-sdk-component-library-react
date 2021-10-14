// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { BaseProps } from '../../Base';
import { Document } from '../../icons';
import {
  StyledMessageAttachment,
  StyledMessageAttachmentContent,
} from './Styled';

export interface MessageAttachmentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** The name of the attachment. */
  name: string;
  /** The file URL string to download attachment. */
  downloadUrl: string;
  /** Determines whether render image of the attachment. */
  renderImg?: boolean;
  /** The URL of the image. */
  imgUrl?: string;
  /** The style of the image. */
  imgStyles?: string;
  /** How to handle onClick of the image. */
  imgOnClick?: () => void;
  /** How to handle onLoad of the image. */
  imgOnLoad?: () => void;
  /** The size of attachment. */
  size?: string;
}

export const MessageAttachment: FC<MessageAttachmentProps> = ({
  size = 'Unknown',
  ...props
}) => {
  const { name, downloadUrl, renderImg, imgUrl, imgOnClick, imgOnLoad } = props;

  return (
    <StyledMessageAttachment {...props}>
      <StyledMessageAttachmentContent {...props}>
        <div className="ch-attachment-icon">
          <Document className="ch-document-icon" width="2rem" height="2rem" />
        </div>

        <div className="ch-attachment-name">
          <a target="_blank" href={downloadUrl} rel="noreferrer">
            {name}
          </a>
          <span className="ch-attachment-size">{size}</span>
        </div>
      </StyledMessageAttachmentContent>
      {renderImg && (
        <img
          className="ch-attachment-img"
          data-testid="preview-img"
          alt={imgUrl || downloadUrl}
          onClick={imgOnClick}
          src={imgUrl || downloadUrl}
          onLoad={imgOnLoad}
        />
      )}
    </StyledMessageAttachment>
  );
};

export default MessageAttachment;
