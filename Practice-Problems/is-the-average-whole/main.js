function avgWholeNumChecker(numArray){
  var num = 0;
  for (var i = 0; i<numArray.length; i++){
    num +=numArray[i];
  }
  var avgNum = num/numArray.length;
  if (Math.floor(avgNum) == avgNum){
    return true;
  } else {
    return false;
  }
}

console.log(avgWholeNumChecker([7, 7, 7]));
console.log(avgWholeNumChecker([2, 4, 6, 2, 3, 4, 1]));

// method 1 Math.floor(num) === num;
// method 2 loop through, if any i == "."
// method 3 num % 1 !== 0
// method 4 string.indexof(".") == -1
