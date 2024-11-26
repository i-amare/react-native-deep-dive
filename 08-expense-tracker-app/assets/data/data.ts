// create an array 100 of dummy expenses for my expense tracker app. the properties of each expenses must include a string id, a 4 - 8 word description, an amount, and a date
const expenseItems = [
  {
    description: 'Grocery shopping at the local market',
    name: 'Grocery',
    category: 'Food',
  },
  {
    description: 'Monthly subscription for streaming service',
    name: 'Streaming',
    category: 'Entertainment',
  },
  {
    description: 'Dinner at the new Italian restaurant',
    name: 'Italian Dinner',
    category: 'Food',
  },
  {
    description: 'Annual gym membership renewal',
    name: 'Gym Membership',
    category: 'Health',
  },
  {
    description: 'Office supplies for the home office',
    name: 'Office Supplies',
    category: 'Office',
  },
  {
    description: 'Weekend getaway trip to the mountains',
    name: 'Mountain Trip',
    category: 'Travel',
  },
  {
    description: 'Car maintenance and oil change',
    name: 'Car Maintenance',
    category: 'Automobile',
  },
  {
    description: 'Birthday gift for a close friend',
    name: 'Birthday Gift',
    category: 'Gifts',
  },
  {
    description: 'Electricity bill for the apartment',
    name: 'Electricity Bill',
    category: 'Utilities',
  },
  {
    description: 'New pair of running shoes',
    name: 'Running Shoes',
    category: 'Clothing',
  },
  {
    description: 'Concert tickets for the summer festival',
    name: 'Concert Tickets',
    category: 'Entertainment',
  },
  {
    description: 'Books for the upcoming semester',
    name: 'Books',
    category: 'Education',
  },
  {
    description: 'Coffee and pastries at the cafe',
    name: 'Cafe',
    category: 'Food',
  },
  {
    description: 'Online course for professional development',
    name: 'Online Course',
    category: 'Education',
  },
  {
    description: 'New furniture for the living room',
    name: 'Furniture',
    category: 'Home',
  },
  {
    description: 'Medical check-up and prescriptions',
    name: 'Medical Check-up',
    category: 'Health',
  },
  {
    description: 'Pet food and supplies',
    name: 'Pet Supplies',
    category: 'Pets',
  },
  {
    description: 'Clothing and accessories shopping',
    name: 'Clothing',
    category: 'Clothing',
  },
  {
    description: 'Home improvement and repairs',
    name: 'Home Improvement',
    category: 'Home',
  },
];

const getRandomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const generateRandomId = () => Math.random().toString(36).substr(2, 9);

const expenses = expenseItems.map(() => {
  const item = expenseItems[Math.floor(Math.random() * expenseItems.length)];
  return {
    id: generateRandomId(),
    name: item.name,
    description: item.description,
    category: item.category,
    amount: -parseFloat((Math.random() * 1000).toFixed(2)),
    date: getRandomDate(new Date(2020, 0, 1), new Date()),
  };
});

expenses.sort((a, b) => b.date.getTime() - a.date.getTime());

export default expenses;
