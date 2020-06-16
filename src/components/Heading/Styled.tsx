import styled from 'styled-components';
import { HeadingProps } from './';

export const StyledHeading = styled.h1<HeadingProps>`
  display: block;
  margin: 0;

  font-size: ${props => props.theme.fontSizes[props.level].mobile.fontSize};
  font-weight: ${props => props.theme.fontSizes[props.level].mobile.fontWeight};
  line-height: ${props => props.theme.fontSizes[props.level].mobile.lineHeight};

  @media (min-width: ${props => props.theme.breakpoints.tabletPortait}) {
    font-size: ${props => props.theme.fontSizes[props.level].fontSize};
    font-weight: ${props => props.theme.fontSizes[props.level].fontWeight};
    line-height:  ${props => props.theme.fontSizes[props.level].lineHeight};
  };
  ${props => props.css}
`;
