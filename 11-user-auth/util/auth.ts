import axios from 'axios';

const FIREBASE_API_KEY = 'AIzaSyA8V66KiW8rqN1_Mlax-CRTHJHX75346AU';
const SIGN_IN_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
const NEW_USER_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;

export const createUser = async (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  const response = await axios.post(NEW_USER_ENDPOINT, data);
  console.log(response);

  return response;
};

export const signIn = async (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  const response = await axios.post(SIGN_IN_ENDPOINT, data);
  console.log(response);

  return response;
};
