// need a function take 2 parameters spellChecker(userWords, correctWords)
// userWords - an array of words in string format
// correctWords - an array of words in string format
// sample input: spellChecker(["java", "CDS", "HTMO"], ["java", "CSS","HTML"])
// sample output: {correct: ["java"], incorrect: ["CDS","HTMO"]}

//steps
// create an empty holder for correct items named correct
// create an empty holder for incorrect list items named incorrect
// check throught each string in the list and compare if it is same
// if same, save in the correct holder
// if not same, save in the incorrect folder
// create an holder for the result
// return the result

function spellChecker(userWords, correctWords){
  var correct = [];
  var incorrect = [];
  for (var i=0; i<userWords.length; i++){
    if(userWords[i]===correctWords[i]) {
      correct.push(userWords[i])
    } else {
      incorrect.push(userWords[i])
    }
  }
  var result = {};
  result.correct = correct;
  result.incorrect = incorrect;
  return result;
}

console.log(spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"]));
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"]));
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"]));
