// This is where my javascript will live. It will be the where all the magic happens in terms of how the game functions and performs. It will manipulate the index.html page using DOM manipulation.


//Here's how the app works:

// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// alert("Testing");

//Global Variables

//Crystal Variables

var crystal = {
    amethyst:
    {
        name: "amethyst",
        value: 5
    },
    fluorite:
    {
        name: "flourite",
        value: 15
    },
    aquamarine:
    {
        name: "aquamarine",
        value: 3
    },
    chalanthite:
    {
        name: "chalanthite",
        value: 1
    },
}

//Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var wins = 0;
var losses = 0;

//Functions
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts and stops the game
var startGame = function () {

    // Reset the current score
    var currentScore = 0;

    // Set a new target score (Between 19-120)
    targetScore = getRandom(19, 120);
    

    // Set different values for each of the crystals (between 1 and 12)
    crystal.amethyst.value = getRandom(1, 12);
    crystal.fluorite.value = getRandom(1, 12);
    crystal.aquamarine.value = getRandom(1, 12);
    crystal.chalanthite.value = getRandom(1, 12);

    // Change HTML to reflect all of the changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);
}

// This is whe response to the clicks on the crystals
var addValues = function(crystal)

//Main Process
startGame();

$("#amethyst").click(function () {
    alert("This is Amethyst");
});

$("#fluorite").click(function () {
    alert("This is Flourite");
});

$("#aquamarine").click(function () {
    alert("This is Aquamarine");
});

$("#chalcanthite").click(function () {
    alert("This is Chalcanthite");
});
