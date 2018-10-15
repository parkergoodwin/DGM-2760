/*jslint browser:true */
"use strict";

var centerNavigation = document.querySelectorAll('ul#primaryNavigation li a');

		
var ul = document.createElement("UL");
document.getElementById('smallNavArea').appendChild(ul);

var small;
function dupMenu(){
for (small=0; small<centerNavigation.length; small++) {
		var url = centerNavigation[small].getAttribute("href");
		
		var content = centerNavigation[small].text;
		
		var li = document.createElement("LI");
		ul.appendChild(li);
		var bottom = document.createElement("A");
		li.appendChild(bottom);
		bottom.setAttribute('href', url);
		bottom.innerHTML = content;
	} 
} 
dupMenu();