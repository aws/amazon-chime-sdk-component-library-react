import styled from 'styled-components';
import { HeadingProps } from './';

export const StyledHeading = styled.h1<HeadingProps>`
  display: block;
  margin: 0;

  font-size: ${props => props.theme.fontSizes[props.level].mobile.fontSize};
  line-height: ${props => props.theme.fontSizes[props.level].mobile.lineHeight};

  @media (min-width: ${props => props.theme.breakpoints.tabletPortait}) {
    font-size: ${props => props.theme.fontSizes[props.level].fontSize};
    line-height:  ${props => props.theme.fontSizes[props.level].lineHeight};
  };
  ${props => props.css}
`;
