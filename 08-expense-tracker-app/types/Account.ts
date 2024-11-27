import Transaction from "@/classes/Transaction";

export type Account = {
  balance: number;
  transactionHistory: Transaction[];
};