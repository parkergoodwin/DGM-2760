// Javascript 
/*jslint browser:true */
"use strict";

document.getElementById("business").innerHTML = "Pizza Emporium";
document.getElementById("motto").innerHTML = "Messing with Strings";
document.getElementById("learned").innerHTML = "What I learned.";
document.getElementById("item1").innerHTML = "I learned to use a string in various ways.";
document.getElementById("item2").innerHTML = "How to use elements to concentrate a string.";
document.getElementById("item3").innerHTML = "I learned how to make a weird story";
document.getElementById("item4").innerHTML = "How to show messages from JS on an HTML page";
document.getElementById("item5").innerHTML = "Almost the end of the semester, better get cracking";
document.getElementById("footer").innerHTML = "&copy;2017 Parker Goodwin &bullet; Built by DevGoodwin &bullet;";


var pizza = {
    type: "",
    flavor: "",
    drink: "",
    done: "",

    cook: function() {
        var cookMyPizza = "You just ordered a " + pizza.type + " " + pizza.flavor + " pizza with a " + pizza.drink + " as your beverage.";
        document.getElementById('information').innerHTML = cookMyPizza;
    }, // End of Method
    submitPizza: function() {
        if (pizza.done == 'Delivery') {
            document.getElementById('finalOrder').innerHTML = "We appreciate your business, you will have your pizza in under 20 minutes.";
        }
        if (pizza.done == 'Pick-up') {
            document.getElementById('finalOrder').innerHTML = "We appreciate your business, we will have your pizza ready for pick up in under 20 minutes.";
        } // End of Method
    } // End of Object
};