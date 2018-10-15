// JavaScript Document
"use strict";

var siteEnding;
var linkEnding;
var liNumber;

function linkToURL() {
    var siteAddress = location.href;

    var splitHash = siteAddress.split('#');

    var noHash = splitHash[0];


    var splitQuestion = noHash.split('?');

    var noQuestion = splitQuestion[0];


    var forSplit = noQuestion.split('/');


    siteEnding = forSplit[forSplit.length - 1];
}

function whatIsMyLink() {
    liNumber = document.querySelectorAll("ul#mainmenu li a");

    var arrayLink = [];

    for (var i = 0; i < liNumber.length; i++) {

        var linkName = liNumber[i].getAttribute('href');


        arrayLink.push(linkName);


        var splitHashLink = arrayLink[i].split('#');
        var noHashTwo = splitHashLink[0];


        var splitQ = noHashTwo.split('?');
        var linkEnding = splitQ[0];


        if (siteEnding === linkEnding) {
            liNumber[i].parentNode.className = 'active';

            if (liNumber[i].parentNode.parentNode.parentNode.nodeName === "LI") {
                liNumber[i].parentNode.parentNode.parentNode.className = 'parent';
            }
        } else {
            liNumber[i].parentNode.parentNode.className = '';
            liNumber[i].parentNode.className = '';
            liNumber[i].className = '';
        }
    }
}

linkToURL();
whatIsMyLink();