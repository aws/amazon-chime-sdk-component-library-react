import styled, { css } from 'styled-components';

import { LayoutProps } from './';

export const stack = css`
  &.FormField-Input,
  &.FormField-Select,
  &.FormField-Textarea {
    display: flex;
    flex-direction: column;

    label {
      display: block;
      margin-bottom: .5rem;
    }

    input {
      width: 100%;
    }
  }

  &.FormField-Checkbox {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    grid-template-rows: auto;
    gap: 0px 0.5rem;

    .Checkbox {
      grid-column: 1;
      grid-row: 1;
    }

    .Checkbox-label {
      line-height: 1.3;
      grid-column: 2;
    }

    .helpText {
      grid-row: 2;
      grid-column: 1/3;
    }
  }

  &.FormField-RadioGroup {
    flex-direction: column;

    .Radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
      padding-left: 0.125rem;
      display: grid;
      grid-template-columns: 1.5rem 1fr;
      grid-template-rows: auto;

      align-items: center;
    }

    .Radio-label {
      margin-left: 1rem;
      position: relative;
      bottom: -0.5px;
    }
  }
`;

export const horizontal = css`

  @media(max-width: 599px) {
    ${stack};
  }

  @media (min-width: 600px)  {
    &.FormField-Input,
    &.FormField-Select,
    &.FormField-Textarea,
    &.FormField-Checkbox {
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-template-rows: auto;
      gap: 0px 0.5rem;
      align-items: center;

      input {
        width: 100%;
      }

      .helpText {
        grid-column: 2;
      }
    }

    &.FormField-RadioGroup {
    flex-wrap: wrap;

    fieldset {
      width: 100%;
    }

    .Radio-wrapper {
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-template-rows: auto;
      gap: 0px 0.5rem;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .Radio {
      grid-column: 2;
      grid-row: 1;
      margin-top: -4px;
    }

    .Radio-label {
      grid-column: 1;
      padding-right: 1rem;
      margin-left: 0;
    }

    .helpText {
      width: 100%;
    }
  }
}
`;

export const inputOnly = css`
  &.FormField-Input,
  &.FormField-Select,
  &.FormField-Textarea {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
    }
  }

  &.FormField-Checkbox {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .Checkbox {
      order: 1;
    }

    .Checkbox-label {
      order: 2;
      padding-left: 1rem;
    }

    .helpText {
      width: 100%;
      order: 3;
    }
  }

  &.FormField-RadioGroup {
    flex-direction: column;

    .Radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
    }

    .Radio-label {
      margin-left: 1rem;
    }
  }
`;

const layoutMap = {
  stack,
  horizontal,
  "input-only": inputOnly,
};

export const StyledFormField = styled.div<LayoutProps>`
  display: flex;
  margin-bottom: 0.875rem;
  position: relative;

  .helpText {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    color: ${props => !!props.error ? props.theme.colors.error.primary : props.theme.colors.greys.grey60};
  }

  fieldset {
    margin: 0.875rem 0 0;
    border: none;
    padding: 0;
  }

  legend {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.greys.grey60};
    margin-bottom: 1rem;
  }

  ${props => !!props.layout && layoutMap[props.layout]}
`;
