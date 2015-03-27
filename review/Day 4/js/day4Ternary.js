/*
 Lindsay Hampton
 March 10, 2015
 Section 00
 Day 4 - Ternary
 */

//alert("Testing 1, 2, 3...");

// If your GPA is over 2.0 then you can graduate.

// Create a variable for GPA
var gpa = 3.5;

// Basic conditional
if (gpa > 2.0){
    console.log("Hey look you actually tried. You can graduate!");
} else {
    console.log("Wow you suck go back to school.");
}

// (condition to test) ? code to run if true : code to run if false;

// Create a basic ternary function for our GPA
(gpa > 2.0) ? console.log("Hey look you actually tried. You can graduate!") : console.log("Wow you suck go back to school.");

// If a child is under 10, then they must read Green Eggs & Ham, otherwise they can read the Time Machine

// Create a variable for child age & for the book they must read
var age = 16
var book;

// Use a ternary to define the book

book = (age < 10) ? "Green Eggs and Ham" : "the Time Machine";

console.log("The child is "+age+" years old, so they must read "+book+".");

// Value of book if basic conditional

var bookBasic;

if(age<10){
    bookBasic = "Green Eggs and Ham"
} else {
    bookBasic = "the Time Machine"
}

console.log(bookBasic);