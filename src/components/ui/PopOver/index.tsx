// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import classnames from 'classnames';
import React, {
  createRef,
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Manager, Popper, Reference } from 'react-popper';

import { KEY_CODES } from '../../../constants';
import useClickOutside from '../../../hooks/useClickOutside';
import useTabOutside from '../../../hooks/useTabOutside';
import { BaseProps } from '../Base';
import { StyledPopOverMenu, StyledPopOverToggle } from './Styled';

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
  renderButton?: (isActive: boolean) => ReactNode;
  /** Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef */
  renderButtonWrapper?: (isActive: boolean, props: any) => ReactNode;
  /** The callback fired when the render button is clicked. */
  onPopOverClick?: (isOpen: boolean) => void;
  /** The label used for availability. */
  a11yLabel: string;
  /** Allow the popover to stay open for multiple clicks. */
  closeOnClick?: boolean;
}

const getFocusableElements = (node: HTMLElement): NodeListOf<HTMLElement> => {
  return node.querySelectorAll('button, [href]');
};

export const PopOver: FC<React.PropsWithChildren<PopOverProps>> = ({
  renderButton,
  renderButtonWrapper,
  onPopOverClick,
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

  useEffect(() => {
    if (isOpen && !!menuRef.current) {
      const nodes = getFocusableElements(menuRef.current);
      !!nodes && nodes[0].focus();
    }
  }, [isOpen]);

  const move = (direction: string) => {
    const node = menuRef.current;

    if (isSubMenu) {
      // the parent menu can access
      // child nodes and manage focused elements
      return;
    }
    if (node) {
      const nodes = getFocusableElements(node);
      const currentElement = document.activeElement;

      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] === currentElement) {
          if (direction === 'down' && i !== nodes.length - 1) {
            return nodes[i + 1].focus();
          }

          if (direction === 'up' && i > 0) {
            return nodes[i - 1].focus();
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
    if (onPopOverClick) {
      onPopOverClick(isOpen);
    }
  };

  useClickOutside(menuRef, () => setIsOpen(false));
  useTabOutside(menuRef, () => setIsOpen(false));

  return (
    <span ref={menuRef} onKeyDown={handleKeyUp} data-testid="popover">
      <Manager>
        <Reference>
          {({ ref }) => {
            const props = {
              ref,
              className: classnames(className, 'ch-popover-toggle'),
              onClick: handlePopOverClick,
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
              return <span ref={ref}>{renderButtonWrapper(isOpen, rest)}</span>;
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
                {children}
              </StyledPopOverMenu>
            )}
          </Popper>
        )}
      </Manager>
    </span>
  );
};

export default PopOver;
