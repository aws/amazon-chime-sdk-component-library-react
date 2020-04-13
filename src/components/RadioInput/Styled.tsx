import styled from "styled-components";

import { RadioInputProps } from ".";
import { visuallyHidden } from '../../utils/style';

export const StyledRadioInput = styled.div<RadioInputProps>`
  display: inline-block;  
  padding: 0.5rem;

  input[type=radio] {
    ${visuallyHidden}
  }

  label {
    display: flex;
    position: relative;
    align-items: start;
  }

  .radio-wrapper {
    width: 1rem;
    height: 1rem;
    border-radius: ${props => props.theme.radii.circle};
    display: block;
    box-shadow: ${props => 
      props.checked ?
      props.theme.radioInput.checked.wrapperShadow:
      props.theme.radioInput.default.wrapperShadow
    }; 
    background-color: ${props => 
      props.checked ?
      props.theme.radioInput.checked.wrapperBgd:
      props.theme.radioInput.default.wrapperBgd
    }; 
    border: ${props => 
      props.checked ?
      props.theme.radioInput.checked.wrapperBorder:
      props.theme.radioInput.default.wrapperBorder
    };
    margin-top: 0.125rem;
  }

  .radio-checkmark {
    display: block;
    height: 0.375rem;
    width: 0.375rem;
    padding: 0.03125rem;
    margin: 0.25rem;
    background-color: ${props => 
      props.checked ?
      props.theme.radioInput.checked.bodyBgd:
      props.theme.radioInput.default.bodyBgd
    };
    border-radius: ${props => props.theme.radii.circle};
  }

  .label-text {
    font-size: 0.875rem;
    margin-left: 0.5rem;
    line-height: 1.43;
    color: ${props => props.theme.radioInput.default.labelText};
    letter-spacing: -0.005625rem;
  }
`;