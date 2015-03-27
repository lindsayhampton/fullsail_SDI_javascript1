/*
 Lindsay Hampton
 March 14, 2015
 Section 00
 Day 6 Validation
 */

//alert("Testing 1, 2, 3...");

// Ask the user for a number
var num1 = prompt("Please enter a number:");

// Validate that the user typed in a number AND didn't leave it blank.
// Validate using a while loop.

while(isNaN(num1) || num1===""){
    //Reprompt the user
    if(num1===""){
        // The user left it blank
        num1 = prompt("Please do not leave this field blank.\n Enter a number:");
    } else if(isNaN(num1)){
        num1 = prompt("Please only type in numbers.\nEnter a number:");
    }
}


// Ask the user a yes or no question
var userInput = prompt("Please enter yes or no:");
var userInput = userInput.toLowerCase();
while (userInput !=="yes" || userInput !=="no" || userInput===""){
    if (userInput !=="yes" || userInput !=="no"){
        userInput = prompt("Please only type in yes or no.\nEnter yes or no:");
    } else if (userInput === ""){
        userInput = prompt("This field is required.\nPlease enter yes or no:");
    }
}