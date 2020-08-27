function phAnalyzer (testingSample) {
  if (testingSample == 7) {
    return "The result is Neutral."
  } else if (testingSample >= 0 && testingSample<= 6) {
    return "the result is Acid"
  } else if (testingSample >= 8 && testingSample <= 14){
    return "the result is Alkaline"
  } else {
    return "invalid input"
  }
}

console.log(phAnalyzer(4));
console.log(phAnalyzer(7));
console.log(phAnalyzer(13));
console.log(phAnalyzer(20));
