function wordBuilder(word){
  var currentWord = "";
  var wordsArray = [];
  for (var i = 0; i < word.length; i++){
    currentWord += word[i];
    wordsArray.push(currentWord);
  }
  return wordsArray;
}


console.log(wordBuilder("JavaScript"));
console.log(wordBuilder("Moon"));
console.log(wordBuilder("Stars"));
