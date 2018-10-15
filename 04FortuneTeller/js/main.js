// JavaScript Document
/*jslint browser:true */
"use strict";
document.getElementById("business").innerHTML = "Fortune Teller";
document.getElementById("motto").innerHTML = "Switch Statements";
document.getElementById("learned").innerHTML = "What I learned:";
document.getElementById("li1").innerHTML = "This website was developed via functions and switch statements.";
document.getElementById("li2").innerHTML = "It is built functions that has switches that call functions.";
document.getElementById("li3").innerHTML = "It will generate random answers.";
document.getElementById("li4").innerHTML = "There are hundreds of potential answers you can get.";
document.getElementById("li5").innerHTML = "Are you ready to have your fortune given?";
document.getElementById("li6").innerHTML = "I hope it is good! But it may also be your demise.";
document.getElementById("footer").innerHTML = "&copy;2017 Parker Goodwin &bullet; Built by DevGoodwin &bullet;";

function newNumber(top) {
	var x = Math.random();
	x = x * top;
	x = (Math.floor(x)) + 1;
	return x;
}

function chooseMonth(month) {
	var message;
	switch (month) {
		case 1:
			message = "January";
			break;
		case 2:
			message = "February";
			break;
		case 3:
			message = "March";
			break;
		case 4:
			message = "April";
			break;
		case 5:
			message = "May";
			break;
		case 6:
			message = "June";
			break;
		case 7:
			message = "July";
			break;
		case 8:
			message = "August";
			break;
		case 9:
			message = "September";
			break;
		case 10:
			message = "October";
			break;
		case 11:
			message = "November";
			break;
		case 12:
			message = "December";
			break;
		default:
			message = "Your number is out of range";
	} //end of switch statement 1
	return message;
} // end of function 1
function chooseDay(day) {
	var messageTwo;
	switch (day) {
		case 1:
			messageTwo = "First";
			break;
		case 2:
			messageTwo = "Second";
			break;
		case 3:
			messageTwo = "Third";
			break;
		case 4:
			messageTwo = "Fourth";
			break;
		case 5:
			messageTwo = "Fifth";
			break;
		case 6:
			messageTwo = "Sixth";
			break;
		case 7:
			messageTwo = "Seventh";
			break;
		case 8:
			messageTwo = "Eighth";
			break;
		case 9:
			messageTwo = "Ninth";
			break;
		case 10:
			messageTwo = "Tenth";
			break;
		case 11:
			messageTwo = "Eleventh";
			break;
		case 12:
			messageTwo = "Twelfth";
			break;
		case 13:
			messageTwo = "Thirtheenth";
			break;
		case 14:
			messageTwo = "Fourteenth";
			break;
		case 15:
			messageTwo = "Fifteenth";
			break;
		case 16:
			messageTwo = "Sixteenth";
			break;
		case 17:
			messageTwo = "Seventeenth";
			break;
		case 18:
			messageTwo = "Eighteenth";
			break;
		case 19:
			messageTwo = "Nineteenth";
			break;
		case 20:
			messageTwo = "Twentieth";
			break;
		case 21:
			messageTwo = "Twenty First";
			break;
		case 22:
			messageTwo = "Twenty Second";
			break;
		case 23:
			messageTwo = "Twenty Third";
			break;
		case 24:
			messageTwo = "Twenty Fourth";
			break;
		case 25:
			messageTwo = "Twenty Fifth";
			break;
		case 26:
			messageTwo = "Twenty Sixth";
			break;
		case 27:
			messageTwo = "Twenty Seventh";
			break;
		case 28:
			messageTwo = "Twenty Eighth";
			break;
		case 29:
			messageTwo = "Twenty Ninth";
			break;
		case 30:
			messageTwo = "Thirtieth";
			break;
		case 31:
			messageTwo = "Thirty First";
			break;
		default:
			messageTwo = "Your number is out of range";
	} // end of switch statement 2
	return messageTwo;
} // end of function 2
function tellFortune(fortune) {
	var messageThree;
	switch (fortune) {
		case 1:
			messageThree = "You will buy a three-headed dog.";
			break;
		case 2:
			messageThree = "A horse will kick you really hard.";
			break;
		case 3:
			messageThree = "Your mother will make you do the dishes until you die.";
			break;
		case 4:
			messageThree = "You will inherit 1,000,000 dollars from your long, lost and dead Uncle Jerry.";
			break;
		case 5:
			messageThree = "You will meet James Franco.";
			break;
		case 6:
			messageThree = "Your car will be ticketed by UVU Parking Enforcement.";
			break;
		case 7:
			messageThree = "You will meet the love of your life.";
			break;
		case 8:
			messageThree = "You will get an unlimited supply of Mountain Dew.";
			break;
		case 9:
			messageThree = "You will never sleep comfortably again!";
			break;
		case 10:
			messageThree = "You will meet Pennywise the Clown in a storm drain.";
			break;
		default:
			messageThree = "Your number is out of range";
	} // end of switch statement 3
	return messageThree;
} // end of function 3
var numberOfMonths = newNumber(12);
var monthName = chooseMonth(numberOfMonths);
var numberOFDays = newNumber(31);
var newDay = chooseDay(numberOFDays);
var fortuneType = newNumber(10);
var yourFortune = tellFortune(fortuneType);
var feedbackMessage = 'On ' + monthName + ' ' + newDay + ', ' + yourFortune;
document.getElementById("feedback").innerHTML = feedbackMessage;