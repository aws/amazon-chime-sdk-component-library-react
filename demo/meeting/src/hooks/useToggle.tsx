import { useState } from 'react';

type UseToggleFunc = {
  isActive: boolean;
  toggle: () => void;
};

export default function useToggle(initialState: boolean): UseToggleFunc {
  const [isActive, setIsActive] = useState(initialState);

  function toggle(): void {
    setIsActive(!isActive);
  }

  return {
    isActive,
    toggle,
  };
}
