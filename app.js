"use strict";
let personalName = "";
//user gate input name 
personalName = prompt("Enter your name") || "";
//condition impliments
if (personalName) {
    console.log(`hello ${personalName} are you ready you learn pyhton language`);
}
else {
    console.log("you are kiding enter  you name");
}
