/*
    Lindsay Hampton
    March 5, 2015
    Section 00
    Day 2 Lab Assignment
 */

//alert("Testing 1, 2, 3...");

// Slices of Pie pt. 1

    // Number of people at the party
var numPartygoers = 10;

    // Number of pizzas ordered
var numPizza = 5;

    // Number of slices per pizza
var numTotalSlices = 8;

    // Number of slices per person
var numSlices = (numPizza * numTotalSlices)/ numPartygoers;
console.log("Each person at the party will recieve "+numSlices+" slices of pizza.");

// Slices of Pie pt. 2

    //Number of slices for Sparky
var sparkySlice = (numPizza * numTotalSlices)% numPartygoers;
console.log("Sparky gets to eat "+sparkySlice+" slices of pizza.")
console.log("Poor Sparky got excited for nothing.")

// Average shopping bill

    //Costs of groceries per week
var week1 = (113);
var week2 = (167);
var week3 = (98);
var week4 = (125);
var week5 = (104);

    // Total amount over 5 weeks
var totalNum = week1+week2+week3+week4+week5;
console.log("The total amount spent on groceries over five weeks is $"+totalNum);

    // Average $$$ spent per week
var average = totalNum / 5;
console.log("The average amount spent on groceries per week is $"+average);

// Discounts

    // Item Description
var item = "a Cardigan Welsh Corgi puppy";

    // Original Price
var origPrice = 1250;

    // Percentage off
var discount2 = 15
var discount = discount2/100;

    // Sales tax
var salesTax2 = 6;
var salesTax = salesTax2/100;

    // New price w/o tax
var price1 = origPrice-(origPrice*discount);

    // New price with tax
var price2 = (price1*salesTax)+price1;

console.log("The price of "+item+" was originally $"+origPrice+", but with your discount of "+discount2+"% the new total will be $"+price1+" before sales tax and $"+price2+" after tax.");