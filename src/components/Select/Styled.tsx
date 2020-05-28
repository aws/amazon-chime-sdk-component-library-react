import styled from "styled-components";

export const StyledSelectInput = styled.select`
  background-color: ${props => props.theme.inputs.bgd};
  border: ${props => props.theme.inputs.border};
  border-radius: ${props => props.theme.inputs.borderRadius};
  box-shadow: ${props => props.theme.inputs.shadow};
  color: ${props => props.theme.inputs.fontColor};
  font-size: 0.875rem;
  height: 2rem;
  letter-spacing: -0.005625rem;
  line-height: 1.43;
  padding: 0.375rem 0.5rem;
  transition: box-shadow .05s ease-in;

  &:focus,
  &[aria-invalid="true"]:focus {
    border: ${props => props.theme.inputs.focus.border};
    box-shadow: ${props => props.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid="true"] {
    border: ${props => props.theme.inputs.error.border};
    box-shadow: ${props => props.theme.inputs.error.shadow};
  }
`;


