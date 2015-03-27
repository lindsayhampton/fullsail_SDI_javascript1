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


do {
    var day1 = prompt("Lets find out how many oranges you picked this week!\nHow many oranges did you pick on day 1?\nPlease do not leave blank & only use numbers.")
} while(day1==="" || isNaN(day1));
day1 = parseInt(day1);

do {
    var day2 = prompt("How many oranges did you pick on day 2?\nPlease do not leave blank & only use numbers.");
} while(day2==="" || isNaN(day2));
day2 = parseInt(day2);

do {
    var day3 = prompt("How many oranges did you pick on day 3?\nPlease do not leave blank & only use numbers.");
} while(day3==="" || isNaN(day3));
day3 = parseInt(day3);






// Picking Oranges
var orangesPicked = [day1, day2, day3];

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

