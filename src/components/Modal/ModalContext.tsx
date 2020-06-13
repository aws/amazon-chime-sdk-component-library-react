import { createContext, useContext } from 'react';

export const ModalContext = createContext({
  onClose() {},
  labelID: '',
});

export const useModalContext = () => {
  return useContext(ModalContext);
}

export default ModalContext;
