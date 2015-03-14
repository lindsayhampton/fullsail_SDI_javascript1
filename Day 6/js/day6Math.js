/*
 Lindsay Hampton
 March 14, 2015
 Section 00
 Day 6 Math
 */

//alert("Testing 1, 2, 3...");

// Math.round() - basic rounding: .5+ goes up, .499- goes down

var num1 = 9.444;
console.log(num1);
console.log(Math.round(num1));

// Math.floor() - Always rounds down
var num2 = 6.1;
console.log(num2);
console.log(Math.floor(num2));

// Math.ceil() - Always rounds up IF there is a decimal
var num3 = 4.8;
console.log(num3);
console.log(Math.ceil(num3));

// Math.random() - returns a number between 0 and ALMOST 1 (.99999999~)
var num4 = Math.random();
console.log(num4);

// Random between 0-10
var num5 = Math.random()* 10;
console.log(num5);

// Random INTEGER between 0-100
var num6 = Math.round(Math.random() * 100);
console.log(num6);

// Random number between 2 numbers NOT starting at 0.
// Math.random()* (max-min) + min
// A random number between 50 and 80
var num7 = Math.random()* (80-50)+50;
console.log(num7);

// Math object constant
// Area of circles = Radius*Radius*Pi
// Math.PI - the true value of Pi! nom.
var radius = 7;
var areaCircle = radius*radius*Math.PI;

// .toFixed(#) - rounds the number to the number of decimal places that matches the number inside the ().

console.log(areaCircle.toFixed(2));
