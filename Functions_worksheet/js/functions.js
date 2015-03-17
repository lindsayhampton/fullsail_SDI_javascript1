/*
 Lindsay Hampton
 March 17, 2015
 Section 00
 Functions Worksheet
 */

//alert("Testing 1, 2, 3...");

// Calculate the circumference of a circle
// 2 pi r

function circCirc(r) {
    var circumference = 2*Math.PI*r
    console.log("The circumference of the circle is "+circumference);
}

// Call the function

circCirc(5);

circCirc(8);

var radius=10;
circCirc(radius);
// Stung!
// 8.666666667 stings per pound to kill

function sting2Kill(w){
    var stings = w*8.666666667
    console.log("It would take a bee "+stings+" stings to kill this animal.");
}

// Call the information

sting2Kill(10);

sting2Kill(180);

sting2Kill(467);

var weight = 879;
sting2Kill(weight);