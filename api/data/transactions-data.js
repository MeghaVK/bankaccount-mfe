const descriptions = [
    'Amazon Purchase',
    'Flipkart Purchase',
    'Salary Credit',
    'UPI Payment',
    'Electricity Bill',
    'Mobile Recharge',
    'Netflix Subscription',
    'Grocery Shopping',
    'Restaurant Payment',
    'ATM Withdrawal',
    'Online Transfer',
    'Insurance Premium',
    'Fuel Payment',
    'Interest Credit',
    'Rent Payment',
    'Credit Card Payment',
    'Flight Booking',
    'Hotel Booking',
    'Medical Payment',
    'Investment Transfer'
];


const categories = [
    'Shopping',
    'Salary',
    'Bills',
    'Food',
    'Entertainment',
    'Transport',
    'Healthcare',
    'Investment',
    'Transfer',
    'Utilities'
];



const ttypes = ['credit', 'debit'];

const statuses = [
    'completed',
    'completed',
    'completed',
    'pending',
    'pending'
];

function randomItems(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function randomAmout(type) {
    if (type == 'credit') {
        return Math.floor(Math.random() * 9000 + 1000)
    }

    return Math.floor(Math.random() * 15000 + 100)
}

function randomDate() {

    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 180);
    const date = new Date(now);
    date.setDate(date.getDate() - daysAgo);
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));
    return date.toISOString();

}

const transactions = Array.from(

    { length: 5000 },
    (_, index) => {
        const types = randomItems(ttypes);

        return {

            id: `TXN${String(index + 1).padStart(5, '0')}`,
            date: randomDate(),
            descriptions: randomItems(descriptions),
            types,
            category: randomItems(categories),
            amount: randomAmout(types),
            status: randomItems(statuses)

        }

    }


);

module.exports=transactions;
