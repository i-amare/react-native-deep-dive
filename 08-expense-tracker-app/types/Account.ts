export interface Account {
	balance: number,
	transactionHistory: Transaction[],
}

export interface Transaction {
	id: string,
	name: string,
	description: string,
	category: string,
	amount: number,
	date: Date
}