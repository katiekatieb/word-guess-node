let Letter = function(x){
  this.character = x
  this.guessed = false

  this.isGuessed = function() {
    return this.guessed ? this.character : '_'
  }

  this.checkLetter = function(letter){
    return letter === this.character ? this.guessed = true : this.guessed
  }
}

module.exports = Letter
