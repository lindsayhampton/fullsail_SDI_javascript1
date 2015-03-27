/*
 Lindsay Hampton
 March 26, 2015
 Section 00
 Day 9 - Pizza
 */

//alert("Testing 1, 2, 3...");

// How much pizza costs per slice and the cost per sq inch

// Prompt the user for the radius of the pizza

var pizzaRadius = prompt("Welcome, lets calculate the cost of your pizza. \nWhat is the radius of your pizza?");

//validate w/ while loop
while (pizzaRadius==="" || isNaN(pizzaRadius)){
    pizzaRadius = prompt("Please do not leave blank & only use numbers.\nWhat is the radius of your pizza?");
}

// Prompt the user for cost of whole pizza.
do {
    var pizzaCost = prompt("How much does your pizza cost in total?");
} while(pizzaCost==="" || isNaN(pizzaCost));

// Prompt the user for how many slices are in their pizza

do{
    var pizzaSlices = prompt("How many slices are in your pizza?\nReminder: Only use numbers and do not leave blank.");
} while (pizzaSlices==="" || isNaN(pizzaSlices));


// Function call to lord function
var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);




// Create a function to run all of the other functions
function lordFunction(radius, cost, slices){
    // Function will call the other 3 functions and then return their values.

    // Call the area function & capture the answer
    var area = pizzaArea(radius);

    // Call the function sqIn cost
    var areaCost = pizzaSqInCost(area, cost);

    //Call the slice price
    var slicePrice = pricePerSlice(slices, cost);

    // Return these answers to our main code.
    return [areaCost, slicePrice]
}

console.log("Your pizza costs $"+results[0]+" per sq. inch or $"+results[1]+" per slice.");





// Function that calculates the area of the pizza

function pizzaArea(r){
    // Area = r*r*pi
    var area = r*r*Math.PI;
    return area;
}

// FUnction that calculates the price per sq in of pizza
function pizzaSqInCost(area,price){
    // price/area
    var costSqIn = price/area

    // round to 2 decimal places
    costSqIn = costSqIn.toFixed(2);
    return costSqIn;
}

// Function that calculates the price per slice
function pricePerSlice(slices,price){
    var costPerSlice = price/slices;
    costPerSlice = costPerSlice.toFixed(2);
    return costPerSlice;
}

