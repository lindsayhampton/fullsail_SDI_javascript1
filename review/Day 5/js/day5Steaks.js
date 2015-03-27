/*
 Lindsay Hampton
 March 12, 2015
 Section 00
 Day 5 - Steaks
 */

//alert("Testing 1, 2, 3...");

// Check a steak temperature & measure the doneness level

/*
 Extra-rare or Blue (bleu)	115–120 °F
 Rare (saignant)	        125–130 °F
 Medium rare (à point)  	130–140 °F
 Medium (demi-anglais)	    140–150 °F	145 °F
 Medium well (cuit) 	    150–155 °F
 Well done (bien cuit)	    160 °F
 */

// Create a variable for our steak temperature
var steakTemp = prompt("What is the temperature of your steak?");
steakTemp = parseInt(steakTemp);

// Test each of the cases above to see where our temperature falls into
if (steakTemp<115){
    console.log("Your steak is uncooked.");
} else if (steakTemp<125){
    console.log("Your steak is considered extra-rare(blue).");
} else if (steakTemp<130){
    console.log("Your steak is considered to be rare.");
} else if (steakTemp<140){
    console.log("Your steak is considered medium-rare.");
} else if (steakTemp<150){
    console.log("Your steak is considered to be medium.");
} else if (steakTemp<155) {
    console.log("Your steak is considered to be medium-well");
} else if (steakTemp<160){
    console.log("Your steak is considered to be well-done.");
} else {
    console.log("Your steak is burnt.")
}