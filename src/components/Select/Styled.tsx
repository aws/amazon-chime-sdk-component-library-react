import styled from "styled-components";

export const StyledSelectInput = styled.select`
  background-color: ${props => props.theme.colors.greys.white};
  border: 0.03125rem solid ${props => props.theme.colors.greys.grey30};
  color: ${props => props.theme.colors.greys.grey70};
  border: ${props => props.theme.select.border};
  box-shadow: ${props => props.theme.select.shadow};
  line-height: 1.43;
  letter-spacing: -0.005625rem;
  padding: 0.375rem 0.5rem;
  height: 2rem;
  font-size: 0.85rem;

  &:focus,
  &[aria-invalid="true"]:focus {
    border: ${props => props.theme.select.focus.border};
    box-shadow: ${props => props.theme.select.focus.shadow};
    outline: 0;
  }

  &[aria-invalid="true"] {
    box-shadow: 0 0 0 0.125rem ${props => props.theme.colors.error.light};
    border-color: ${props => props.theme.colors.error.dark};
  }
`;


