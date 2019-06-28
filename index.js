var colors = require("colors");
var inquirer = require("inquirer");
var Word = require("./word.js");

//Global Variables
var losses = 0;
var wins = 0;
const wordsArr = ["spiderman", "the hulk", "iron man", "captain america", "thor", "red witch", "starlord", "groot", "rocket", "antman"];
var word = "";

newGame()

function newGame() {
    
    //Get random word from array
    let random = Math.floor(Math.random() * wordsArr.length)
    word = new Word()
    word.setWord(wordsArr[random])
    display_game();
    //Remove current word from array
    wordsArr.splice(random,1)    
    request_letter();

}

function request_letter() {

    inquirer.prompt([{

        name: "userGuess",
        type: "input",
        message: "Please select a letter: "

    }]).then(function (response) {

        let userGuess = response.userGuess.toLowerCase();
        let alphabet = "abcdefghijklmnopqrstuvwxyz"

        //Validate the user guess
        if(userGuess.length > 1 || alphabet.indexOf(userGuess) < 0 ){

            console.log("Please enter one alpha character only.")
            request_letter();
            return
        }

        //Determine if letter was already guessed
        if (word.guessedLetters.indexOf(userGuess.toUpperCase()) < 0) {

            //If not, add it to array and check word
            word.guessedLetters.push(userGuess.toUpperCase());

            word.guessLetter(userGuess);
            let displayWord = word.toString();

            //If current guess is not part of the word
            if (displayWord.indexOf(userGuess) < 0) {

                word.remainingGuesses--

                if(word.remainingGuesses <=0){
                    losses++
                    display_game();
                    console.log("YOU LOSE!");
                    setTimeout(newGame,5000)
                    return;
                }

            }
            //If the word contains _ then ask for the next letter
            if (displayWord.indexOf("_") > -1) {
                display_game();
                request_letter();
            } else {
                wins++;
                display_game();
                console.log("YOU WIN!");
                setTimeout(newGame,5000)
            }

        //Letter already guessed, ask again
        } else {
            display_game();
            request_letter();
        }
    })

}
function display_game() {

    console.log(`\nGUESS THE MARVEL CHARACTER!\nWins: ${wins}\nLosses: ${losses}`.yellow + `\n\n${word.toString(word.remainingGuesses).toUpperCase()}\n\nRemaining Guesses: ${word.remainingGuesses}\nGuessed: ${word.guessedLetters.sort().join(" ")}`);

}