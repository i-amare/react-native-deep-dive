import axios from 'axios';

const SIGN_IN_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`;

const NEW_USER_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8V66KiW8rqN1_Mlax-CRTHJHX75346AU`;

export const createUser = async (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  console.log({
    url: NEW_USER_ENDPOINT,
    data: data,
  });

  const response = await axios.post(NEW_USER_ENDPOINT, data);

  console.log(response);

  return response;
};
