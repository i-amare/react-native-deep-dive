import Transaction from '@/classes/Transaction';
import { Account } from '@/types/Account';
import {
  deleteTransaction,
  getTransactions,
  addTransaction as postTransaction,
} from '@/utils/axios';
import { createContext, useEffect, useState } from 'react';

export type AccountContextType = Account & {
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (transactionID: string) => void;
};

export const AccountContext = createContext<AccountContextType>({
  balance: 0,
  transactionHistory: [],
  addTransaction: (transaction: Transaction) => {},
  removeTransaction: (transactionID: string) => {},
});

export function AccountContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [balance, setBalance] = useState(10000);
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>(
    [],
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await getTransactions();
    if (transactionHistory.length > 0) return;
    Object.keys(response).forEach((key) => {
      const val = response[key];
      const transaction = new Transaction(val.amount, new Date(val.date), key);
      setTransactionHistory((prev) => [transaction, ...prev]);
      setBalance((prevBalance) => prevBalance + transaction.amount);
    });
  };

  function addTransaction(transaction: Transaction) {
    setTransactionHistory((prev) => [transaction, ...prev]);
    setBalance((prevBalance) => (prevBalance += transaction.amount));
    postTransaction(transaction);
  }

  function removeTransaction(transactionID: string) {
    setTransactionHistory((prev) =>
      prev.filter((val) => {
        if (val.id === transactionID) {
          setBalance((prevBalance) => (prevBalance -= val.amount));
          return false;
        }
        return true;
      }),
    );
    deleteTransaction(transactionID);
  }

  return (
    <AccountContext.Provider
      value={{
        balance: balance,
        transactionHistory: transactionHistory,
        addTransaction: addTransaction,
        removeTransaction: removeTransaction,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
