// Javascript 
/*jslint browser:true */
"use strict";

document.getElementById("business").innerHTML = "Joe's Bed and Breakfast";
document.getElementById("motto").innerHTML = "Document writing";

var name = prompt("Please type your name")
var worldtime = "Hello "+name;
document.getElementById("helloWorld").innerHTML = worldtime;

var newString = new Date();
document.getElementById("lalala").innerHTML = "Today is "+newString;