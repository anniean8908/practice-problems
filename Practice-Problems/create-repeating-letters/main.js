function createRepeatingLetters(word, numOfRepeats) {
  var newWord = '';
  for (var i = 0; i < word.length; i++){
    for (var j = 0; j < numOfRepeats; j++){
      newWord += word[i];
    }
  }
  return newWord;
}

console.log(createRepeatingLetters("hello", 3));
console.log(createRepeatingLetters("nice", 5));
