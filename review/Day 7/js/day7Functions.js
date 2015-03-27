/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Day 7 - Functions
 */

// Function call the function before it is defined in our code.
printHello()

//alert("Testing 1, 2, 3...");

// Basic structure of a function
// function functionName(){codetorun}

// Create a function that will console.log out hello
function printHello(){
    console.log("Hello and howdy!")
}

// Create a function that prints out more text
function printMore(){
    console.log("Print more text!");
}

// Function call the printHello function
// functionName();
printHello();
printMore();
printHello();

// Function call the printMore
printMore();

// Create a function that calculates the area of a rectangle
function calcArea(){

    // Create variables for width, height, and area
    var width = 20;
    var height = 30;
    var area = width*height;

    // Print out the area
    console.log("The area is "+area);
}

calcArea();