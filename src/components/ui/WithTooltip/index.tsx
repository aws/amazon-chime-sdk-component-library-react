// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

// All units are in rem
const caretSpacing = 0.25;
const caretSize = 0.5;
const sidePadding = 0.5;
const verticalPadding = 0.75;
const fontSize = 1;

type ToolTipPositionType = 'top' | 'bottom' | 'right' | 'left';

export interface Tooltipable {
  /* Put tooltips on any buttons */
  ['data-tooltip']?: boolean;
  /* Tooltips locaiton on any buttons */
  ['data-tooltip-position']?: ToolTipPositionType;
}

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

const StyledTooltip = styled.span<StyledTooltipProps>`
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

interface ToolTipProps {
  label: string;
  tooltipPosition?: ToolTipPositionType;
}

interface WithTooltipState {
  bounds: DOMRect | null;
  show: boolean;
}

const initialState: WithTooltipState = { show: false, bounds: null };

export const WithTooltip = <P extends object>(
  Component: React.ComponentType<P>,
  container_id = 'Tooltip__container'
) => (props: P & ToolTipProps) => {
  const [{ show, bounds }, setShow] = useState<WithTooltipState>(initialState);
  const position = props.tooltipPosition ?? 'top';

  const showToolTip = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    let component = e.target as Element;
    while (!component.getAttribute('data-tooltip'))
      component = component.parentElement as Element;
    const bounds = component.getBoundingClientRect();
    setShow({ show: true, bounds });
  }, []);

  const hideToolTip = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(initialState);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', hideToolTip, true);
    return () => document.removeEventListener('scroll', hideToolTip);
  }, []);

  const container = document.getElementById(container_id);

  return (
    <>
      {show &&
        bounds &&
        container &&
        ReactDOM.createPortal(
          <StyledTooltip position={position} bounds={bounds}>
            {props.label}
          </StyledTooltip>,
          container
        )}
      <Component
        {...(props as P)}
        data-tooltip
        data-tooltip-position={position}
        onClick={(e: MouseEvent) => {
          if (show) hideToolTip(e);
          (props as any)?.onClick?.(e);
        }}
        onFocus={(e: FocusEvent) => {
          if (!show) showToolTip(e);
          (props as any)?.onFocus?.(e);
        }}
        onBlur={(e: FocusEvent) => {
          if (show) hideToolTip(e);
          (props as any)?.onBlur?.(e);
        }}
        onMouseEnter={(e: MouseEvent) => {
          if (!show) showToolTip(e);
          (props as any)?.onMouseEnter?.(e);
        }}
        onMouseLeave={(e: MouseEvent) => {
          if (show) hideToolTip(e);
          (props as any)?.onMouseLeave?.(e);
        }}
      />
    </>
  );
};
