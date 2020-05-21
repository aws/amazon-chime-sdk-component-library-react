import React, { useState, useRef } from 'react';

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
    <div className="sip-uri" style={{ marginBottom: '1rem' }}>
      <div
        className="sip-uri-heading"
        style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
      >
        SIP URI
      </div>
      <p ref={sipUriEl}>{sipURI}</p>
      {document.queryCommandSupported('copy') && (
        <button type="button" onClick={copySIPURI}>
          Copy SIP URI
        </button>
      )}
      {isCopied && <small>Copied!</small>}
    </div>
  );
};

export default SIPURI;
