// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

/*
- initialize count var to 0
- iterate over the twelve months
  - create date object with the appropriate year and month, date set to 13
  - check if the day on that date is a Friday.
    - if it is, increment count.
- after iterating, return count.

*/