export interface Account {
	balance: number,
	transactionHistory: Transaction[],
}

export interface Transaction {
	id: string,
	description: string,
	amount: number,
	date: Date
}