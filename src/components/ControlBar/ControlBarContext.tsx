import { createContext, useContext } from 'react';

import { ControlBarProps } from '.';

const ControlBarContext = createContext<ControlBarProps>({
  showLabels: false,
  layout: 'top',
});

export const useControlBarContext = () => {
  return useContext(ControlBarContext);
}

export default ControlBarContext;