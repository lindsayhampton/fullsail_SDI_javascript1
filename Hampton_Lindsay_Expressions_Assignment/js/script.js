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
var loan = prompt("What is the yearly interest rate on your loan?\n(Please leave out the percentage sign.)");

//How many years will it take?
var years = prompt("In how many years will your loan be paid off?");

// Data collection
var input = [parseInt(origCost),loan,parseInt(years)];
console.log("Your inputs were as follows: "+input);

// Calculations
input[1] /=100;
var decimalInterest = input[1];
// console.log(decimalInterest);

// Calculating interest paid per year
var interestPerYear = decimalInterest*input[0];
console.log("According to the inputs you've submitted, you will be paying $"+interestPerYear+" in interest per year.");

// Calculating total amount paid
var totalInterest = interestPerYear*input[2];
var totalCost = input[0]+parseInt(totalInterest);
console.log("The total amount you will pay through this loan is $"+totalCost+".");

