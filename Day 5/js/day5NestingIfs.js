/*
 Lindsay Hampton
 March 12, 2015
 Section 00
 Nesting If Statements
 */

//alert("Testing 1, 2, 3...");

// Some decisions affect other decisions

// If it is warm, then lets go to the beach. If it is not, then lets go to the movies.

// Get temperature
var temp = prompt("We are going to decide what you should do today. \n What is the current temperature outside?");



//Validate that the user typed in SOMETHING... was it left blank?
if (temp===""){
    // This code will run if the user types in nothing.
    // RePrompt the user.
    temp = prompt("Please do not leave this field blank, it is required. \n What is the current temperature outside?");
}




// Validate that the user typed in a number
// isNaN() - is it Not a Number?
//console.log(isNaN(7)); //-false
//console.log(isNaN("monkey")); //-true

if(isNaN(temp)){
    // This code will run anytime temp is NOT a number
    // Reprompt the user for the information
    // Gives the user a 2nd chance
    temp = prompt("Please only type in numbers. \n Enter the temperature outside.");
}




// Set water temperature
var waterTemp = prompt("What is the water temperature?");




// Convert the text string to lower case
//___.toLowerCase();
knowSwim = knowSwim.toLowerCase();


// Validate the knowSwim variable
if (knowSwim !="yes" && knowSwim !="Yes" && knowSwim !="no" && knowSwim !="No"){
    //reprompt the user
    knowSwim = prompt("Only type in yes or no. \n Can you swim?");
    knowSwim = knowSwim.toLowerCase();
}


if(temp>=80){
    console.log("Let's go to the beach!");
    if (waterTemp>75){
        console.log("Let's go swimming!");
        if(knowSwim =="yes"){
            console.log("No floaties needed!");
        } else {
            console.log("Bring your floaties!");
        }
    } else {
        console.log("Let's get a tan!");
    }

} else {
    console.log("Let's go to the movies!");


    // Do we have any kids in the group?
    var kids = prompt("Are you bringing any kids?");

    // Validate
    // Convert to lower case
    kids = kids.toLowerCase();
    if(kids !="yes" && kids !="no"){
        kids = prompt("Please only type yes or no. \n Are you bringing any kids?");
        // Convert to lowercase once again
        kids = kids.toLowerCase();
    }



    // Test if we have kids
    if(kids==="no"){
        console.log("Let's go see 50 Shades of Gray!");
    } else {
        console.log("Let's go see the Spongebob Squarepants Movie!");
    }


}

/*
// If the water temp is above 75, lets go swimming. If not, lets get a tan.

if (waterTemp>75){
    console.log("Let's go swimming!");
} else {
    console.log("Let's get a tan!");
}
*/

