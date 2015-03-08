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

/*
On Test #1, I used (8700) as the original cost, (3.25) as the interest, and (3) years.
I got 282.75 in interest per year & 9548 as the total cost.

On Test #2, I used (6900) as the original cost, (4.9) as the interest, and (10) years.
I got 338.10 in interest per year & 10281 as the total cost.

On Test #3, I used (12500) as the original cost, (3.5) as the interest, and (15) years.
I got 437.50 in interest per year & 19062 as the total cost.
 */