// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, ReactNode } from 'react';

import Caret from '../icons/Caret';
import { StyledControlBarItem, isVertical } from './Styled';
import PopOver, { Placement } from '../PopOver';
import PopOverItem, { PopOverItemProps } from '../PopOver/PopOverItem';
import { useControlBarContext } from './ControlBarContext';
import IconButton from '../Button/IconButton';
import { BaseProps } from '../Base';
import { Tooltipable, WithTooltip } from '../WithTooltip';

const IconButtonWithToolTip = WithTooltip(IconButton);

export interface ControlBarButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps,
    Tooltipable {
  /** The icon of the control bar item. */
  icon: JSX.Element;
  /** The callback fired when the item is clicked. */
  onClick: () => void;
  /** The label of an control bar item. */
  label: string;
  /** The items to render in a popover menu. When passed, the button will render an arrow to open or close a popover menu. Refer to [PopOverItem](/?path=/docs/ui-components-popover--basic-pop-over-menu) */
  popOver?: PopOverItemProps[] | null;
  /** Defines the placement of PopOver menu. */
  popOverPlacement?: Placement;
  /** The label for the optional popOver button. */
  popOverLabel?: string;
  /**  Apply this prop to receive visual feedback that the button is 'active' */
  isSelected?: boolean;
  /** Use children to define an alternative to popOver prop with a custom set of elements to be rendered into the popover */
  children?: ReactNode | ReactNode[];
}

export const ControlBarButton: FC<ControlBarButtonProps> = ({
  icon,
  onClick,
  label,
  isSelected = false,
  popOver = null,
  popOverPlacement,
  popOverLabel,
  children,
  ...rest
}) => {
  const context = useControlBarContext();

  const ButtonComponent = !!rest['data-tooltip']
    ? IconButtonWithToolTip
    : IconButton;
  const buttonComponentProps = !!rest['data-tooltip-position']
    ? { tooltipPosition: rest['data-tooltip-position'] }
    : {};

  const renderPopOver = () => (
    <PopOver
      renderButtonWrapper={(isActive, props) => (
        <IconButton
          {...props}
          icon={
            <Caret
              direction={isVertical(context.layout) ? 'right' : 'up'}
              data-testid="control-bar-item-caret"
            />
          }
          label={popOverLabel || label}
          selected={isActive}
          className={`ch-control-bar-item-caret ${isActive ? 'isOpen' : ''}`}
        />
      )}
      a11yLabel={label}
      className="ch-control-bar-popover"
      placement={popOverPlacement}
    >
      {popOver?.map((option: PopOverItemProps, index: number) => (
        <PopOverItem {...option} key={index} />
      ))}
      {children}
    </PopOver>
  );

  return (
    <StyledControlBarItem
      isSelected={isSelected}
      data-testid="control-bar-item"
      {...rest}
      {...context}
      popOver={popOver}
    >
      <ButtonComponent
        {...buttonComponentProps}
        onClick={onClick}
        label={label}
        icon={icon}
        className="ch-control-bar-item-iconButton"
        selected={isSelected}
      />
      {(popOver || children) && renderPopOver()}
      {context.showLabels && (
        <div className="ch-control-bar-item-label">{label}</div>
      )}
    </StyledControlBarItem>
  );
};

export default ControlBarButton;
