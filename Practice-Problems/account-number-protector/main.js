// need a function recieve a 16 digit of number as paramiter
  //accountNumberProtector(cardNumberString)
// pick last 4 numbers and add ** in front of numbers
// return the protected credit card number

//example input accountNumberProtector("5543223485638832")
//example output "**8832"

//steps
//remove first 12 numbers and store in a new holder (lastFour)
//concatenate ** with the value store in lastFour and store the value to a holde call result
//return the result

function accountNumberProtector(cardNumberString){
  var lastFour = cardNumberString.slice(12);
  var result = "**"+lastFour;
  return result;
}

console.log(accountNumberProtector("5543223485638832"));
console.log(accountNumberProtector("8934235477210943"));
console.log(accountNumberProtector("7513635499320192"));
