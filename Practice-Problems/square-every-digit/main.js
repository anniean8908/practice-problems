/* Square Every Digit
Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181
squareDigits(2483) ➞ 416649
squareDigits(3212) ➞ 9414

Notes
The function receives an integer and must return an integer.*/

function squareDigits(n) {
  let result=''
  for (let i = 0; i < String(n).length; i++){
    result+=Math.pow(String(n)[i],2)
  }
  return Number(result)
}

console.log(squareDigits(9119))
