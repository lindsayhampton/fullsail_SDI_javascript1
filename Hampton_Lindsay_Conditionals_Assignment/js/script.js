/*
 Lindsay Hampton
 March 12, 2015
 Section 00
 Conditionals Assignment
 */

//alert("Testing 1, 2, 3...");


// How much profit will you make on your dog's puppies?

// How many puppies did your dog have?
var sellingPuppies = prompt("We are going to calculate how much of a profit you will make by selling your dog's puppies! \n How many puppies did your dog have?");
if (sellingPuppies=="" || isNaN(sellingPuppies)){
    sellingPuppies = prompt("Please use numbers to enter how many puppies your dog had.\n This is a required field.")
}
//console.log(sellingPuppies);

// Are you going to keep any of the puppies?
var keep = prompt("Puppies are super cute! \n How many of your dog's puppies are you going to keep for yourself?");
if (keep =="" || isNaN(keep)){
    keep = prompt("Please use numbers to enter how many of your dogs puppies you plan to keep. \n This is a required field.");
}
