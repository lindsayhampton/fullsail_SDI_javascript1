/*
 Lindsay Hampton
 March 7, 2015
 Section 00
 Day 3 - Prompts
 */

//alert("Testing 1, 2, 3...");

// Ask the user for input
// Prompt("Text that the user will see");


do {
    var userInput = prompt("Enter year of birth:");
} while (userInput ==="" || isNaN(userInput));

console.log(userInput);

// Calculating the area of a rectangle
// Length*Width

// Prompt the user for the width & height
do {
    var length = prompt("Let's calculate the area of a rectangle! \nPlease enter the rectangle's length:");
} while (length ==="" || isNaN(length));
do {
    var width = prompt("Please enter the rectangle's width:");
} while (width === "" || isNaN(width));
// Calculate the area

function area(l, w) {
    var area =l*w
    return area;
}
//Tell the user the answer
console.log("The area of a rectangle with a length of "+length+" and a width of "+width+" is "+area(length,width)+".");
