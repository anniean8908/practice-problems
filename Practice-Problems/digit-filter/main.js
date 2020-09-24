//steps
//create an empty holder to store the result
//check through each number store in numbersArray
//transfer each number to string and compare it's length with the value pass in numberFulter
//if its the same, push that number to result
//return result


function digitFilter(numbersArray, numberFilter) {
  var result =[];
  for (var i=0; i<numbersArray.length; i++){
    if (numbersArray[i].toString().length === numberFilter){
      result.push(numbersArray[i]);
    }
  }
  return result;
}


console.log(digitFilter([23, 312, 24, 243, 43], 3));
console.log(digitFilter([23, 315, 231, 54, 72], 2));
console.log(digitFilter([1, 4323, 23, 4565, 3, 4], 1));
