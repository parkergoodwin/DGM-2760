// Javascript 
/*jslint browser:true */
"use strict";


var alphabetVowels = ["a", "e", "i", "o", "u", "y"];
var alphabetReplacements = {
    "aa": ["aa", "ah"],
    "a": ["a", "ay", "ah", "aa"],
    "ay": ["ay", "ai", "ey"],
    "b": ["bee", "be"],
    "c": ["c", "k", "qu", "sh"],
    "d": ["dee", "du", "dd"],
    "e": ["e", "eh", "y", "i"],
    "ea": ["ea", "ee", "eigh", "eee", "ie", "y", "i"],
    "ee": ["ee", "eigh", "eee", "ie", "y", "i", "ei"],
    "ei": ["ei", "eigh", "eee", "ie", "y", "i", "ee"],
    "f": ["f", "ph"],
    "fr": ["fr", "phr"],
    "g": ["g", "gg"],
    "h": ["h", "j"],
    "i": ["i", "y", "ay", "ee"],
    "j": ["j", "gi"],
    "k": ["c", "ch", "k", "qu"],
    "l": ["l", "ll"],
    "m": ["m", "mm"],
    "mm": ["m", "mm"],
    "n": ["n", "nn"],
    "nn": ["n", "nn"],
    "o": ["o", "oh", "oo"],
    "qu": ["qu", "k", "c"],
    "r": ["r", "rr"],
    "t": ["t", "tt"],
    "s": ["s", "c", "z"],
    "tr": ["tr", "dr"],
    "th": ["th", "ph"],
    "u": ["u", "oo", "ieu"],
    "w": ["uie", "uiee"],
    "y": ["y", "i", "ee", "eigh"],
    "z": ["z", "s", "ts"]
};




function getUniqueName(name) {
    var givenUniqueName = "";
    var key = "";
    var vowelGenerated = false;
    for (var i = 0; i < name.length; i++) {
        var random = name[i];
        var usedVowels = alphabetVowels.indexOf(random) != -1;

        if (usedVowels == vowelGenerated) {
            key += random;
        } else {
            givenUniqueName += secondKey(key);
            key = random;
            vowelGenerated = usedVowels; 
        }
    }
    givenUniqueName += secondKey(key);
    return givenUniqueName;
}



function secondKey(key) {
    if (alphabetReplacements[key]) {
        return alphabetReplacements[key][randomGivenName(alphabetReplacements[key].length)];
    }
    return key;
}


function randomGivenName(max) {
    return parseInt(Math.random() * max);
}

function final() {
    document.querySelector("#getMyName").addEventListener("click", function() {
        var enteredUserName = document.querySelector("#givenUserName").value;
        document.querySelector("#returnedUniqueName").innerHTML = getUniqueName(enteredUserName);
    });


}