function wordReformer (wordPart1, wordPart2) {
  if (typeof wordPart1 === "string" && typeof wordPart2 === "string") {
    return wordPart1 + wordPart2
  }
  return "Oh no! Please use string."
}

console.log(wordReformer("Prac", "tice"));
console.log(wordReformer("lov", "er"));
