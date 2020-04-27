import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.43;
  color: ${props => props.theme.radio.default.labelText};
  letter-spacing: -0.005625rem;
`;
