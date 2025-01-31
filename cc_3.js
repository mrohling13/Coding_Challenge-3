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

