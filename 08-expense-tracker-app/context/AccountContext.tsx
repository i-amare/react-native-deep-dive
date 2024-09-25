import expenses from '@/assets/data/data';
import { Account, Transaction } from '@/types/Account';
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
  useEffect(() => {
    for (const expense of expenses) {
      addTransaction(expense);
    }
  }, []);

  const [balance, setBalance] = useState(1000);
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>(
    [],
  );

  function addTransaction(transaction: Transaction) {
    setTransactionHistory((prev) => [...prev, transaction]);
    setBalance((prevBalance) => (prevBalance -= transaction.amount));
  }

  function removeTransaction(transactionID: string) {
    setTransactionHistory((prev) =>
      prev.filter((val) => {
        if (val.id === transactionID) {
          setBalance((prevBalance) => (prevBalance += val.amount));
          return false;
        }
        return true;
      }),
    );
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
