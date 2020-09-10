function removeNullValues(array) {
  var newArray = [];
  for(var i =0; i<array.length; i++){
    if(array[i] != null){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(removeNullValues([3, 5, null, null, 87, "hello", "goodbye"]));
console.log(removeNullValues([null, null, null, 7, null, "eight"]));
console.log(removeNullValues([null, null, null, 7, null, "eight"]));
