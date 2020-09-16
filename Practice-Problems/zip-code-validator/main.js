function zipCodeValidator(zipToValidate){
  if (zipToValidate.length === 5){
    !isNaN(zipToValidate);
    return true;
  } else {
    return false;
  }
}

console.log(zipCodeValidator("21594"));
console.log(zipCodeValidator("3Eds32"));
console.log(zipCodeValidator("9123465"));
