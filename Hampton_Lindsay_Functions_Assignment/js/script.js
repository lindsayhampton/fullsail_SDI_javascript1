/*
 Lindsay Hampton
 March 24, 2015
 Section 00
 Functions Assignment
 */

//alert("Testing 1, 2, 3...");

// Finding the cost of a product plus tax.

// Create variable for original price
var origPrice = prompt("Let's calculate the total price of your next purchase.\nWhat is the original price of the product?\nPlease leave out the dollar sign.");
origPrice = parseInt(origPrice);


// Validate the variable prompt.

while (isNaN(origPrice) || origPrice===""){
    if (isNaN(origPrice)){
        origPrice = prompt("Please only enter numbers.\nWhat is the original price of the product?");
    } else if(origPrice===""){
        origPrice = prompt("This field is required, please do not leave it blank.\nWhat is the original price of the product?");
    }
}

// Create a variable for tax percentage.
var taxAmount = prompt("Please enter the percentage of sales tax.");
taxAmount = parseInt(taxAmount);
var divide = 100;

// Validate

while (isNaN(taxAmount) || taxAmount===""){
    if (isNaN(taxAmount)){
        taxAmount = prompt("Please only enter numbers.\nWhat is the percentage of sales tax?");
    } else if (taxAmount===""){
        taxAmount = prompt("This field is required, please do not leave it blank.\nWhat is the original price of the product?");
    }
}

// Create function
function taxTotal(origPrice, taxAmount,divide){
    var taxCash = (origPrice*taxAmount)/divide;
    return taxCash;
}

// Returned
var taxCash = taxTotal(origPrice, taxAmount, divide);
console.log("The amount in tax you will be paying is $"+taxCash+".");


// Function 2
function price(taxCash, origPrice){
    var totalPrice = taxCash+origPrice
    return totalPrice;
}

// Returned
var totalPrice = price(taxCash, origPrice);
console.log("The total amount you will pay for this item is $"+totalPrice+".");

