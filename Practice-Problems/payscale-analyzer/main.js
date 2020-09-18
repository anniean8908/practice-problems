//create an function and recieve an array as an paremiter
//create a holder for the smallest number (min)
//set first number in the array as min default number
//create another holder for the largest number (max)
//set first number in the array as max default number
//check each number in the array
//compare current min with next number in array and store the smaller number to min
//compare current max with next number in array and store the larger number to max
//use largest number decrement the smallest number to recieve final result


function payscaleAnalyzer(payList){
  var min = payList[0];
  var max = payList[0];
  for (var i = 0; i < payList.length; i++){
    if (min > payList[i]) {
      min = payList[i]
    }
    if (max < payList[i]) {
      max = payList[i]
    }
  }
  return max - min;
}

console.log(payscaleAnalyzer([28, 34, 21, 39]));
console.log(payscaleAnalyzer([18, 22, 19, 26]));
console.log(payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]));
