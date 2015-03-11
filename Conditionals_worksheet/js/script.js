/*
 Lindsay Hampton
 March 10, 2015
 Section 00
 Conditionals Worksheet
 */

//alert("Testing 1, 2, 3...");

// Last Chance for Gas

// Gas efficiency of the car
var mpg = 30;

// Gauge reading of the gas tank
var gasReading = 50;
var gasPercent = gasReading/100;
//console.log(gasPercent);

// Car's gas tank capacity
var gasCap = 10;

// Figuring out Miles left in Tank
var tankGallons = gasCap * gasPercent;
//console.log(tankGallons);
var milesInTank = tankGallons*mpg;
//console.log(milesInTank);

// Result
if (milesInTank > 200){
    console.log("Yes, you can make it without stopping for gas!");
} else {
    console.log("You only have "+milesInTank+" miles left in your tank! Better get gas while you can!");
}

// Check the Login

// Actual information
var userYes = "username";
var passYes = "password";

// User generated information
var userEntered = prompt("Please enter your username");
var passEntered = prompt("Please enter your password");

// Result
if (userEntered != userYes) {
    console.log("User not found, please try again");
} else if (passEntered != passYes){
    console.log("Password does not match our records.");
} else {
    console.log("Welcome, " + userYes + "!");
}

// Movie Ticket Price

// Age
var age = 10;

// Movie time
var movieTime = 4

// Prices
var regPrice = 12.00
var discount = 7.00

// Result

if (age >= 55){
 console.log("You qualify for a discount, you will pay $"+discount+".");
} else if (age < 10){
    console.log("You qualify for a discount, you will pay $"+discount+".");
} else {
    console.log("You do not qualify for a discount, your ticket price is $"+regPrice+".");
}