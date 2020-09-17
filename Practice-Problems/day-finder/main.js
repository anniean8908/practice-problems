// function dayFinder(stringDate)
// stringDate - a JavaScript string in a date format "MM/DD/YYYY"
// sample input dayFinder("05/22/1946") => sample output "Wednesday"


//steps
//define function dayFinder with 1 parameter
//store week day strings in a holder named weekDays
//use getDay method to recieve an index and store in a holder named weekDayIndex
//find weekDayIndex of weekDays and return the result

function dayFinder(stringDate) {
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var weekDayIndex = new Date(stringDate).getDay();
  return weekdays[weekDayIndex];
}

console.log(dayFinder("05/22/1946"));
console.log(dayFinder("01/20/2001"));
console.log(dayFinder("03/15/1988"));
