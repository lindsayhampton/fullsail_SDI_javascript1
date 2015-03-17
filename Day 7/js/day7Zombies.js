/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Day 7 - Zombies
 */

//alert("Testing 1, 2, 3...");

// ZOMBIE ATTACK!!!!
// We have accidentally created a zombie at Full Sail.
// A zombie can bite 4 people a day and turn them into zombies the next day.
// The CDC wants to know how many zombies there will be in 8 days?

// Givens that we know:
// How many zombies we have
var numZombies = 1;

// How many bites per zombie per day
var numBites = 4;

// Number of days that the CDC wants
var days = 8;

// Create for loop to calc zombie number
for (var i=1; i<=days; i++) {

    // How many NEW zombies are created every day
    var newZombies = numZombies * numBites;

    // Add the new zombies to our existing horde
    numZombies += newZombies;

    // console.log the results
    console.log("There are "+numZombies+" number of zombies on day #"+i+"!");
}

// How long will it take to get a million zombies

var numDays = 1;

while (numZombies<= 1000000) {

        // How many NEW zombies are created every day
        var newZombies = numZombies * numBites;

        // Add the new zombies to our existing horde
        numZombies += newZombies;

        // console.log the results
        console.log("There are " + numZombies + " number of zombies on day #" + numDays + "!");

        numDays++;
    }

    console.log("It will take "+(numDays)+" days to reach a million zombies.");