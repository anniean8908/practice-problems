function zipCodeValidator(zipToValidate){
  return zipToValidate.length === 5 && !isNaN(zipToValidate)
}

console.log(zipCodeValidator("21594"));
console.log(zipCodeValidator("3Eds32"));
console.log(zipCodeValidator("9123465"));
