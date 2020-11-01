function sumArray (array) {
  var sum = 0;
  for (var i = 0; i<array.length; i++){
    var num = array[i];
    sum += num;
  }
  return sum;
}

console.log(sumArray([3, 2, 4, 9, 6]));
console.log(sumArray([1, 2, 4, 5, 6]));
