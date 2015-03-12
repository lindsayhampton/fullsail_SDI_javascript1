/*
 Lindsay Hampton
 March 12, 2015
 Section 00
 Conditionals Assignment
 */

//alert("Testing 1, 2, 3...");


// How much profit will you make on your dog's puppies?

// Are you selling these puppies
var areYou = prompt("We are going to calculate how much of a profit you will make by selling your dog's puppies! \n Are you going to sell them?")
var areYou = areYou.toLowerCase();
if (areYou==""){
    areYou = prompt("Please do not leave this field blank, it is required. \n Are you going to sell your dog's puppies?");
    areYou = areYou.toLowerCase();
} else if (areYou !="yes" && areYou !="no"){
    areYou = prompt("Please only type yes or no. \n Are you going to sell your dog's puppies?");
    areYou = areYou.toLowerCase();
}

if (areYou === "no"){
    console.log("If you are not selling your dog's puppies, this calculator is of no use to you!");
} else if (areYou === "yes") {
    console.log("Alright, lets calculate what your profits will be by selling your dog's puppies!");
} else {
    console.log("The information that you entered is not valid, please try again.");
}

// How many puppies did your dog have?
if (areYou === "yes") {
    var sellingPuppies = prompt("How many puppies did your dog have?");
    if (sellingPuppies == "" || isNaN(sellingPuppies)) {
        sellingPuppies = prompt("Please use numbers to enter how many puppies your dog had.\n This is a required field.")
    }

//console.log(sellingPuppies);

// Are you going to keep any of the puppies?
    var keep = prompt("Puppies are super cute! \n How many of your dog's puppies are you going to keep for yourself?");
    if (keep == "" || isNaN(keep)) {
        keep = prompt("Please use numbers to enter how many of your dogs puppies you plan to keep. \n This is a required field.");
    }


// How much are you charging per puppy?
    var cost = prompt("How much money are you charging per puppy that you sell? \n Please enter numbers only.");
    if (cost == "" || isNaN(cost)) {
        cost = prompt("Please use numbers to enter how much you are charging per puppy \n Do not include the dollar sign.");
    }


// Vet costs
    var expenses = prompt("How much money have you spent on these puppies so far?\n Please enter numbers only.");
    if (expenses == "" || isNaN(expenses)) {
        expenses = prompt("Please use numbers to enter how much your expenses have been on these puppies so far \n Do not include the dollar sign.");
    }


// Results
    var puppiesSold = sellingPuppies - keep;
    console.log("You are selling " + puppiesSold + " puppies for profit.");

    var puppyProfit = puppiesSold * cost;
    var totalProfit = puppyProfit - expenses

    if (expenses >= totalProfit) {
        console.log("You have not made a profit on these puppies. You have lost " + totalProfit + " dollars in expenses.");
    } else {
        console.log("You have made a profit of $" + totalProfit + " by selling these puppies!");
    }
}