/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Day 7 Returns
 */

//alert("Testing 1, 2, 3...");

// Return a value from our function to our main code.

// Create a function to calculate the area of a rectangle
function calcArea (w,h){
    // Calculate the area
    var area = w*h;
    console.log("Inside the function the area is "+area);
    // Retunr the area to the main code
    return area;
}

// Call the function
// Create a variable to catch the returned value
var rectArea = calcArea(10,20);

// Console.log the area
// console.log(area);
console.log(rectArea);


// Create a function to calc the area of a circle
function circleArea(r){
    //Calc area pi*r*r
    var area = Math.PI*r*r;
    // return the value
    return area;
}

// Function call this circleArea
// Create a variable to catch the returned area
var circArea = circleArea(6);

//console.log the results
console.log("The area of this circle is "+circArea);

// What is twice the circle area of a 6" circle
var resultsTwice = circArea*2;
console.log("Twice the area of this circle is "+resultsTwice);
