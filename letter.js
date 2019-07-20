//Letter constructor
function Letter(letter){
    this.letter = letter.toLowerCase(),
    this.guessed = false,
    this.toString = function(remainingGuesses){

        //turnery
        //return this.guessed ? this.letter: '_'

        //if(this.guessed === true){ WHAT I WROTE
        if(this.guessed){ //Preferred way
            return this.letter;
        }else if(this.letter === " " || this.letter === "-"  || remainingGuesses <=0){
            return this.letter;
        }else{
            return "_"
        }
    }
    this.guessLetter = function(userGuess){
        if(userGuess === this.letter){
            this.guessed = true;
        }
    }
}
module.exports = Letter