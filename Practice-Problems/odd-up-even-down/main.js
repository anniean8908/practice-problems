function oddUpEvenDown(array) {
  var result = [];
  for (var i = 0; i<array.length; i+=2){
    array[i] = array[i] + 1;
    array[i+1] = array[i+1] - 1;
    if(!array[i+1]){
      result.push(array[i]);
    } else {
      result.push(array[i], array[i + 1]);
    }
  }
  return result;
}

console.log(oddUpEvenDown([1, 2, 3, 4, 5]));
console.log(oddUpEvenDown([23, 15, 18, 14, 32]));
console.log(oddUpEvenDown([72, 212, 77, 124, 53]));
