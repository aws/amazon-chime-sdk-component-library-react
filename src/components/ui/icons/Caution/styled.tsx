// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

import { defaultStyledConfig } from '../../../../utils/style';
import { CautionProps } from './';

const defaultStyle = css`
  .ch-caution-background {
    fill: transparent;
  }
`;

const warningStyle = css`
  .ch-caution-background {
    fill: ${(props) => props.theme.colors.warning.primary};
  }

  .ch-caution-exclamation {
    fill: ${(props) => props.theme.colors.greys.white};
  }

  .ch-caution-border {
    fill: ${(props) => props.theme.colors.warning.primary};
  }
`;

const errorStyle = css`
  .ch-caution-background {
    fill: ${(props) => props.theme.colors.error.primary};
  }

  .ch-caution-exclamation {
    fill: ${(props) => props.theme.colors.greys.white};
  }

  .ch-caution-border {
    fill: ${(props) => props.theme.colors.error.primary};
  }
`;

const variantMap = {
  default: defaultStyle,
  'fill-warning': warningStyle,
  'fill-error': errorStyle,
};

export const StyledCaution = styled.g.withConfig(
  defaultStyledConfig
)<CautionProps>`
  ${(props) => variantMap[props.variant || 'default']};
`;
