function meanCalculator (array){
  var sum = 0;
  for (var i = 0; i<array.length; i++){
    sum +=array[i];
  }
  return sum/array.length;
}

console.log(meanCalculator([1, 5, 7, 8, 0, 4]));
console.log(meanCalculator([1, 3, 5, 7, 9, 2]));
