/*
 Lindsay Hampton
 March 14, 2015
 Section 00
 Loops Worksheet - Validating Loop
 */

//alert("Testing 1, 2, 3...");
// Can I Have Your Phone Number?

var permission = prompt("Can I have your phone number?\n Please answer yes or no.");
permission = permission.toLowerCase();

while (permission != "yes" || permission != "no" || permission ==="") {
permission = prompt("Your input is invalid. \n Please enter yes or no.");
}
permission = permission.toLowerCase();

if (permission==="yes") {
    console.log("Wow, thanks! I'm so excited to get your phone number, maybe we can become best friends!");

    var areaCode = prompt("What is the AREA CODE of your phone number?")
    while (isNaN(areaCode) || areaCode === "") {
        if (isNaN(areaCode)) {
            areaCode = prompt("Please only use numbers while entering your area code.\n Enter the area code of your phone number.");
        } else if (areaCode ==="") {
            areaCode = prompt("This field is required. \n Please enter your area code.");
        }
    }

    var prefix = prompt("What are the FIRST three digits of your phone number?")
    while (isNaN(prefix) || prefix ==="") {
        if (isNaN(prefix)) {
            prefix = prompt("Please only use numbers while entering your area code.\n Enter the area code of your phone number.");
        } else if (prefix ==="") {
            prefix = prompt("This field is required. \n Please enter your area code.");
        }
    }

    var lineNumber = prompt("What are the LAST four digits of your phone number?")
    while (isNaN(lineNumber) || lineNumber ==="") {
        if (isNaN(lineNumber)) {
            lineNumber = prompt("Please only use numbers while entering your area code.\n Enter the area code of your phone number.");
        } else if (lineNumber ==="") {
            lineNumber = prompt("This field is required. \n Please enter your area code.");
        }
    }
    var phoneNumber = String(areaCode)+"-"+String(prefix)+"-"+String(lineNumber);
    console.log("According to the information you've entered, your phone number is "+phoneNumber+".");
}

if (permission==="no") {
    console.log("Oh, I understand. I guess you do not want to be my friend. :(");
}