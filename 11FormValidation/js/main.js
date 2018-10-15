/*jslint browser:true */
"use strict";

function userInfo() {
	var givenInfo = true;

	var formBody = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber'];
	var section;
	for (section = 0; section<formBody.length; section++) {
		document.getElementById(formBody[section]).className = "normal";
	}

	var	userName = document.forms.myForm.fullName.value;
	if(userName === "" || userName === null) {
		givenInfo = false;
		document.getElementById('fullName').className = "error";
	}


	var cellNumber = document.forms.myForm.phoneNumber.value;
	console.log(cellNumber);
	cellNumber = cellNumber.replace(/-/g, '');
	console.log('>>>'+cellNumber);
	if(cellNumber.length < 10 || cellNumber.length > 15) {
		givenInfo = false;
		document.getElementById('phoneNumber').className = "error";
	}


	var creditCard = document.forms.myForm.ccNumber.value;
	//console.log(creditCard);
	creditCard = creditCard.replace(/ /g, '');
	//console.log('>>>>>>'+creditCard);
	if(creditCard.length != 15) {
		givenInfo = false;
		document.getElementById('ccNumber').className = "error";
	}


	var buttons = document.getElementsByName('payMethod');
	var selectedButtons = false;
	for (section=0; section<buttons.length; section++) {
		if (buttons[section].checked) {
		selectedButtons = true;
		break;
		} // End of if
	} // End of for loop

	if(selectedButtons === false) {
		givenInfo = false;
		document.getElementById('payMethod').className = "error";
	}


	var car = document.forms.myForm.vehicle.selectedIndex;
	if(car === 0) {
		givenInfo = false;
		document.getElementById('vehicle').className = "error";
	}


	if (givenInfo === false) {
		document.getElementById('formProblems').className = "showErrorMsg";
	}

	return givenInfo;
}









