/*
 Lindsay Hampton
 March 10, 2015
 Section 00
 Day 4 - Conditionals
 */

//alert("Testing 1, 2, 3...");

// Basic Conditional
/*
if(condition to test) {

}
 */

// Create a boolean variable
var oldEnough = false;

// If the kid is old enough, he can ride the ride.

if(oldEnough){
    // Code to run if the kid is old enough
    console.log("The kid is old enough to ride the roller coaster.");
} else {
    // Code to run if the kid is NOT old enough
    console.log("Sorry, you are too young to ride this ride.");
}

// Relational Operators

// If the kid is over 48 inches tall, then he can ride the rollercoaster.
var kidHeight = 57;

// Create a variable for min height requirements
var minHeight = 48;

// Create a variable for sneaker lifts
var sneakerLifts = 2;

// Test the kids height

if(kidHeight > minHeight){
    console.log("Yes, the kid is tall enough to ride this coaster!");
} else if (kidHeight+sneakerLifts > minHeight){
    console.log("If you use enough napkins, you can ride the ride.");
} else {
    console.log("Sorry, you are not tall enough to ride this ride.");
}