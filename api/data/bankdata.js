const dashboard = {
  customerId: 'CUST101',
  customerName: 'Megha Kulkarni',
  totalBalance: 845500,
  income: 95000,
  expenses: 45200,
  savings: 49800
};

const transactions = [
  {
    id: 1,
    date: '2026-10-02',
    description: 'Salary',
    category: 'Income',
    amount: 95000,
    type: 'credit'
  },
  {
    id: 2,
    date: '2026-10-01',
    description: 'Amazon',
    category: 'Shopping',
    amount: 4500,
    type: 'debit'
  },
  {
    id: 3,
    date: '2026-09-30',
    description: 'Electricity Bill',
    category: 'Bills',
    amount: 2200,
    type: 'debit'
  },
  {
    id: 4,
    date: '2026-09-28',
    description: 'Grocery Store',
    category: 'Food',
    amount: 3500,
    type: 'debit'
  },
  {
    id: 5,
    date: '2026-09-25',
    description: 'Freelance Payment',
    category: 'Income',
    amount: 25000,
    type: 'credit'
  },
  {
    id: 6,
    date: '2026-09-22',
    description: 'Netflix',
    category: 'Entertainment',
    amount: 649,
    type: 'debit'
  }
];

const profile = {
  id: 'CUST101',
  fullName: 'Megha Kulkarni',
  email: 'megha@example.com',
  phone: '+91 98765 43210',
  location: 'Hyderabad',
  occupation: 'Angular Developer'
};

module.exports = {
  dashboard,
  transactions,
  profile
};