// convertMinutesToSeconds(timeToConvert)
// timeToConvert - a string which represents a time in minutes and seconds
// Sample convertMinutesToSeconds("15:34")

//steps
//declare a function takes 1 parameter
//create a holder and pick the minutes value from string named minutes;
//create a holder and pick the sec value from string named seconds;
//return the minutes convert to seconds + secounds

function convertMinutesToSeconds(timeToConvert) {
  var minutes = timeToConvert.slice(0,2);
  var seconds = timeToConvert.slice(-2);
  return parseInt(minutes) * 60 + parseInt(seconds);
}

console.log(convertMinutesToSeconds("15:34"));
console.log(convertMinutesToSeconds("02:45"));
console.log(convertMinutesToSeconds("08:21"));
