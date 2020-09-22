//fogClearer(stringToClear)
//A string with the letters "f", "o", and "g" removed from the original string argument if those letters exist
//The string "It's a clear day!" if there are no instances of "f", "o", and "g" in the original string argument

//steps
// check the through the string
// if there are no f or o or g return "It's a clear day!"
// if there are f or o or g, remove it

function fogClearer(stringToClear){
  if (stringToClear.indexOf('f') === -1 && stringToClear.indexOf('o') === -1 && stringToClear.indexOf('o') === -1){
    stringToClear = "It's a clear day!"
    return stringToClear;
  } else {
    var newString = ""
    for (var i=0; i<stringToClear.length; i++){
      if (stringToClear[i] !== "f" && stringToClear[i] !== "o" && stringToClear[i]!=="g"){
        newString+=stringToClear[i];
      }
    }
    return newString;
  }

}




console.log(fogClearer("fffdarkooooooggggggg"));
console.log(fogClearer("I like nice trees"));
console.log(fogClearer("foogooooffffhuhooofff"));
