var Word = require("./word.js");

const wordsArr = ["spiderman","the hulk","iron man","captain america","thor","red witch","starlord","groot","rocket","antman"];
var word = ""

newGame()

function newGame(){

    let random = Math.floor(Math.random() * wordsArr.length)
    word = new Word()
    word.setWord(wordsArr[random])
    console.log(word.toString());
    
}