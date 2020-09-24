//steps
//create a holder for result named sumResult
//check throught each sub array in array
//create a holder named mulResult and assign a initial value for multiply
//inside loop check through each number in sub-array
//multiply each index and pass to initial number
//sum each mulResult and pass the value to sumResult
//return the value stored in sumResult


function volumeCalculator(boxesArray){
  var sumResult = 0;
  for (var i=0; i<boxesArray.length; i++){
    var mulResult =1;
    for (var j=0; j<boxesArray[i].length; j++){
      mulResult *= boxesArray[i][j];
    }
    sumResult +=mulResult;
  }
  return sumResult;
}

console.log(volumeCalculator([[3, 3, 3], [4, 4, 4], [5, 5, 5]]));
console.log(volumeCalculator([[5, 1, 4], [8, 5, 4], [3, 1, 7]]));
console.log(volumeCalculator([[5, 4, 2], [12, 15, 21], [7, 7, 7]]));
