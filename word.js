let Letter = require('./letter.js')

let Word = function(word){
  let currentWord = word.split('').map(x => new Letter(x + ''))

  this.printWord = function(){
    console.log(currentWord.map(x => x.isGuessed()))
  }

  this.guessLetter = function(letter){
    currentWord.map(x => x.checkLetter(letter))
    console.log(currentWord)
  }

}

module.exports = Word


