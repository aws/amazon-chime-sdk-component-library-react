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
  background-color: ${props => props.theme.colors.greys.white};
  font-size: 0.85rem;
  border-radius: 0.25rem;
  border: 0.03125rem solid ${props => props.theme.colors.greys.grey30};
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.greys.grey70};
  line-height: 1.43;
  letter-spacing: -0.005625rem;
  box-shadow: 0 0.0625rem 0.0625rem 0 rgba(0, 0, 0, 0.1);

  &:focus,
  &[aria-invalid="true"]:focus {
    box-shadow: 0 0 0 0.125rem ${props => props.theme.colors.primary.lightest};
    border-color: ${props => props.theme.colors.primary.main};
    outline: none;
  }

  &[aria-invalid="true"] {
    box-shadow: 0 0 0 0.125rem ${props => props.theme.colors.error.light};
    border-color: ${props => props.theme.colors.error.dark};
  }
`;
