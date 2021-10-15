// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { BaseProps, baseSpacing, baseStyles } from '../../Base';

interface StyledMessageAttachmentProps extends BaseProps {
  imgStyles?: string;
}

export const StyledMessageAttachmentContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  & .ch-attachment-icon {
    height: 2rem;
    width: 2rem;
    margin: auto;
    background-color: ${(props) => props.theme.messageAttachment.icon.bgd};
    border-radius: 25px;

    & .ch-document-icon {
      margin: auto 0;
      color: ${(props) => props.theme.messageAttachment.icon.color};
    }
  }
  & .ch-attachment-name {
    margin-left: 1rem;

    & a:link,
    a:visited,
    a:hover,
    a:active {
      color: ${(props) => props.theme.messageAttachment.name.fontColor};
      text-decoration: none;
    }
  }
  & .ch-attachment-size {
    font-size: ${(props) => props.theme.messageAttachment.size.fontSize};
    color: ${(props) => props.theme.messageAttachment.size.fontColor};
    display: block;
    padding-top: 3px;
  }
`;

export const StyledMessageAttachment = styled.div<StyledMessageAttachmentProps>`
  color: ${(props) => props.theme.messageAttachment.content.fontColor};
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.messageAttachment.content.bgd};
  letter-spacing: ${(props) =>
    props.theme.messageAttachment.content.letterSpacing};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};

  & img {
    ${(props) => props.imgStyles};
  }

  ${baseSpacing}
  ${baseStyles}
`;
