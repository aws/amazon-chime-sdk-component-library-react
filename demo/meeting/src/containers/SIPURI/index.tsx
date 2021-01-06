// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useRef } from 'react';
import { PrimaryButton } from 'amazon-chime-sdk-component-library-react';

import { StyledDiv } from './Styled';

interface SIPProps {
  sipURI: string;
}

const SIPURI: React.FC<SIPProps> = ({ sipURI }: SIPProps) => {
  const sipUriEl: any = useRef<HTMLParagraphElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copySIPURI = (): void => {
    const selection = window.getSelection();
    if (selection) {
      try {
        const range = document.createRange();
        range.selectNodeContents(sipUriEl.current);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error('Could not copy content');
      }
    } else {
      console.error('Could not get window selection to copy content');
    }
  };

  return (
    <StyledDiv>
      <div className="sip-uri-heading">SIP URI</div>
      <p ref={sipUriEl} className="sip-uri-data">
        {sipURI}
      </p>
      {document.queryCommandSupported('copy') && (
        <PrimaryButton
          className="btn-copy"
          label={!isCopied ? 'Copy' : 'Copied!'}
          onClick={copySIPURI}
        />
      )}
    </StyledDiv>
  );
};

export default SIPURI;
