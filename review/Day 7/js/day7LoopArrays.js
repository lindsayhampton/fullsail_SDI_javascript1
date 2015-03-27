/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Day 7 - Loop Arrays
 */

//alert("Testing 1, 2, 3...");

// Tell each member of the Scooby Doo gang that they solved a mystery

// Create an array of gang members
var names = ["Scooby Doo","Shaggy","Velma","Daphne","Fred"];

// Add Scrappy to the gang!
names.push("Scrappy");

// Create a for loop to cycle through the array
for(var i = 0; i<names.length; i++){

    // console.log each person
    console.log("You solved the case, "+names[i]+"!");
}



// Keep track of our bills and get the total and average.

var bills = [50, 10, 5, 20, 10, 60, 70];

// Create variables for total and average
var total = 0;
var average = 0;

for (var j=0; j < bills.length; j++){

    // Add each bill to the total
    total += bills[j];
}

console.log("The total is "+total);

average = total / bills.length;
console.log("The average is "+average);