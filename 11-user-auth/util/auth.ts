import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse } from 'axios';

const FIREBASE_CONFIG = {
  API_KEY: 'AIzaSyA8V66KiW8rqN1_Mlax-CRTHJHX75346AU',
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

export const storeAuthToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (e) {
    console.error(e);
  }
};

export const loadAuthToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (e) {
    console.error(e);
    return null;
  }
};
