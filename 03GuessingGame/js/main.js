// JavaScript Document 


document.getElementById("company").innerHTML = "Guessing Game";
document.getElementById("motto").innerHTML = "Loops";
document.getElementById("instructions").innerHTML = "Instructions";
document.getElementById("gameInstructions").innerHTML = "This is a fun game where you guess a random number and if it is the correct number you will get a prize!";


var randomNumber = Math.ceil(Math.random() * 15 );
console.log(randomNumber);
var resultedNumber = document.getElementById("chosenNumber").value;
var timesTried = 0;
var pathToImage;
var winner = false;

function numberGuess() {
	var resultedNumber = document.getElementById("chosenNumber").value;
	var dogs = document.getElementById("chosenNumber");
	var resultedMessage;
	console.log(resultedNumber);


 if(resultedNumber <= 0){
	resultedMessage = "Guess a number from";
} else if(resultedNumber >= 16){
	resultedMessage = "You must pick a number between 1 and 15";
} else if(resultedNumber < randomNumber){
	resultedMessage = "The number you guessed is too low";
	timesTried ++;
} else if(resultedNumber > randomNumber){
	resultedMessage = "The number you guessed is too high";
	timesTried ++;
} else if(resultedNumber == randomNumber){
	resultedMessage = "You guessed correct! ";
	timesTried ++;
	alert("You are a winner!!");
	yourResults();
}

document.getElementById('feedback').innerHTML = resultedMessage;
document.getElementById('tries').innerHTML = timesTried;

function yourResults(){
	switch (Number(timesTried)) {
	case 1: 
	case 2:
	case 3:
	pathToImage = "img/blueribbon.jpeg";
	break;
	case 4:
	case 5:
	case 6:
	pathToImage = "img/redribbon.jpg";
	break;
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	case 12:
	case 13:
	case 14:
	case 15:
	pathToImage = "img/yellowribbon.jpg";
	break;
	case 16:
	case 17:
	case 18:
	case 19:
	case 20:
}
var getRibbon = document.createElement("IMG");
getRibbon.setAttribute('src', pathToImage);
document.getElementById('ribbon').appendChild(getRibbon);	
}




}