import styled from 'styled-components';

import { visuallyHidden } from '../../utils/style';
import { CheckboxProps, StyledCheckboxProps } from "./";

export const HiddenCheckbox = styled.input<CheckboxProps>`
  ${visuallyHidden};

  &[aria-invalid="true"] + .Checkbox {
    box-shadow: 0 0 0 0.125rem ${props => props.theme.colors.error.light};
    border-color: ${props => props.theme.colors.error.dark};
  }
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  position: relative;
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
  color: ${props =>
    props.checked ?
    props.theme.checkbox.checked.checkmark:
    props.theme.checkbox.default.checkmark
  };

  > svg {
    transform: scale(1.5);
    position: absolute;
    left: -0.03125rem;
  }

  ${HiddenCheckbox}:focus ~ & {
    box-shadow: ${props => props.theme.checkbox.focus.checkboxShadow};
    border: ${props => props.theme.checkbox.focus.checkboxBorder};
  }
`;
