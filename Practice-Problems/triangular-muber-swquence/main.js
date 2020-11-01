//Triangular Number Sequence

/*This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
The first 5 numbers of the sequence, or dots, are:
1, 3, 6, 10, 15

This means that the first triangle has just one dot, the second one has three dots,
the third one has 6 dots and so on.

Write a function that gives the number of dots with its corresponding triangle number of the sequence.

Examples
triangle(1) ➞ 1
triangle(6) ➞ 21
triangle(215) ➞ 23220 */

//n=1 1
//n=2 3
//n=3 6
//n=4 10
//n=5 15
//n=6 21

function triangle(n) {
  let result = 0;
  while (n > 0) {
    result += n;
    n--;
  }
  return result;
}

console.log(triangle(6))
console.log(triangle(21))
