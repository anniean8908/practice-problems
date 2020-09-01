function wordCount(sentence){
  var space = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === " "){
     space++
    }
  }
  var words = space + 1;
  return words;
}

console.log("Total Count of 'You are so awsome' is", wordCount("You are so awsome"));
