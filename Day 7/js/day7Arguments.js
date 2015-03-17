/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Day 7 Arguments
 */

//alert("Testing 1, 2, 3...");

// Arguments - Goes into the functions - part of the function call
// Parameters - catch the arguments and in the function definition

// Create a function that calculates the area of a rectangle... again!
// Add in parameters
function calcArea(w,h){
    //var width =10;
    //var height =20;
    var area =w*h;
    console.log("The area is "+area);
}

// Call our function
// Add arguments to the function call
calcArea(10,20);
calcArea(20,40);

var width=prompt("Enter a width");
var height=prompt("Enter a height");
calcArea(width,height)

// Dog Years
function dogYears(humanAge){
    // Dog Years = human years * 7;
    var dogAge = humanAge*7;
    console.log("Your age in dog years is "+dogAge);
}

// Call the dog function
dogYears(4);
