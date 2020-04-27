import styled from "styled-components";

import { visuallyHidden, absoluteCenter } from '../../utils/style';

export const HiddenRadio = styled.input`
  ${visuallyHidden};

  &[aria-invalid="true"] + .Radio {
    box-shadow: 0 0 0 0.125rem ${props => props.theme.colors.error.light};
    border-color: ${props => props.theme.colors.error.dark};
  }
`;

export const StyledRadioWrapper = styled.span`
  > label {
    margin-left: 0.5rem;
  }
`;

export const StyledRadio = styled.div<any>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: ${props => props.theme.radii.circle};
  position: relative;
  margin-bottom: -0.1875rem;

  box-shadow: ${props =>
    props.checked ?
    props.theme.radio.checked.wrapperShadow:
    props.theme.radio.default.wrapperShadow
  };
  background-color: ${props =>
    props.checked ?
    props.theme.radio.checked.wrapperBgd:
    props.theme.radio.default.wrapperBgd
  };
  border: ${props =>
    props.checked ?
    props.theme.radio.checked.wrapperBorder:
    props.theme.radio.default.wrapperBorder
  };

  &:after {
    content: '';
    display: block;
    border-radius: ${props => props.theme.radii.circle};
    display: block;
    height: 0.375rem;
    width: 0.375rem;
    padding: 0.03125rem;
    ${absoluteCenter};
    background-color: ${props =>
      props.checked ?
      props.theme.radio.checked.bodyBgd:
      props.theme.radio.default.bodyBgd
    };
  }

  ${HiddenRadio}:focus ~ & {
    box-shadow: ${props => props.theme.radio.focus.wrapperShadow};
    border: ${props => props.theme.radio.focus.wrapperBorder};
  }
`;
