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

