var numCards = qs.length;
var maxIndex = numCards-1;
var cardIndex = 0;

// Returns a random integer between minInt and maxInt
function getRandomInt (minInt, maxInt) {
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

function advanceCardIndex() {
    if (cardIndex == maxIndex) {
        cardIndex = 0;
    }
    else {
        cardIndex += 1;
    }
}
function lowerCardIndex() {
    if (cardIndex == 0) {
        cardIndex = maxIndex;
    }
    else {
        cardIndex -= 1;
    }
}
function randomCardIndex() {
    cardIndex = getRandomInt(0, maxIndex);
}
function flipCard() {
    $("#card").fadeOut(400, function() {
        $("#card").removeClass("dark");
        document.getElementById("question").innerHTML = qs[cardIndex]["a"];
        var url = qs[cardIndex]["url"];
        document.getElementById("link").setAttribute("href",url);
        document.getElementById("link").style.visibility = "visible";
        document.getElementById("think").style.visibility = "visible";
        $("#card").fadeIn(1000);
    });
}
function displayCard() {
    document.getElementById("link").style.visibility = "hidden";
    $("#card").fadeOut(400, function() {
        $("#card").addClass("dark");
        document.getElementById("question").innerHTML = qs[cardIndex]["q"];
        $("#card").fadeIn(1000);
    });
}

function nextCard() {
    advanceCardIndex();
    displayCard();
}
function previousCard() {
    lowerCardIndex();
    displayCard();
}
function randomCard() {
    randomCardIndex();
    displayCard();
}
function init() {
    cardIndex = 0;
    document.getElementById("link").style.visibility = "hidden";
    $("#card").addClass("dark");
    document.getElementById("question").innerHTML = qs[cardIndex]["q"];
    $("#card").fadeIn(1000);
}
