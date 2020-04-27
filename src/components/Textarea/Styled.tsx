import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  background-color: ${props => props.theme.textarea.bgd};
  color: ${props => props.theme.textarea.text};
  position: relative;
  border-radius: ${props => props.theme.radii.default};
  border: ${props => props.theme.textarea.border};
  box-shadow: ${props => props.theme.textarea.shadow};
  font-family: inherit;
  font-size: 0.875rem;
  width: 100%;
  min-height: 4rem;
  padding: 0.5rem;

  &:focus,
  &[aria-invalid="true"]:focus {
    border: ${props => props.theme.textarea.focus.border};
    box-shadow: ${props => props.theme.textarea.focus.shadow};
    outline: 0;
  }

  &[aria-invalid="true"] {
    box-shadow: 0 0 0 0.125rem ${props => props.theme.colors.error.light};
    border-color: ${props => props.theme.colors.error.dark};
  }
`;
