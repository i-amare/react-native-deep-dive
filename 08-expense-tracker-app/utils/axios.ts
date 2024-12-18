import Transaction from '@/classes/Transaction';
import axios from 'axios';

const DATABASE_URL =
  'https://react-native-course-proj-629e6-default-rtdb.europe-west1.firebasedatabase.app/';
const TRANSACTIONS_ENDPOINT = `${DATABASE_URL}/transactions.json`;

export const addTransaction = (transaction: Transaction) => {
  axios.post(TRANSACTIONS_ENDPOINT, transaction);
};

export const getTransactions = async () => {
	const response = await axios.get(TRANSACTIONS_ENDPOINT);
	return response.data;
};

export const setTransactions = () => {};
