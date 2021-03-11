// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { StyledTooltip } from './Styled';

export type ToolTipPositionType = 'top' | 'bottom' | 'right' | 'left';

export interface Tooltipable {
  /* Put tooltips on any buttons */
  ['data-tooltip']?: boolean;
  /* Tooltips locaiton on any buttons */
  ['data-tooltip-position']?: ToolTipPositionType;
}

export interface ToolTipProps {
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
    return () => document.removeEventListener('scroll', hideToolTip, true);
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
