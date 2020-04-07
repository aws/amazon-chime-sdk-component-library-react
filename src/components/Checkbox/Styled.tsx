import styled from 'styled-components';

import { visuallyHidden } from '../../utils/style';
import { CheckboxProps } from "./";

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;  
  padding: 0.5rem;

  input[type=checkbox] {
    ${visuallyHidden}
  }

  label {
    display: flex;
    position: relative;
    align-items: start;
  }

  .checkmark-wrapper {
    width: 1rem;
    height: 1rem;
    display: block;
    border-radius: 0.25rem;
    box-shadow: ${props => 
        props.checked ?
        props.theme.checkbox.checked.checkboxShadow:
        props.theme.checkbox.default.checkboxShadow
      }; 
    background-color: ${props => 
      props.checked ?
      props.theme.checkbox.checked.checkboxBgd:
      props.theme.checkbox.default.checkboxBgd
    }; 
    border: ${props => 
      props.checked ?
      props.theme.checkbox.checked.checkboxBorder:
      props.theme.checkbox.default.checkboxBorder
    };
    margin-top: 0.125rem;
    color: ${props => 
      props.checked ?
      props.theme.checkbox.checked.checkmark:
      props.theme.checkbox.default.checkmark
    };
  }

  .checkmark {
    width: 1.25rem;
    position: absolute;
    left: -0.0625rem;
    top: 0.0625rem;
  }


  .label-text {
    font-size: 0.875rem;
    margin-left: 0.5rem;
    line-height: 1.43;
    color: ${props => props.theme.checkbox.default.labelText};
    letter-spacing: -0.005625rem;
  }  
`;
