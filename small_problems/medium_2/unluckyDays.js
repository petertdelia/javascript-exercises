// Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

/*

problem: write a function that:
input: one integer, a year
output: an integer, which represents
requirements: 
  -the output should tell us how many friday the 13s there are in a given year
  -assume the year is greater than 1752, which is when the UK adopted the Gregorian Calendar
  -assume the future uses the same calendar as the present

data structure/algorithm:
-figure out what day a given year starts on.
  -figure out if it's a leap year
-iterate through the months of a year
-figure out what day the 13th falls on for each month
-if it's friday, add to the total

unknowns: what day any year starts on

Another variation of the above algorithm likewise works with no lookup tables. A slight disadvantage is the unusual month and year counting convention. The formula is

    w = ( d + ⌊ 2.6m − 0.2 ⌋ + y + ⌊ y / 4 ⌋ + ⌊ c / 4 ⌋ − 2c ) mod 7

where

    Y is the year minus 1 for January or February, and the year for any other month
    y is the last 2 digits of Y
    c is the first 2 digits of Y
    d is the day of the month (1 to 31)
    m is the shifted month (March=1,...,February=12)
    w is the day of week (0=Sunday,...,6=Saturday). If w is negative you have to add 7 to it.

For example, January 1, 2000. (year - 1 for January) 

algorithm:

-for the year 2000:

let year = 2000;

let fridayTheThirteenths = 0;

for (let month = 1; month <= 12; month += 1) {
    let Y = year;
    if (month === 11 || month === 12) {
      Y -= 1;
    }
    let y = year % 100;
    let c = Math.floor(year / 100);
    let d = 13;
    let w = Math.floor((d + (2.6 * month) + y + (y / 4) + (c / 4) - 2 * c) % 7)
    if (w < 0) {
      w += 7;
    }
    if (w === 5) {
      fridayTheThirteenths += 1;
    }
  }
}

*/

function fridayThe13ths(year) {
  let total = 0;
  for (let month = 1; month <= 12; month += 1) {
    let Y = year;
    if (month === 11 || month === 12) {
      Y -= 1;
    }
    let y = year % 100;
    let c = Math.floor(year / 100);
    let d = 13;
    let w = (d + (Math.floor(2.6 * month)) + y + (y / 4) + (c / 4) - (2 * c)) % 7;
    if (w < 0) {
      w += 7;
    }
    if (w === 5) {
      total += 1;
    }
  }
  return total;
}

// using Date object
function fridayThe13ths(year) {
  const UNLUCKY_DAY = 13;
  let total = 0;

  for (let month = 1; month <= 12; month += 1) {
    let day = new Date(`${year}-${month}-${UNLUCKY_DAY}`).getUTCDay();
    if (day === 5) total += 1;
  }
  
  return total;
}
