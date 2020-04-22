import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  background-color: transparent;
  color: ${props => props.theme.textarea.text};
  position: relative;
  border-radius: ${props => props.theme.radii.default};
  border: ${props => props.theme.textarea.border};
  box-shadow: ${props => props.theme.textarea.shadow};
  font-size: 0.875rem;
  transition: box-shadow .15s ease-in;
  width: 100%;
  min-height: 4rem;
  padding: 0.5rem;

  &:focus {
    border: ${props => props.theme.textarea.focus.border};
    box-shadow: ${props => props.theme.textarea.focus.shadow};
    outline: 0;
  }
`;
