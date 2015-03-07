/*
 Lindsay Hampton
 March 7, 2015
 Section 00
 Day 3 - Casting
 */

//alert("Testing 1, 2, 3...");

// Casting variables means treating one datatype like another... if possible.

var stringVar = "6";
var results = 7 + stringVar;
console.log(results);

// Number() - treats whatever is inside like a number, if possible.
var castingResults = 7 + Number(stringVar);
console.log(castingResults);

// Cast numbers to be a text string
// String() - treat whatever is inside as a text string

var areaCode = 407;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
console.log(phoneNumber);

console.log("("+areaCode+")"+prefix+"-"+lineNumber);

// Parsing Integers
// parseInt() - looks through a text & returns an integer
// Only the first number in the string is returned!
// If the first character in the text string can NOT be converted into a number, it returns as NaN (Not a number)

var a = parseInt("40 years old");
console.log(a);
var b = Number("40 years old");
console.log(b);

var c = parseInt("He was 40");
console.log(c);

// Prompts ONLY return text strings!!!!
var tshirtsOwned = prompt("How many t-shirts do you currently own?");

// Ask how many they bought
var tshirtsBought = prompt("How many t-shirts did you buy today?");
var totalShirts = parseInt(tshirtsBought) + parseInt(tshirtsOwned);

console.log("You currently own "+totalShirts+" t-shirts.");

