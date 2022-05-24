// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

import { ToolTipPositionType } from '.';

// All units are in rem
const caretSpacing = 0.25;
const caretSize = 0.5;
const sidePadding = 0.5;
const verticalPadding = 0.75;
const fontSize = 1;

interface StyledTooltipProps {
  position: ToolTipPositionType;
  bounds: DOMRect;
}

const TopProps = css<StyledTooltipProps>`
  top: calc(
    ${(props) => props.bounds?.top ?? 0}px -
      ${caretSize + caretSpacing + fontSize}rem
  );
  left: ${(props) =>
    ((props.bounds?.left ?? 0) + (props.bounds?.right ?? 0)) / 2}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(180deg);
    top: 100%;
    left: calc(50% - ${caretSize}rem);
  }
`;

const BottomProps = css<StyledTooltipProps>`
  top: calc(
    ${(props) => props.bounds?.bottom ?? 0}px +
      ${caretSize + caretSpacing + fontSize}rem
  );
  left: ${(props) =>
    ((props.bounds?.left ?? 0) + (props.bounds?.right ?? 0)) / 2}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(0deg);
    top: -${caretSize}rem;
    left: calc(50% - ${caretSize}rem);
  }
`;

const LeftProps = css<StyledTooltipProps>`
  top: ${(props) =>
    ((props.bounds?.top ?? 0) + (props.bounds?.bottom ?? 0)) / 2}px;
  left: calc(
    ${(props) => props.bounds?.left ?? 0}px - ${caretSize + caretSpacing}rem
  );
  transform: translateY(-50%) translateX(-100%);

  &::before {
    transform: rotateZ(90deg);
    top: calc(50% - ${caretSize / 2}rem);
    left: calc(100% - ${caretSpacing}rem);
  }
`;

const RightProps = css<StyledTooltipProps>`
  top: ${(props) =>
    ((props.bounds?.top ?? 0) + (props.bounds?.bottom ?? 0)) / 2}px;
  left: calc(
    ${(props) => props.bounds?.right ?? 0}px + ${caretSize + caretSpacing}rem
  );
  transform: translateY(-50%);

  &::before {
    transform: rotateZ(270deg);
    top: calc(50% - ${caretSize / 2}rem);
    left: -${caretSize + caretSpacing}rem;
  }
`;

export const StyledTooltip = styled.span<StyledTooltipProps>`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  position: fixed;
  z-index: 9999;
  color: white;
  white-space: nowrap;
  pointer-events: none;
  line-height: normal;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: ${fontSize / 2}rem;
  font-size: ${fontSize}rem;
  font-weight: 300;
  padding: ${sidePadding}rem ${verticalPadding}rem;
  white-space: nowrap;
  animation: fadeIn 0.3s;

  &::before {
    border-bottom: ${caretSize}rem solid rgba(0, 0, 0, 0.8);
    border-left: ${caretSize}rem solid transparent;
    border-right: ${caretSize}rem solid transparent;
    content: '';
    height: 0;
    transform: translateX(-100%) translateY(-50%);
    width: 0;
    z-index: 1;
    position: absolute;
  }

  ${(props) => props.position === 'top' && TopProps}
  ${(props) => props.position === 'bottom' && BottomProps}
  ${(props) => props.position === 'left' && LeftProps}
  ${(props) => props.position === 'right' && RightProps}
`;
