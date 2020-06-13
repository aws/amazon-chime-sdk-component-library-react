import React, { FC, createRef, useState, HTMLAttributes, useEffect } from 'react'
import { Manager, Reference, Popper } from 'react-popper';

import { KEY_CODES } from '../../constants';
import useClickOutside from '../../hooks/useClickOutside';
import useTabOutside from '../../hooks/useTabOutside';
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

export interface PopOverProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  isSubMenu?: Boolean;
  placement?: Placement;
  renderButton: (isActive: boolean) => {};
  a11yLabel: string;
  children: any;
}

const getFocusableElements = (node: HTMLElement): NodeListOf<HTMLElement> => {
  return node.querySelectorAll('button, [href]');
}

export const PopOver: FC<PopOverProps> = ({
  renderButton,
  children,
  isSubMenu = false,
  placement = 'bottom-start',
  a11yLabel
}) => {

  const menuRef = createRef<HTMLSpanElement>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen && !!menuRef.current) {
      const nodes = getFocusableElements(menuRef.current);
      !!nodes && nodes[0].focus();
    }
  }, [isOpen]);

  const move = (direction: string) => {
    const node = menuRef.current;

    if(isSubMenu) {
      // the parent menu can access
      // child nodes and manage focused elements
      return;
    }
    if(!!node) {
      const nodes = getFocusableElements(node);
      const currentElement = document.activeElement;

      for(let i = 0; i < nodes.length; i++) {
        if (nodes[i] === currentElement) {

          if(direction === 'down' && i !== nodes.length - 1) {
            return nodes[i + 1].focus();
          }

          if(direction === 'up' && i > 0) {
            return nodes[i - 1].focus();
          }
          break;
        }
      }
    }
  }

  const closePopover = (e: any) => {
    const isSubMenuButton = e.target.closest("[data-menu='submenu']");
    return !isSubMenuButton ? setIsOpen(false) : false;
  }

  const handleKeyUp = (e: any) => {
    switch (e.keyCode) {
      case KEY_CODES.ESCAPE:
        return setIsOpen(false);
      case KEY_CODES.ARROW_UP:
        return move('up');
      case KEY_CODES.ARROW_DOWN:
        return move('down');
    }
  }

  useClickOutside(menuRef, () => setIsOpen(false));
  useTabOutside(menuRef, () => setIsOpen(false));

  return (
    <span ref={menuRef} onKeyDown={handleKeyUp}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <StyledPopOverToggle
              data-menu={isSubMenu ? 'submenu': null}
              onClick={() => setIsOpen(!isOpen)}
              ref={ref}
              aria-label={a11yLabel}
              aria-haspopup={true}
              aria-expanded={isOpen}
              data-testid='popover-toggle'
            >
              {renderButton(isOpen)}
            </StyledPopOverToggle>
          )}
        </Reference>
        {
          isOpen && (
            <Popper placement={placement}>
              {({ ref, style, placement }) => (
                <StyledPopOverMenu
                  data-placement={placement}
                  onClick={(e: any) => closePopover(e)}
                  ref={ref}
                  style={style}
                >
                  {children}
                </StyledPopOverMenu>
              )}
            </Popper>
          )
        }
      </Manager>
    </span>
  );
};

export default PopOver;
