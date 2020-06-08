import React, { FC } from 'react';

import Caret from '../icons/Caret';
import { StyledControlBarItem } from './Styled';
import PopOver from '../PopOver';
import PopOverItem, { PopOverItemProps } from '../PopOver/PopOverItem';
import { useControlBarContext } from './ControlBarContext';
import { ControlBarLayout } from '.';
import IconButton from '../Button/IconButton';

export interface ControlBarButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element;
  onClick: () => void;
  label: string;
  popOver?: PopOverItemProps[] | null;
}

export const isVertical = (layout: ControlBarLayout) => {
  return layout === 'right' || layout === 'left' || layout === 'undocked-vertical';
};

export const isUndocked = (layout: ControlBarLayout) => {
  return layout === 'undocked-vertical' || layout === 'undocked-horizontal';
};

export const ControlBarButton:FC<ControlBarButtonProps> = ({ icon, onClick, label, popOver = null }) => {
  const context = useControlBarContext();

  const renderPopOver = () => (
    <PopOver
      renderButton={(isOpen) => getButtonContents(isOpen)}
      a11yLabel={label}
      children={popOver?.map((option: PopOverItemProps, index: number) => <PopOverItem {...option} key={index} />)}
    />
  )

  const getButtonContents = (isOpen: boolean) => (
    <Caret direction={isVertical(context.layout) ? 'right' : 'up'} className={`controlBarItem__caret ${isOpen ? 'isOpen' : ''}`} data-testid='control-bar-item-caret'/>
  )

  return (
    <StyledControlBarItem data-testid='control-bar-item' {...context} popOver={popOver}>
      <IconButton onClick={onClick} label={label} icon={icon} />
      {!!popOver && renderPopOver()}
      {context.showLabels && <div className='controlBarItem__label'>{label}</div>}
    </StyledControlBarItem>
  )
}

export default ControlBarButton;