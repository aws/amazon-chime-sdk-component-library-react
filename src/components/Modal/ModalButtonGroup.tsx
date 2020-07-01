import React, { FC, ReactElement } from 'react';
import { useModalContext } from './ModalContext';

import { StyledModalButtonGroup } from './Styled';

export interface ModalButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryButtons: ReactElement | ReactElement[];
  secondaryButtons?: ReactElement | ReactElement[];
}

export const ModalButtonGroup:FC<ModalButtonGroupProps> = ({ primaryButtons, secondaryButtons  }) => {
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
    if (!buttons || (buttons instanceof Array && buttons.length === 0)) {
      return buttons;
    }
    if (!(buttons instanceof Array)) {
      return addCloseBehaviorToButton(buttons);
    }
    return buttons.map(addCloseBehaviorToButton);
  };

  return (
    <StyledModalButtonGroup data-testid='modalButtonGroup'>
      <div>
        {addCloseBehaviorToButtons(primaryButtons)}
      </div>
      {secondaryButtons && <div>{addCloseBehaviorToButtons(secondaryButtons)}</div>}
    </StyledModalButtonGroup>
  );
};

export default ModalButtonGroup;
