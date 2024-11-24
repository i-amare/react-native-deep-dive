import { createContext, useState } from 'react';

export type NavigationContextType = {
  setIsVisible: (value: boolean) => void;
  isVisible: boolean;
};

export const defaultNavigationContext: NavigationContextType = {
  setIsVisible: (value: boolean) => {},
  isVisible: true,
};

export const NavigationContext = createContext<NavigationContextType>(
  defaultNavigationContext,
);

export function NavigationContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <NavigationContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavigationContext.Provider>
  );
}
