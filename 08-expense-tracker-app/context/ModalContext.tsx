import { createContext, Dispatch, SetStateAction, useState } from 'react';

export type ModalContextType = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>> | null;
  toggleVisibility: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isVisible: false,
  setIsVisible: null,
  toggleVisibility: () => {},
});

export default function ModalContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <ModalContext.Provider
      value={{
        isVisible: isVisible,
        setIsVisible: setIsVisible,
        toggleVisibility: toggleVisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
