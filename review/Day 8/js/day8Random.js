/*
 Lindsay Hampton
 March 24, 2015
 Section 00
 Day 8 - Random
 */

//alert("Testing 1, 2, 3...");

// Create a function that will give us a random integer between two values

// Create variables for min and max values
var min = prompt("Let's find a random number between two values\nPlease enter your minimum value:");

// Validate
while(isNaN(min) || min===""){
    // Re-Prompt the user
    min = prompt("Your input was invalid.\nPlease do not leave blank and only use numbers.\nWhat is the minimum value:");
}

var max = prompt("Please enter your maximum value:");
while(isNaN(max) || max==="" || parseInt(max)<=parseInt(min)){

    if(isNaN(max)){
        // Re-Prompt the user
        max = prompt("Your input was invalid.\nPlease only use numbers.\nWhat is the maximum value:");
    } else if(max===""){
        max = prompt("Your input was invalid.\nPlease do not leave blank\nWhat is the maximum value:");
    } else if(max<=min){
        max = prompt("Please enter a higher value than your minimum number of "+min+".\n What is the maximum value");
    }
}


// Function Call
var ranNum = getRandom(min, max);
console.log("Your random number between "+min+" and "+max+" is "+ranNum);

// Create our function
function getRandom(min, max){

    // Generate a random interger
    var randomNumber = Math.round(Math.random()*(max-min)+parseInt(min));
    return randomNumber;

}



// 15 Random Numbers - console.log them out
for(var i=0; i<15; i++){
    console.log(getRandom(min,max))
}