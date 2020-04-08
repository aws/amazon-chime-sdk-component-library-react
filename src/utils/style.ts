import{ css } from 'styled-components';

// use for elements that contain text for screen readers, but need no visual representation
export const visuallyHidden = css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute !important;
`;

export const ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
