/*
 Lindsay Hampton
 March 28, 2015
 Section 00
 Final Exam
 */

//alert("Testing 1, 2, 3...");

// Finding a discounted item's cost.

var origPrice = prompt("Let's calculate the total price of your next purchase after it is discounted.\nWhat is the original price of the product?\nPlease leave out the dollar sign.");
origPrice = parseInt(origPrice);

while (isNaN(origPrice) || origPrice===""){
    if (isNaN(origPrice)){
        origPrice = prompt("Please only enter numbers.\nWhat is the original price of the product?");
    } else if(origPrice===""){
        origPrice = prompt("This field is required, please do not leave it blank.\nWhat is the original price of the product?");
    }
}

var discAmount = prompt("Please enter the discount percentage.\nThis number should be between 1 and 100.");
discAmount = parseInt(discAmount);

while (isNaN(discAmount) || discAmount === "" || discAmount<0 || discAmount>100) {
    if (isNaN(discAmount)) {
        discAmount = prompt("Please only enter numbers.\nWhat is the discount percentage?");
    } else if (discAmount === "") {
        discAmount = prompt("This field is required, please do not leave it blank.\nWhat is the discount percentage?");
    } else if (discAmount<0){
        discAmount = prompt("This field can not be less than 0.\n What is the discount percentage?");
    } else if (discAmount>100){
        discAmount = prompt("This field can not be greater than 100. \n What is the discount percentage?");
    }
}

function disCost(origPrice, discAmount) {
    var discount = origPrice * (discAmount / 100);
    var amount = origPrice - discount;
    return amount;
}

var discountPrice = disCost(origPrice, discAmount);

console.log("The final cost of an item that costs $"+origPrice+" with a discount of "+discAmount+"% is $"+discountPrice+".");



// Testing the code
/*
With the original price of $900 and a discount of 23%,
"The final cost of an item that costs $900 with a discount of 23% is $693."

With the original price of $100 and a discount of 50%,
 The final cost of an item that costs $100 with a discount of 50% is $50.

With the original price of $123,456,789 and a discount of 11%,
The final cost of an item that costs $123456789 with a discount of 11% is $109876542.21.
 */
