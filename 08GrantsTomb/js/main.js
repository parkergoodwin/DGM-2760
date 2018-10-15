// JavaScript Document
/*jslint browser:true */
"use strict";

document.getElementById("business").innerHTML = "Pizza Emporium";
document.getElementById("motto").innerHTML = "Messing with Strings";
document.getElementById("learned").innerHTML = "What I learned.";
document.getElementById("item1").innerHTML = "Staying up late coding.";
document.getElementById("item2").innerHTML = "How to create object literals.";
document.getElementById("item3").innerHTML = "How to add things it knows.";
document.getElementById("item4").innerHTML = "How to add things it can do.";
document.getElementById("item5").innerHTML = "Almost the end of the semester, better get cracking";
document.getElementById("footer").innerHTML = "&copy; 2017 Parker Goodwin &bullet; Built by DevGoodwin &bullet;";


var choice = {

	correct:4,
	choice1:"Donald Trump",
	choice2:"Steve Madden",
	choice3:"Led Zeppelin",
	choice4:"Hugh John Mungo Grant",

check: function(a) {
	if(a==choice.correct) {
		document.getElementById('answer').innerHTML = "You guessed correctly!";
	}
	else {
		document.getElementById('answer').innerHTML = "Your guess was wrong, give it another try!";
	}
	}
};