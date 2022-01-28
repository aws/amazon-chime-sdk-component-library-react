// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes, ReactElement } from 'react';
import { BaseProps } from '../Base';

import { useModalContext } from './ModalContext';
import { StyledModalButtonGroup } from './Styled';

export interface ModalButtonGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
  /** Defines the primary button(s) in the modal. */
  primaryButtons: ReactElement | ReactElement[];
  /** Defines the secondary button(s) in the modal. */
  secondaryButtons?: ReactElement | ReactElement[];
}

export const ModalButtonGroup: FC<ModalButtonGroupProps> = ({
  primaryButtons,
  secondaryButtons,
  ...rest
}) => {
  const context = useModalContext();

  const addCloseBehaviorToButton = (button: any) => {
    return React.cloneElement(button, {
      onClick: () => {
        button.props.onClick && button.props.onClick();
        !!button.props.closesModal && context.onClose();
      },
      key: button.props.label,
    });
  };

  const addCloseBehaviorToButtons = (buttons: JSX.Element[] | JSX.Element) => {
    if (
      !context.dismissible ||
      !buttons ||
      (buttons instanceof Array && buttons.length === 0)
    ) {
      context.dismissible &&
        console.warn(
          "the 'dismissible prop prevents buttons from closing the modal"
        );
      return buttons;
    }
    if (!(buttons instanceof Array)) {
      return addCloseBehaviorToButton(buttons);
    }
    return buttons.map(addCloseBehaviorToButton);
  };

  return (
    <StyledModalButtonGroup
      data-testid="modal-button-group"
      {...rest}
    >
      <div key="primarybuttons">
        {addCloseBehaviorToButtons(primaryButtons)}
      </div>
      {secondaryButtons && (
        <div key="secondarybuttons">
          {addCloseBehaviorToButtons(secondaryButtons)}
        </div>
      )}
    </StyledModalButtonGroup>
  );
};

export default ModalButtonGroup;
