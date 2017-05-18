//globals
var initialInterval = 5000;
var interval = initialInterval;
var intervalModifier = 1.1;

// Create the canvas
var canvas = document.getElementById("gameArea");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 480;

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "images/background800x480.png";

// pokemon image
var pokemonReady = false;
var pokemonImage = new Image();
pokemonImage.onload = function() {
    pokemonReady = true;
};
pokemonImage.src = "images/pokemon1.png";

//Create Reset and New Game
var resetSpeedButton = document.getElementById("resetSpeed");
resetSpeedButton.onclick = function() {
    interval = initialInterval;
};

var resetGameButton = document.getElementById("resetGame");
resetGameButton.onclick = function() {
    interval = initialInterval;
    pokemonCaught = 0;
    reset();
    then = Date.now();
};

var pokemon = {};
var pokemonCaught = 0;

//mouse events
addEventListener("mousedown", function(e) {
    var rightBorderWidth = (window.innerWidth - canvas.width) / 2;

    if (e.clientX - rightBorderWidth >= pokemon.x - 1 && pokemon.x + 60 >= e.clientX - rightBorderWidth && e.clientY >= pokemon.y - 1 && pokemon.y + 60 >= e.clientY) {
        pokemonCaught++;
        interval = interval / intervalModifier;
        reset();
        then = Date.now();
    }
})

addEventListener("pointerdown", function(e) {
    var rightBorderWidth = (screen.width - canvas.width) / 2;

    if (e.clientX - rightBorderWidth >= pokemon.x - 1 && pokemon.x + 60 >= e.clientX - rightBorderWidth && e.clientY >= pokemon.y - 1 && pokemon.y + 60 >= e.clientY) {
        pokemonCaught++;
        interval = interval / intervalModifier;
        reset();
        then = Date.now();
    }
})

addEventListener("touchstart", function(e) {
    var rightBorderWidth = (screen.width - canvas.width) / 2;

    if (e.clientX - rightBorderWidth >= pokemon.x - 1 && pokemon.x + 60 >= e.clientX - rightBorderWidth && e.clientY >= pokemon.y - 1 && pokemon.y + 60 >= e.clientY) {
        pokemonCaught++;
        interval = interval / intervalModifier;
        reset();
        then = Date.now();
    }
})

// Reset the game when the player catches a pokemon
var reset = function() {
    // Throw the pokemon somewhere on the screen randomly
    var number = Math.floor((Math.random() * 10) + 1);
    pokemonImage.src = "images/pokemon" + number + ".png";
    pokemon.x = 32 + (Math.random() * (canvas.width - 120));
    pokemon.y = 32 + (Math.random() * (canvas.height - 120));
};

// Draw everything
var render = function() {
    if (bgReady) {
        context.drawImage(bgImage, 0, 0);
    }

    if (pokemonReady) {
        context.drawImage(pokemonImage, pokemon.x, pokemon.y);
    }

    // Score
    var caught = document.getElementById("amountCaught");
    caught.innerHTML = "Pokemon caught: " + pokemonCaught;
};

// The main game loop
var main = function() {
    var now = Date.now();
    delta = now - then;

    render();

    if (delta > interval) {
        then = now;
        reset();
    }

    requestAnimationFrame(main);
    var countdown = document.getElementById("countdown");
    countdown.innerHTML = "Countdown until next movement: " + (delta / 1000).toFixed(2) + " / " + (interval / 1000).toFixed(2) + " seconds";
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();