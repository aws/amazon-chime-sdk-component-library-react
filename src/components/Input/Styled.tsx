import styled from 'styled-components';
import { InputWrapperProps } from './InputWrapper';

const getPadding = (props: InputWrapperProps)  => {
  const { sizing, leadingIcon } = props;
  return sizing === 'sm'
  ? `0.125rem .5rem 0.125rem ${leadingIcon ? '1.25rem' : '0.125rem'}`
  : `0.375rem .5rem 0.375rem ${leadingIcon ? '1.25rem' : '0.375rem'}`
}

export const StyledInputWrapper = styled.span<InputWrapperProps>`
  position: relative;

  > .icon {
    position: absolute;
    width: 1rem;
    left: 0.1875rem;
    position: absolute;
    top: ${props => props.sizing === 'sm' ? '0.25rem': '0.5rem'};
  }

  > input {
    padding: ${props => getPadding(props)};
  }
`;

export const StyledInput = styled.input`
  background-color: ${props => props.theme.inputs.bgd};
  border: ${props => props.theme.inputs.border};
  border-radius: ${props => props.theme.inputs.borderRadius};
  box-shadow: ${props => props.theme.inputs.shadow};
  color: ${props => props.theme.inputs.fontColor};
  align-items: center;
  display: flex;
  font-size: 0.875rem;
  letter-spacing: -0.005625rem;
  line-height: 1.43;
  transition: box-shadow .05s ease-in;

  &::placeholder {
    color: ${props => props.theme.inputs.placeholder};
  }

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
