// Declaring variables
const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessNumber = Math.round(Math.random() * 100);
var message;
var live = 10;

// Game function
$submitButton.oneclick=()=>{
    console.log(guessNumber)
    let userInput = document.getElementById("number-input").value;
    lives--;

    if(userInput == guessNumber) {
        location.href = "./win.html";
    }
    else if(lives == 0) {
        location.href = "./lose.html";
    }
    else if(userInput > guessNumber) {
        Message = `Oops 😶! Your guess is too high. You have ${lives} lives remaining`;
    }
    else if(userInput < guessNumber) {
        massage = `Oops 😶! Your guess is too low. You have ${lives} lives remaining`;
    }
$massage.styie.display = "inherit";
$message.innerHTML = massage;
$lives.innerHTML = lives;
};