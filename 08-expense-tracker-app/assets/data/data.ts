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
  {
    description: 'Tickets for the movie premiere',
    name: 'Movie Tickets',
    category: 'Entertainment',
  },
  {
    description: 'Monthly internet service bill',
    name: 'Internet Bill',
    category: 'Utilities',
  },
  {
    description: 'Donation to the local charity',
    name: 'Charity Donation',
    category: 'Charity',
  },
  {
    description: 'Taxi fare for the airport',
    name: 'Taxi Fare',
    category: 'Travel',
  },
  {
    description: 'New smartphone purchase',
    name: 'Smartphone',
    category: 'Electronics',
  },
  {
    description: 'Groceries for the week',
    name: 'Weekly Groceries',
    category: 'Food',
  },
  {
    description: 'Dinner date at a fancy restaurant',
    name: 'Fancy Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a fitness app',
    name: 'Fitness App',
    category: 'Health',
  },
  {
    description: 'Weekend road trip expenses',
    name: 'Road Trip',
    category: 'Travel',
  },
  {
    description: 'Annual car insurance payment',
    name: 'Car Insurance',
    category: 'Automobile',
  },
  {
    description: 'New laptop for work',
    name: 'Laptop',
    category: 'Electronics',
  },
  {
    description: 'Monthly water bill',
    name: 'Water Bill',
    category: 'Utilities',
  },
  {
    description: 'Tickets to the amusement park',
    name: 'Amusement Park',
    category: 'Entertainment',
  },
  {
    description: 'New bicycle for commuting',
    name: 'Bicycle',
    category: 'Transportation',
  },
  {
    description: 'Gifts for the holiday season',
    name: 'Holiday Gifts',
    category: 'Gifts',
  },
  {
    description: 'Spa day and relaxation',
    name: 'Spa Day',
    category: 'Health',
  },
  {
    description: 'New kitchen appliances',
    name: 'Kitchen Appliances',
    category: 'Home',
  },
  { description: 'Monthly rent payment', name: 'Rent', category: 'Housing' },
  {
    description: 'Gasoline for the car',
    name: 'Gasoline',
    category: 'Automobile',
  },
  {
    description: 'New wardrobe for the season',
    name: 'Wardrobe',
    category: 'Clothing',
  },
  {
    description: 'Tickets to a sports event',
    name: 'Sports Tickets',
    category: 'Entertainment',
  },
  {
    description: 'New headphones for music',
    name: 'Headphones',
    category: 'Electronics',
  },
  {
    description: 'Groceries and household items',
    name: 'Household Groceries',
    category: 'Food',
  },
  {
    description: 'Dinner with family at a restaurant',
    name: 'Family Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a magazine',
    name: 'Magazine',
    category: 'Entertainment',
  },
  {
    description: 'Weekend camping trip',
    name: 'Camping Trip',
    category: 'Travel',
  },
  {
    description: 'New gaming console',
    name: 'Gaming Console',
    category: 'Electronics',
  },
  {
    description: 'Monthly phone bill',
    name: 'Phone Bill',
    category: 'Utilities',
  },
  {
    description: 'Tickets to a theater play',
    name: 'Theater Tickets',
    category: 'Entertainment',
  },
  {
    description: 'New tablet for reading',
    name: 'Tablet',
    category: 'Electronics',
  },
  {
    description: 'Groceries for the month',
    name: 'Monthly Groceries',
    category: 'Food',
  },
  {
    description: 'Dinner at a sushi restaurant',
    name: 'Sushi Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a news service',
    name: 'News Service',
    category: 'Entertainment',
  },
  { description: 'Weekend beach trip', name: 'Beach Trip', category: 'Travel' },
  {
    description: 'New smartwatch',
    name: 'Smartwatch',
    category: 'Electronics',
  },
  {
    description: 'Monthly cable TV bill',
    name: 'Cable TV Bill',
    category: 'Utilities',
  },
  {
    description: 'Tickets to a comedy show',
    name: 'Comedy Show',
    category: 'Entertainment',
  },
  {
    description: 'New backpack for hiking',
    name: 'Backpack',
    category: 'Travel',
  },
  { description: 'Groceries and snacks', name: 'Snacks', category: 'Food' },
  {
    description: 'Dinner at a steakhouse',
    name: 'Steakhouse Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a music service',
    name: 'Music Service',
    category: 'Entertainment',
  },
  { description: 'Weekend city tour', name: 'City Tour', category: 'Travel' },
  {
    description: 'New camera for photography',
    name: 'Camera',
    category: 'Electronics',
  },
  {
    description: 'Monthly gym membership',
    name: 'Gym Membership',
    category: 'Health',
  },
  {
    description: 'Tickets to a concert',
    name: 'Concert Tickets',
    category: 'Entertainment',
  },
  {
    description: 'New shoes for work',
    name: 'Work Shoes',
    category: 'Clothing',
  },
  {
    description: 'Groceries and beverages',
    name: 'Beverages',
    category: 'Food',
  },
  {
    description: 'Dinner at a seafood restaurant',
    name: 'Seafood Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a book club',
    name: 'Book Club',
    category: 'Entertainment',
  },
  {
    description: 'Weekend fishing trip',
    name: 'Fishing Trip',
    category: 'Travel',
  },
  {
    description: 'New laptop bag',
    name: 'Laptop Bag',
    category: 'Accessories',
  },
  {
    description: 'Monthly electricity bill',
    name: 'Electricity Bill',
    category: 'Utilities',
  },
  {
    description: 'Tickets to a ballet performance',
    name: 'Ballet Tickets',
    category: 'Entertainment',
  },
  {
    description: 'New fitness tracker',
    name: 'Fitness Tracker',
    category: 'Electronics',
  },
  {
    description: 'Groceries and fresh produce',
    name: 'Fresh Produce',
    category: 'Food',
  },
  {
    description: 'Dinner at a Mexican restaurant',
    name: 'Mexican Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a cooking class',
    name: 'Cooking Class',
    category: 'Education',
  },
  {
    description: 'Weekend hiking trip',
    name: 'Hiking Trip',
    category: 'Travel',
  },
  { description: 'New office chair', name: 'Office Chair', category: 'Office' },
  { description: 'Monthly gas bill', name: 'Gas Bill', category: 'Utilities' },
  {
    description: 'Tickets to a magic show',
    name: 'Magic Show',
    category: 'Entertainment',
  },
  {
    description: 'New sunglasses',
    name: 'Sunglasses',
    category: 'Accessories',
  },
  {
    description: 'Groceries and cleaning supplies',
    name: 'Cleaning Supplies',
    category: 'Home',
  },
  {
    description: 'Dinner at a French restaurant',
    name: 'French Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a language course',
    name: 'Language Course',
    category: 'Education',
  },
  {
    description: 'Weekend skiing trip',
    name: 'Skiing Trip',
    category: 'Travel',
  },
  { description: 'New winter coat', name: 'Winter Coat', category: 'Clothing' },
  {
    description: 'Monthly trash collection bill',
    name: 'Trash Bill',
    category: 'Utilities',
  },
  {
    description: 'Tickets to a circus show',
    name: 'Circus Tickets',
    category: 'Entertainment',
  },
  { description: 'New yoga mat', name: 'Yoga Mat', category: 'Health' },
  {
    description: 'Groceries and dairy products',
    name: 'Dairy Products',
    category: 'Food',
  },
  {
    description: 'Dinner at a vegan restaurant',
    name: 'Vegan Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a gardening magazine',
    name: 'Gardening Magazine',
    category: 'Entertainment',
  },
  {
    description: 'Weekend wine tasting tour',
    name: 'Wine Tasting',
    category: 'Travel',
  },
  {
    description: 'New blender for the kitchen',
    name: 'Blender',
    category: 'Home',
  },
  {
    description: 'Monthly parking fee',
    name: 'Parking Fee',
    category: 'Transportation',
  },
  {
    description: 'Tickets to a jazz concert',
    name: 'Jazz Concert',
    category: 'Entertainment',
  },
  {
    description: 'New hiking boots',
    name: 'Hiking Boots',
    category: 'Clothing',
  },
  {
    description: 'Groceries and frozen foods',
    name: 'Frozen Foods',
    category: 'Food',
  },
  {
    description: 'Dinner at a barbecue restaurant',
    name: 'Barbecue Dinner',
    category: 'Food',
  },
  {
    description: 'Subscription to a travel magazine',
    name: 'Travel Magazine',
    category: 'Entertainment',
  },
  {
    description: 'Weekend spa retreat',
    name: 'Spa Retreat',
    category: 'Health',
  },
  { description: 'New coffee maker', name: 'Coffee Maker', category: 'Home' },
];

const getRandomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const generateRandomId = () => Math.random().toString(36).substr(2, 9);

const expenses = Array.from({ length: 100 }, () => {
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
