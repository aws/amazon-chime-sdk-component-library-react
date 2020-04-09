import { useEffect, RefObject } from 'react';

export default function useClickOutside(ref: RefObject<HTMLElement>, onClickOutside: (e: MouseEvent) => void) {

  const isOutside = (e: MouseEvent) => {
    return !!ref.current && !ref.current.contains(e.target as HTMLElement);
  }

  const onMouseDown = (e: MouseEvent) => {
    if (isOutside(e)) {
      onClickOutside(e);
    }
  };

  useEffect(
    () => {
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('touchstart', onMouseDown);

      return () => {
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('touchstart', onMouseDown);
      };
    }
  );
}
