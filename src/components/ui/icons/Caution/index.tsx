// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import Svg, { SvgProps } from '../Svg';

export type CautionVariant = 'default' | 'fill-warning' | 'fill-error';

import { StyledCaution } from './styled';

export interface CautionProps extends SvgProps {
  /** toggle the range of visual variants */
  variant?: CautionVariant;
}

const Caution: FC<CautionProps> = (props) => (
  <Svg {...props}>
    <StyledCaution fill="currentColor" variant={props.variant}>
      <path
        className="ch-caution-background"
        d="M18.728 15.186l-5.085-8.281C13.293 6.338 12.68 6 12 6c-.68 0-1.294.338-1.642.905l-5.085 8.281c-.351.571-.365 1.258-.04 1.841.336.6.98.972 1.68.972h10.17c.704 0 1.348-.372 1.683-.972.326-.583.312-1.27-.04-1.841"
      />
      <path
        className="ch-caution-exclamation"
        d="M12.572 14.609v1.219h-1.166v-1.219h1.166zm.023-5.388v1.83l-.288 2.727h-.597l-.305-2.727V9.22h1.19z"
      />
      <path
        className="ch-caution-border"
        d="M17.894 16.539c-.161.288-.463.46-.81.46H6.915c-.343 0-.645-.172-.806-.46-.15-.266-.143-.568.017-.829l5.085-8.281c.33-.536 1.25-.538 1.58 0l5.086 8.281c.16.261.167.563.018.829m.834-1.353l-5.085-8.281C13.293 6.338 12.68 6 12 6c-.68 0-1.294.338-1.642.905l-5.085 8.281c-.351.571-.365 1.258-.04 1.841.336.6.98.972 1.68.972h10.17c.704 0 1.348-.372 1.683-.972.326-.583.312-1.27-.04-1.841"
      />
    </StyledCaution>
  </Svg>
);

Caution.displayName = 'Caution';

export default Caution;
