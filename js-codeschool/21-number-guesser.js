let prompt = require("prompt-sync")();


let guess;
let num = Math.floor(Math.random() * 100);
let attempts = 0;

const guessNumbers = function(num) {
    do {
        guess = parseInt(prompt("Guess a number between 1 and 99: "));
        attempts++;
        if (guess > num) {
            console.log("Too High!");
        } else if (guess < num) {
            console.log("Too Low!");
        } else if (!parseInt(guess)) {
            console.log("Not a number! Try again!");
        } else if (guess = num) {
            console.log("You guessed it in " + attempts);
        }
    } while (guess != num);
};

guessNumbers(num);