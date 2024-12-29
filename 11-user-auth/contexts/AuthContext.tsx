import { createUser } from '@/util/auth';
import { createContext, useEffect, useState } from 'react';

export interface AuthType {
  isAuthenticated: boolean;
  createNewUser: (
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => void;
  authenticate: () => void;
}

export const defaultAuthContext: AuthType = {
  isAuthenticated: false,
  createNewUser: () => {},
  authenticate: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log(`Auth State has changed to: ${isAuthenticated}`);
  }, [isAuthenticated]);

  const authenticate = () => {
    setIsAuthenticated(true);
  };

  const createNewUser = async (
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => {
    if (password !== passwordConfirmation) {
      alert('Passwords do not match');
      return;
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    const response = await createUser(email, password);

    if (response.status === 200) {
      setIsAuthenticated(true);
      console.log('User created successfully');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        createNewUser,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
