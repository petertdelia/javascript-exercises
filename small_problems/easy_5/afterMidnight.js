// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

// You may not use javascript's Date class methods.

// Examples:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other complications.

// problem: write a function that takes an integer, positive or negative, and returns the time of day in 24 hour format (eg. 23:59). Do not use JavaScript's Date class methods. Disregard daylight savings or any other complications.

// input: integer
// output: time in 24 hour format
// requirements:
//    The output should be a string
//    Don't worry about added time complications
//    Don't use JS Date class

// data structure/algorithm:
//    declare variable hoursAndMins and assign it to equal input number % 1440.
//    declare variable relativeHours and assign it to equal Math.trunc(hoursAndMins / 60).
//    declare variable relativeMins and assign it to equal hoursAndMins % 60.
// declare variable hours and assign it to equal (relativeHours + 24) % 24
// declare variable mins and assign it to equal (relativeMins + 60) % 60
// use template literal to return hours and mins in appropriate format--padding needs help

function formatTime(hours,mins) {
  hours = String(hours).padStart(2,'0');
  mins = String(mins).padStart(2,'0');
  return `${hours}:${mins}`;
}

function timeOfDay(integer) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
  let hoursAndMins = integer % MINUTES_PER_DAY;

  if (hoursAndMins < 0) {
    hoursAndMins += MINUTES_PER_DAY;
  }

  let hours = Math.trunc(hoursAndMins / MINUTES_PER_HOUR);
  let mins = hoursAndMins % MINUTES_PER_HOUR;

  return formatTime(hours, mins);
}

// How would you approach this problem if you were allowed to use JavaScript's Date class? Suppose you also needed to consider the day of week? (Assume that deltaMinutes is the number of minutes before or after midnight between Saturday and Sunday; in such a method, a deltaMinutes value of -4231 would need to produce a return value of Thursday 01:29.) TODO: HAVE NOT DONE

// Part 2

// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.

// Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other irregularities.

// problem: write two functions. Let's break it down.
// for afterMidnight:
//    write a function that takes a string representing a 24 hour format time and returns the number of minutes after midnight represented by that string.

// data structure/algorithm:
//  set const MINUTES_PER_HOUR = 60. use split(':') to get an array with two string elements; the first is hours, the second minutes. Convert those strings to numbers and assign them to hours and minutes variables. If hours !== 24, Mulitply the hours by MINUTES_PER_HOUR to get minutes, and add it to the minutes variable to get minutes and return. Else return just the minutes.

function afterMidnight(time) {
  const MINUTES_PER_HOUR = 60;

  let [hours, minutes] = time.split(':').map(element => Number(element));

  return hours === 24 ? minutes : (hours * MINUTES_PER_HOUR) + minutes;
}

// for beforeMidnight:
//    write a function that takes a string representing a 24 hour format time and returns the number of minutes before midnight represented by that string.

// data structure/algorithm:
//    set const MINUTES_PER_HOUR = 60, HOURS_PER_DAY = 24, MINUTES_PER_DAY =  MINUTES_PER_HOUR * HOURS_PER_DAY. use split(':') to get an array with two string elements; the first is hours, the second minutes. Convert those strings to numbers and assign them to hours and minutes variables. If (hours % 24 === 0 %% minutes === 0), return 0. Else, multiply hours by MINUTES_PER_HOUR and add it to minutes, then subtract the result from MINUTES_PER_DAY and return. Else, subtract minutes from MINUTES_PER_DAY and return.

function beforeMidnight(time) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY =  MINUTES_PER_HOUR * HOURS_PER_DAY;

  let [hours, minutes] = time.split(':').map(element => Number(element));

  if (hours % 24 === 0 && minutes === 0) {
    return 0;
  } else {
    return MINUTES_PER_DAY - ((hours * MINUTES_PER_HOUR) + minutes);
  }
}