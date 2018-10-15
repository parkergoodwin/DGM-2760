// JavaScript Document
/*jslint browser:true */
"use strict";

document.getElementById("company").innerHTML = "Inspector Clouseau";

document.getElementById("motto").innerHTML = "Properties";

function myWindowResize() {
var size = window.innerWidth;
	var bucket = "My Window is "+ size +"px wide";
	document.getElementById("bucket").innerHTML = bucket;

var height = window.innerHeight;
	var animals = "My Window is "+ height+"px tall";
	document.getElementById("animals").innerHTML = animals;

var leftOffset = window.screenX;
	var dogs = "Screen offset from the left is "+ leftOffset+"px tall";
	document.getElementById("dogs").innerHTML = dogs; 

var rightOffset = window.screenY;
	var cats = "Screen offset from the top is "+ rightOffset+"px tall";
	document.getElementById("cats").innerHTML = cats;

var websiteTitle = window.location;
	var subaru = "This site's address is "+ location;
	document.getElementById("subaru").innerHTML = subaru;

var codingDoc = document.title;
	var snakes = "Title of this document is "+ codingDoc;
	document.getElementById("snakes").innerHTML = snakes; 

var lastSave = document.lastModified;
	var workedon = "This document was previously worked on "+ lastSave;
	document.getElementById("workedon").innerHTML = workedon;
}

myWindowResize();