var Letter = require("./letter.js");

// var newWord = new Word() 
// newWord.setWord("brienne of tarth")
// console.log(newWord.toString())


//Word constructor
function Word(){
    this.wordArr = [],
    this.setWord = function(wordStr){
        for(var i = 0;i<wordStr.length;i++){
           
            let myletter = new Letter(wordStr[i]);
            this.wordArr.push(myletter)
        }
    },
    this.toString = function(remainingGuesses){
       
        let displayWord = "";
        for(var i = 0;i< this.wordArr.length;i++){
           
            displayWord = displayWord + this.wordArr[i].toString(remainingGuesses) + " ";
        }
        return displayWord;
    },
    this.guessLetter = function(userGuess){
        for(var i = 0;i< this.wordArr.length;i++){
            this.wordArr[i].guessLetter(userGuess);
        }
    },
    this.remainingGuesses = 8,
    this.guessedLetters = []    

}
module.exports = Word;