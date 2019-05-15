let inquirer = require("inquirer");
let Word = require('./word.js')
let word = new Word('banana')
console.log(word)

start()

function start(){
  inquirer.prompt([
    {
      type: "input",
      message: "Guess a letter!",
      name: "letter"
    }
  ])
  .then(function(res) {
    word.printWord()
    word.guessLetter(res.letter)
    word.printWord()
    start()
  });
};
