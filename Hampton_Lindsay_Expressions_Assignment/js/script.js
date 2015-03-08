/*
 Lindsay Hampton
 Date
 Section 00
 Assignment
 */

// alert("Testing 1, 2, 3...");


// Calculating the total cost of your car loan

// How much does the car cost?
var origCost = prompt("What is the purchase price of the car?\n(Please leave out the dollar sign.)");

// What is the interest on the loan?
var loan = prompt("What is the yearly interest rate on your loan?");

//How many years will it take?
var years = prompt("In how many years will your loan be paid off?");

// Data collection
var input = [origCost,loan,years];
console.log("Your inputs were as follows: "+input);

// Calculations
var interest = loan /=100
// console.log(loan);
