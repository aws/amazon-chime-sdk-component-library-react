// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  FC,
  createRef,
  useState,
  HTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import classnames from 'classnames';

import { KEY_CODES } from '../../../constants';
import useClickOutside from '../../../hooks/useClickOutside';
import useTabOutside from '../../../hooks/useTabOutside';
import { BaseProps } from '../Base';
import { StyledPopOverMenu, StyledPopOverToggle } from './Styled';
import PopOverItem from './PopOverItem';

export type Placement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';

export interface PopOverProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'css'>,
    BaseProps {
  /** CSS classname to apply custom styles. */
  className?: string;
  /** Whether or not this is a sub menu. */
  isSubMenu?: Boolean;
  /** Defines the placement of PopOver menu. */
  placement?: Placement;
  /** Defines the function to render the inner contents of the popover button element */
  renderButton?: (isActive: boolean) => {};
  /** Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef */
  renderButtonWrapper?: (isActive: boolean, props: any) => {};
  /** The callback fired when the render button is clicked. */
  onPopOverClick?: (isOpen: boolean) => void;
  /** The callback fired when the mouseenter event is fired at the render button. */
  onMouseEnter?: (e: any) => void
  /** The callback fired when the mouseleave event is fired at the render button. */
  onMouseLeave?: (e: any) => void
  /** The label used for availability. */
  a11yLabel: string;
  /** The elements that populate the menu */
  children: any;
  /** Allow the popover to stay open for multiple clicks. */
  closeOnClick?: boolean;
}

const getFocusableElements = (node: HTMLElement): NodeListOf<HTMLElement> => {
  return node.querySelectorAll('button, [href]');
};

export const PopOver: FC<PopOverProps> = ({
  renderButton,
  renderButtonWrapper,
  onPopOverClick,
  onMouseEnter,
  onMouseLeave,
  children,
  isSubMenu = false,
  placement = 'bottom-start',
  a11yLabel,
  className,
  closeOnClick = true,
  ...rest
}) => {
  const menuRef = createRef<HTMLSpanElement>();
  const [isOpen, setIsOpen] = useState(false);
  const prevActiveRef = useRef<HTMLElement>();

  useEffect(() => {
    if (isOpen && !!menuRef.current) {
      const nodes = getFocusableElements(menuRef.current);
      !!nodes && focusElement(nodes[0]);
    }
  }, [isOpen]);

  const mouseEnter = (e: MouseEvent) => {
    const currentElement = e.currentTarget;
    if (currentElement instanceof HTMLElement && currentElement !== document.activeElement) {
      active(currentElement);
    }
  }

  const mouseLeave = (e: MouseEvent) => {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && activeElement !== e.currentTarget) {
      active(activeElement);
    }
  }

  const active = (node: HTMLElement) => {
    if (!node) {
      return;
    }
    node.classList.add('ch-popover-active');
    if (prevActiveRef.current) {
      prevActiveRef.current.classList.remove('ch-popover-active');
    }
    prevActiveRef.current = node;
  }

  const focusElement = (node: HTMLElement) => {
    node.focus();
    active(node);
  }

  const move = (direction: string) => {
    const node = menuRef.current;

    if (isSubMenu) {
      // the parent menu can access
      // child nodes and manage focused elements
      return;
    }
    if (!!node) {
      const nodes = getFocusableElements(node);
      const currentElement = document.activeElement;

      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] === currentElement) {
          if (direction === 'down' && i !== nodes.length - 1) {
            return focusElement(nodes[i + 1]);
          }

          if (direction === 'up' && i > 0) {
            return focusElement(nodes[i - 1]);
          }
          break;
        }
      }
    }
  };

  const closePopover = (e: any) => {
    if (!closeOnClick) {
      return;
    }
    const isSubMenuButton = e.target.closest("[data-menu='submenu']");
    return !isSubMenuButton ? setIsOpen(false) : false;
  };

  const handleKeyUp = (e: any) => {
    switch (e.keyCode) {
      case KEY_CODES.ESCAPE:
        return setIsOpen(false);
      case KEY_CODES.ARROW_UP:
        return move('up');
      case KEY_CODES.ARROW_DOWN:
        return move('down');
    }
  };

  const handlePopOverClick = () => {
    setIsOpen(!isOpen);
    if(onPopOverClick) {
      onPopOverClick(isOpen);
    }
  };

  useClickOutside(menuRef, () => setIsOpen(false));
  useTabOutside(menuRef, () => setIsOpen(false));

  const modifiedChildren = React.Children.map(children, (child: any) => {
    if (!child) {
      return;
    }

    if (child.type === PopOverItem || child.type?.name === 'PopOverSubMenu' ) {
      return React.cloneElement(child as React.ReactElement<any>, {
        onMouseEnter: mouseEnter,
        onMouseLeave: mouseLeave,
      });
    }
    return child;
  });

  return (
    <span ref={menuRef} onKeyDown={handleKeyUp} data-testid="popover">
      <Manager>
        <Reference>
          {({ ref }) => {
            const props = {
              ref,
              className: classnames(className, 'ch-popover-toggle'),
              onClick: handlePopOverClick,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              'data-menu': isSubMenu ? 'submenu' : null,
              'aria-label': a11yLabel,
              'aria-haspopup': true,
              'aria-expanded': isOpen,
              'data-testid': 'popover-toggle',
            };

            if (renderButton) {
              return (
                <StyledPopOverToggle {...props}>
                  {renderButton(isOpen)}
                </StyledPopOverToggle>
              );
            }

            if (renderButtonWrapper) {
              const { ref, ...rest } = props;
              return (
                <span ref={ref}>
                  {renderButtonWrapper(isOpen, rest)}
                </span>
              );
            }

            return null;
          }}
        </Reference>
        {isOpen && (
          <Popper
            placement={placement}
            modifiers={[{ name: 'offset', options: { offset: [-8, 0] } }]}
            {...rest}
          >
            {({ ref, style, placement }) => (
              <StyledPopOverMenu
                data-placement={placement}
                onClick={(e: any) => closePopover(e)}
                ref={ref}
                style={style}
                data-testid="menu"
                className="ch-popover-menu"
              >
                {modifiedChildren}
              </StyledPopOverMenu>
            )}
          </Popper>
        )}
      </Manager>
    </span>
  );
};

export default PopOver;
