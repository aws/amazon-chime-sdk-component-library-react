import styled from 'styled-components';
import { HeadingProps } from './';

export const StyledHeading = styled.h1<HeadingProps>`
  display: block;
  margin: 0;

  font-size: ${props => props.theme.fontSizes[`h${props.level}`].mobile.fontSize};
  font-weight: ${props => props.theme.fontSizes[`h${props.level}`].mobile.fontWeight};
  line-height: ${props => props.theme.fontSizes[`h${props.level}`].mobile.lineHeight};

  @media (min-width: ${props => props.theme.breakpoints.tabletPortait}) {
    font-size: ${props => props.theme.fontSizes[`h${props.level}`].fontSize};
    font-weight: ${props => props.theme.fontSizes[`h${props.level}`].fontWeight};
    line-height:  ${props => props.theme.fontSizes[`h${props.level}`].lineHeight};
  };
  ${props => props.css}
`;
