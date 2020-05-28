import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  background-color: ${props => props.theme.inputs.bgd};
  border: ${props => props.theme.inputs.border};
  border-radius: ${props => props.theme.inputs.borderRadius};
  box-shadow: ${props => props.theme.inputs.shadow};
  color: ${props => props.theme.inputs.fontColor};
  font-size: 0.875rem;
  padding: 0.5rem;
  position: relative;
  min-height: 4rem;
  transition: box-shadow .05s ease-in;
  width: 100%;

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
