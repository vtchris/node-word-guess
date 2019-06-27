//Letter constructor
function Letter(letter){
    this.letter = letter.toLowerCase(),
    this.guessed = false,
    this.toString = function(){
        if(this.guessed === true){
            return this.letter;
        }else if(this.letter === " " || this.letter === "-"){
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