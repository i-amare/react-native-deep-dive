export type Account = {
  balance: number;
  transactionHistory: Transaction[];
};

export type Transaction = {
  id: string;
  name: string;
  description: string;
  category: string;
  amount: number;
  date: Date;
};
