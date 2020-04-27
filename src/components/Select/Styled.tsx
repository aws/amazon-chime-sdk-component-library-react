import styled from "styled-components";

export const StyledSelectInput = styled.select`
  border: 0.03125rem solid ${props => props.theme.colors.greys.grey30};
  color: ${props => props.theme.colors.greys.grey70};
  border: ${props => props.theme.select.border};
  box-shadow: ${props => props.theme.select.shadow};
  line-height: 1.43;
  letter-spacing: -0.005625rem;
  padding: 0.375rem 0.5rem;
  height: 2rem;
  font-size: 0.85rem;


  &:focus {
    border: ${props => props.theme.select.focus.border};
    box-shadow: ${props => props.theme.select.focus.shadow};
    outline: 0;
  }
`;


