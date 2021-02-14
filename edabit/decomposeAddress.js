// Create a function that decomposes an address string into an array of five substrings:

//     Street Number
//     Street Name
//     City Name
//     State
//     Zip Code
/*

input: string
output: array of 5 strings
rules:
  - the input string contains five components of an address
  - break apart these components and return them as five elements of an array
  - the five components are:
    - street number: at least 1 number, at the beginning of the line
    - street name: two space-separated words, the second of which is two letters long
    - city name: one or two words (space-separated) followed by a comma
    - state: exactly two letters
    - zip code: exactly five numbers at the end of the string

  data structure:
    - string parsing methods (regex)
    - array as the return value

  algorithm:
    - create regexes for street number and name
      - street number & name: /^[0-9]+ [a-z]+ [a-z]{2}/i
      - street number: /^[0-9]+/
      - street name: /[a-z]+ [a-z]{2}/i
      - city: /([a-z]{3,})? ?[a-z]+,/gi
      - state: /[A-Z]{2}/g
      - zip: /[0-9]{5}$/g
    - match input str, assign to var street.
    -take a slice of the string starting at the length of street, assign to var cityStateZip and trim whitespace
    - split cityStateZip on ', ' first element is city
    - split second element on ' ', first element is state, second is zip.
    - place each var in its appropriate place in the array and return.

Notes

All street extensions will be shortened to two-letter formats.
*/

function decomposeAddress(address) {
  let regexArr = [/^[0-9]+/g, /[a-z]+ [a-z]{2}/gi, /([a-z]{3,})? ?[a-z]+,/gi,/[A-Z]{2}/g, /[0-9]{5}$/g];

  return regexArr.map(regex => {
    let match = address.match(regex)[0];
    if (match.includes(',')) {
      return match.slice(0, match.length -1).trim();
    } else return match;
  });
}

// Examples

console.log(decomposeAddress("557 Farmer Rd Corner, MT 59105"));
// ➞ ["557", "Farmer Rd", "Corner", "MT", "59105"]

console.log(decomposeAddress("3315 Vanity St Beverly Hills, CA 90210"))
// ➞ ["3315", "Vanity St", "Beverly Hills", "CA", "90210"]

console.log(decomposeAddress("8919 Scarecrow Ct Idaho Falls, ID 80193"));
// ➞ ["8919", "Scarecrow Ct", "Idaho Falls", "ID", "80193"]