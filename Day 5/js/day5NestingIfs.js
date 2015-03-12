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
var temp = 66;

// Set water temperature
var waterTemp = 78;

if(temp>=80){
    console.log("Let's go to the beach!");
    if (waterTemp>75){
        console.log("Let's go swimming!");
    } else {
        console.log("Let's get a tan!");
    }
} else {
    console.log("Let's go to the movies!");

    // Do we have any kids in the group?
    var kids = "no";

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

