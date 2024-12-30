import axios, { AxiosResponse } from 'axios';
import { FIREBASE_API_KEY } from '@env';

const FIREBASE_CONFIG = {
  API_KEY: FIREBASE_API_KEY,
  BASE_URL: 'https://identitytoolkit.googleapis.com/v1/accounts',
} as const;

interface AuthRequestData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

async function authenticateUser(
  endpoint: string,
  credentials: Omit<AuthRequestData, 'returnSecureToken'>,
): Promise<AxiosResponse> {
  const data: AuthRequestData = {
    ...credentials,
    returnSecureToken: true,
  };

  try {
    return await axios.post(
      `${FIREBASE_CONFIG.BASE_URL}:${endpoint}?key=${FIREBASE_CONFIG.API_KEY}`,
      data,
    );
  } catch (error) {
    return (error as any).response;
  }
}

export const createUser = (email: string, password: string) =>
  authenticateUser('signUp', { email, password });

export const signIn = (email: string, password: string) =>
  authenticateUser('signInWithPassword', { email, password });
