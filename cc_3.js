// Task 1: Product Price Management 
let prices = [100, 200, 300, 400, 500]; // Array with 5 prices
prices.push(600); // Adding my new price
prices.shift(); // Removing the first price from the array
console.log('Updated Price List:', prices); // Print Statement

// Task 2: Modifying Customer Orders
let orders = [5, 10, 15, 20, 25]; // Array with 5 order quantities
orders[2] += 5; // Increasing the 3rd order quantity by 5
let totalorders = orders.reduce((sum, quantity) => sum + quantity, 0); // Calculating total orders
console.log('Updated Orders:', orders); // Print statement 
console.log('Total Order Count:', totalorders); // Print Statement

// Task 3: Employee Performance Tracking
let employee = {
    name: 'Sasuke Uchiha',
    role: 'Developer',
    performanceScore: 93,
    isActive: true,
};
employee.performanceScore = 99; // Updating performance score
employee.promotionEligible = employee.performanceScore > 80; // Adding promotion eligible property
console.log('Updated Employee Object:', employee); 

// Task 4: Customer Feedback Records
let feedback = [
    { customerName: 'Joe', feedbackText: 'Great service was provided!', rating: 5}, // Inputting Customer Lore
    { customerName: 'Mike', feedbackText: 'Impeccable service!! Will come back!', rating: 5},
    { customerName: 'Kendoge', feedbackText: 'Wouldnt recommend :(', rating: 2},
];
feedback.push({
    customerName: 'Future',
    feedbackText: 'Best service in the city!', // Adding a new customer
    rating: 5,
});
console.log('Feedback List:', feedback); // Print Statement

// Task 5: Inventory Management System
let inventory = {
    itemName: 'Rick Owens',
    stockCount: 100,
    price: 990,
    calculateTotalValue: function () {
        return this.stockCount * this.price;
    },
};
console.log('Inventory Details:', inventory);
console.log('Total Inventory Value:', inventory.calculateTotalValue());