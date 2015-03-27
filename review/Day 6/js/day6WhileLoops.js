/*
 Lindsay Hampton
 March 14, 2015
 Section 00
 Day 6 While Loops
 */

//alert("Testing 1, 2, 3...");

// Basic While Loop

// Initialize a counter variable
var counter = 0;

// Start the while loop
// Condition to test goes inside of ()
while(counter<200){
    console.log("Some things never end!");
    console.log(counter);

    // Change the counter variable to avoid an infinite loop
    counter+=50;
}

// Do While Loop
// This loop will run the code first & THEN check the condition

/*

do{
    Code to run
} while(condition to test) ;

 */

// Declare a counting variable
var i = 20;

do {
    console.log("The number is "+i);

    // Change the counting variable
    i++;

} while(i<10);
