import { createUser, signIn } from '@/util/auth';
import { createContext, useEffect, useState } from 'react';

export interface AuthType {
  isAuthenticated: boolean;
  signInUser: (email: string, password: string) => void;
  createNewUser: (
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => void;
  authenticate: () => void;
}

export const defaultAuthContext: AuthType = {
  isAuthenticated: false,
  signInUser: () => {},
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
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    console.log(`Auth State has changed to: ${isAuthenticated}`);
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(`Auth Token has changed to: ${authToken}`);
    // setIsAuthenticated(authToken ? true : false);
  }, [authToken]);

  const authenticate = () => {
    setIsAuthenticated(true);
  };

  const signInUser = async (email: string, password: string) => {
    const response = await signIn(email, password);

    if (response.status === 200) {
      setIsAuthenticated(true);
      setAuthToken(response.data.idToken);
      console.log('User logged in successfully');
    } else {
      alert(response.data.error.message);
    }
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
    } else {
      alert(response.data.error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signInUser: signInUser,
        createNewUser,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
