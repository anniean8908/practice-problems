function decimalCounter (num) {
  var counter = 0;
  for (var i = 0; i<num.length; i++){
    if (num[i-1] === "."){
      for (var j=i; j<num.length; j++) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(decimalCounter("127.245"));
console.log(decimalCounter("145"));
console.log(decimalCounter("23.00"));
