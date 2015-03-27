/*
 Lindsay Hampton
 March 10, 2015
 Section 00
 Day 4 - Logical
 */

//alert("Testing 1, 2, 3...");

// Basic conditional, if we have enough to buy a car

// Create a few variables
var budget = 25000;
var carPrice = 23000;
var payCheck = 1600;

if(budget >= carPrice){
console.log("You can afford to buy this car!");
} else {
    console.log("You are broke! Take the bus!");
}

// We can buy the car if our budget is greater than or equal to the car price OR our paycheck is more than $1500.

if(budget >= carPrice || payCheck >1500){
    console.log("You can afford to buy this car!");
} else {
    console.log("You are broke! Take the bus!");
}

/*
Truth table for || "Or"
T || T = T
T || F = T
F || T = T
F || F = F
 */

/*
True table for && "And"
T && T = T
T && F = F
F && T = F
F && F = F
 */

// You can buy a car if the budget is greater than or equal to the car price AND your paycheck is over 1500.

if (budget >= carPrice && payCheck > 1500){
    console.log("You can buy the car!");
} else {
    console.log("Pick a cheaper car or find a better job!");
}
