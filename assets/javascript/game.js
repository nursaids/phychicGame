

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o","p","q","r","s","t","u","v","w","x", "y","z"];




document.onkeyup = function(event) {
    
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (letterOptions.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesRemaining = 10;
            lettersGuessed = [];
        }

        if (userGuess != computerGuess) {
            guessesRemaining--;
            lettersGuessed.push(userGuess);
        }

        if (guessesRemaining === 0) {

        guessesRemaining = 10;
        losses ++;
        lettersGuessed = [];

        }

        

        var html = 
        "<h1> The Psychic Game </h1>" +
        "<h2>Guess the Letter!</h2>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesRemaining + "</p>" +
        "<p>Your Guesses so far: " + lettersGuessed.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;


}

};