var cardIndex = 0;
var qs;
var numCards;
var maxIndex;
var isFlipped = 0;

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
    if (isFlipped == 0) {
        $("#card").fadeOut(400, function() {
            isFlipped = 1;
            $("#card").removeClass("c0");
            $("#card").removeClass("c1");
            $("#card").removeClass("c2");
            $("#card").removeClass("c3");
            document.getElementById("question").innerHTML = qs[cardIndex]["a"];
            $("#card").fadeIn(1000);
        });
    }
}
function setCardColor() {
    var n = getRandomInt(0,3);
    var classes = ['c0','c1','c2','c3'];
    $("#card").addClass(classes[n]);
}
function displayCard() {
    $("#card").fadeOut(400, function() {
        setCardColor();
        isFlipped = 0;
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
    var jsonUrl = "questionsAndAnswers.json";
    $.getJSON(jsonUrl, function(jsonObject) {
        qs = jsonObject;
        numCards = qs.length;
        maxIndex = numCards-1;
        setCardColor();
        document.getElementById("question").innerHTML = qs[cardIndex]["q"];
        $("#card").fadeIn(1000);
    });
}


