// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// restate problem:
//  write a function that takes a year as input, and returns the century associated with that year, as a string.
//  The century begins with a number, the century number, and ends with 'st', 'nd', 'rd', or 'th', whichever is correct given the century number. 
//  Each century begins with 01 and ranges to the following 00: 1801-1900, 1901-2000, etc.

//  input: positive integer, assume valid input
//  output: string, year with appropriate tag

// data structures: number, string, conditionals.

// algorithm: initialize a result variable. calculate the century first. Then add the suffix according to the rules. cent = Math.floor((year - 1) / 100) + 1
// suffix = 1,21,31, etc 'st'; 2, 22, 32, etc 'nd', 3, 23,33 etc 'rd', else 'th'
//  rule: if (cent % 100 >= 11 && cent %% 100 <= 13) then 'th'. Else if (cent % 10 === 1) then 'st', else if (cent % 10 === 2) then 'nd', else if (cent % 10 === 3) then 'rd', else 'th'.

function century(year) {
  let century = Math.floor(((year - 1) / 100) + 1);

  if (century % 100 >= 11 && century % 100 <= 13) {
    return String(century) + 'th';
  } else if (century % 10 === 1) {
    return String(century) + 'st';
  } else if (century % 10 === 2) {
    return String(century) + 'nd';
  } else if (century % 10 === 3) {
    return String(century) + 'rd';
  } else {
    return String(century) + 'th';
  }
}
