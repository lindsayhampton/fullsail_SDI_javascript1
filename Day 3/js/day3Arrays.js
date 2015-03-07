/*
 Lindsay Hampton
 March 7, 2015
 Section 00
 Day 3 - Arrays
 */

//alert("Testing 1, 2, 3...");

// Create a basic array
var avengersNames = ["Thor", "Hulk", "Iron Man", "Captain America"];

// Print out whole array
console.log(avengersNames);

// Print out one specific item in the array
console.log(avengersNames[2]);

// Swap items in an array
avengersNames[1] = "Black Widow";
console.log(avengersNames[1]);

// Use a variable for the index number
var num = 3;
console.log(avengersNames[num]);

// Find the length of an array
// Length property - how many items are in the array.
// Dot syntax - fancy use of a .
console.log(avengersNames.length);

// Add an item to our array
avengersNames[4] = "Hawkeye";
avengersNames[avengersNames.length] = "Wolverine";
console.log(avengersNames);


// Picking Oranges
var orangesPicked = [13, 350, 1000];

// How many oranges did we pick in total?
var totalOranges = orangesPicked[0] + orangesPicked[1] + orangesPicked[2];
console.log("The total number of oranges picked is "+totalOranges+".");

var averageOranges = totalOranges/3;
console.log("The average number of oranges picked per day is "+averageOranges+".");

// Create an array of fruit
var fruitBowl = ["apple", "mango", "grape", "banana"];
console.log(fruitBowl);

// Push - add items in to the next open spot
// Dot syntax used - .
fruitBowl.push("strawberry");
console.log(fruitBowl);
fruitBowl.push("pineapple");
console.log(fruitBowl);

// Pop() - removes the last item from the array
var caughtItem = fruitBowl.pop();
var caughtStrawberry = fruitBowl.pop();

console.log(fruitBowl);
console.log(caughtItem);
console.log(caughtStrawberry);

