// Javascript 
/*jslint browser:true */
"use strict";

document.getElementById("business").innerHTML = "The Arborist";
document.getElementById("motto").innerHTML = "Arrays, Events and Handlers";
document.getElementById("learned").innerHTML = "What I learned.";
document.getElementById("item1").innerHTML = "I learned what an array is and does";
document.getElementById("item2").innerHTML = "How to place values inside of an array.";
document.getElementById("item3").innerHTML = "How to loop over an array.";
document.getElementById("item4").innerHTML = "How to show messages from JS on an HTML page";
document.getElementById("item5").innerHTML = "I did all of this with out Mtn. Dew, can you beleive that? A coder without caffeine.";
document.getElementById("footer").innerHTML = "&copy;2017 Parker Goodwin &bullet; Built by DevGoodwin &bullet;";


//Array with 3 things listed
var treesArray = ["Oak", "Mahogany", "Aspen"];


//Display the list  of trees in a page div
var displayArrayItems = function() {
    var myString = "";
    var i;
    for (i = 0; i < treesArray.length; i++) {
        myString += treesArray[i] + "<br>";
    }
    document.getElementById("Trees2").innerHTML = myString;
    document.getElementById("Trees3").innerHTML = treesArray.length+" trees in the list";
}; // end of display array

var cats = document.getElementById('Trees1');
cats.onload = displayArrayItems;

//Number of trees
// end number of trees

//American Elm 
document.getElementById("elm").addEventListener("click", elms);
function elms() {
	treesArray.unshift("American Elm");
	displayArrayItems();
} // end of American Elm 

// Deodar Cedar 

document.getElementById("petName").addEventListener("click", cedar);
 function cedar(){
 	treesArray.push("Deodar Cedar");
 	displayArrayItems();
 } // end of deodar cedar
 

//delete the first tree
document.getElementById("firstTree").addEventListener("click", deleteTree1);
function deleteTree1(){
	if(treesArray.length<1){
		document.getElementById("message").innerHTML = "There is no first tree on the list";
	} else{
		treesArray.pop();
		displayArrayItems();
	}
}

// end of delete the first tree

// delete the second tree

document.getElementById("secondTree").addEventListener("click", deleteTree2);
function deleteTree2(){
	if(treesArray.length<2){
		document.getElementById("message").innerHTML = "There is no second tree on the list";
	} else{
		treesArray.splice(1,1);
		displayArrayItems();
	}
}

//end of delete the second tree


// delete the third tree
document.getElementById("thirdTree").addEventListener("click", deleteTree3);
function deleteTree3(){
	if(treesArray.length<1){
		document.getElementById("message").innerHTML = "There is no third tree on the list";
	} else{
		treesArray.pop();
		displayArrayItems();
	}
}

// end of delete the third tree

// sort trees alphabetically

document.getElementById("treeSort").addEventListener("click", subaru);
function subaru(){
	treesArray.sort();
	displayArrayItems();
}

// end of alphabetically

document.getElementById("treeLower").addEventListener("click", small);
function small(){
	document.getElementById("Trees2").innerHTML = myString.toLowerCase();
}

// Name of third tree
document.getElementById("nameThree").addEventListener("click", treeThree);
function treeThree(){
	if(treesArray.length<3){
	document.getElementById('message').innerHTML = "There is no third tree on the list.";
	} else{
	document.getElementById('message').innerHTML = treesArray[2];
	}
}
// end of Name of third Tree

// Name of fourth Tree
document.getElementById("nameFour").addEventListener("click", treeFour);
function treeFour(){
	if(treesArray.length<4){
	document.getElementById('message').innerHTML = "There is no fourth tree on the list.";
	} else{
	document.getElementById('message').innerHTML = treesArray[3];
	}
}
// end Name fourth Tree

