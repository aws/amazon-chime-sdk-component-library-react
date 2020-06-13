import { useState } from 'react';

type UseToggleFunc = {
  isTrue: boolean;
  toggleIsTrue: () => void;
};

export default function useToggle(initialState: boolean): UseToggleFunc {
  const [isTrue, setIsTrue] = useState(initialState);

  function toggleIsTrue(): void {
    setIsTrue(!isTrue);
  }

  return {
    isTrue,
    toggleIsTrue,
  };
}
