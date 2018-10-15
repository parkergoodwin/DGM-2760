// Javascript 
/*jslint browser:true */
"use strict";

document.getElementById("business").innerHTML = "Nonsense Story";
document.getElementById("motto").innerHTML = "Messing with Strings";
document.getElementById("learned").innerHTML = "What I learned.";
document.getElementById("item1").innerHTML = "I learned to use a string in various ways.";
document.getElementById("item2").innerHTML = "How to use elements to concentrate a string.";
document.getElementById("item3").innerHTML = "I learned how to make a weird story";
document.getElementById("item4").innerHTML = "How to show messages from JS on an HTML page";
document.getElementById("item5").innerHTML = "Almost the end of the semester, better get cracking";
document.getElementById("footer").innerHTML = "&copy;2017 Parker Goodwin &bullet; Built by DevGoodwin &bullet;";

//Story Function
function story(){
	var arrayNouns = document.getElementById('nouns').value.toLowerCase().split(/\s+|\n/);
	var arrayVerbs = document.getElementById('verbs').value.toLowerCase().split(/\s+|\n/);
	var arrayAdjectives = document.getElementById('adjs').value.toLowerCase().split(/\s+|\n/);
	
	var yourStory = "Parker loves to go for a ride on his bike, one day while "+arrayVerbs[2]  +"ing his bike by the side of a cliff. <br>"+
	"Parker is not too fond of heights and  "+arrayAdjectives[1]  +" to look over the edge "+arrayVerbs[1]  +"while over the edge of  "+
	"the "+arrayAdjectives[0]  +" a while "+arrayNouns[1]  +" for "+arrayVerbs[0]  +" Parker got very nervous  "+arrayNouns[2]  +"because of the drop "+
	"Parker was not too sure if he could get away "+arrayAdjectives[2]  +" from the cliff.<br> "+
	"Parker was mortified that while he was "+arrayNouns[0]  +", he was not paying attention to his "+
	"mounthain bike "+arrayNouns[1]  +".<br>  Someone else "+arrayVerbs[3]  +" the bike "+arrayAdjectives[3]  +".<br> Parker saw his bike being "+arrayNouns[3]  +" in the distance. ";
    
	document.getElementById('weirdStory').innerHTML=yourStory;
} 

