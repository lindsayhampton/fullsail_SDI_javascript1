/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Day 7 - Scope
 */

// alert("Testing 1, 2, 3...");

// Variable scope
// Variables inside and outside of a function

// Try not to use the same variable names, BUT
// in big files, this will be impossible!

// Create a variable for width in our MAIN CODE
// Scoped outside of the function - "Main Code"
var width = 5;

// Create a function that calculates the perimeter of a rectangle
function calcPeri(){
    // Create a variable called width inside of the function
    // Scoped to the function calcPeri

    var width = 10;

    // Create a variable for height / perimeter
    var height = 20;
    var perimeter = height*2 + width*2;

    console.log("Inside of the function, the perimeter is "+perimeter);

    // Variables created inside of a function can NOT be accessed outside of the function.
    // Variables created outside of a function CAN be accessed inside of a function, but usually will not be.
}
console.log("Before the function call, width = "+width);

// function call the calcPeri
calcPeri();
console.log("After the function call, width = "+width);

// console.log out the answer
// THIS DOES NOT WORK. Think VEGAS.
// console.log("Outside of the function, the perimeter is "+perimeter);