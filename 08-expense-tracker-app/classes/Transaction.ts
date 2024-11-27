export default class Transaction {
  id: string;
  name: string;
  description: string;
  category: string;
  amount: number;
  date: Date;

  constructor(
    amount: number = 0,
    date: Date = new Date(Date.now()),
    id: string = Math.random().toString(36),
    name: string = '',
    description: string = '',
    category: string = '',
  ) {
    this.amount = amount;
    this.date = date;
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
  }
}
