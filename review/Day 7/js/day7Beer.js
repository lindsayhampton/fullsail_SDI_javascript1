/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Day 7 - Beer
 */

//alert("Testing 1, 2, 3...");

// Code the song 99 Bottles of beer on the wall.

//Basic structure of for loop
// For (var i =0; condition to test, increment of change){}

for (var i = 99; i > 0; i--){
    if (i===1){
        console.log(i + " bottle of beer on the wall. " + i + " bottle of beer. You take one down and pass it around, no more bottles of beer on the wall.");
    } else {
        console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. You take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.")
    }
}