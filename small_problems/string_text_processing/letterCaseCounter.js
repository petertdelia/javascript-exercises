// Lettercase Counter

// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// Examples:

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// problem: write a function that takes a string and returns an object. The object contains three properties; the number of lowercase letters in the string; the number of uppercase letters, and the number of characters that are neither.

// input: string
// output: object with three key/value pairs

// requirements: if the input string is empty, return an object where all the values are zero.

// data structure/algorithm:
//  declare results object, initialize each value to zero
  // Iterate over the input string. Use if blocks for /[A-Z]/.test(char), /[a-z]/.test(char), else it goes into the neither pile.
// return results object

function letterCaseCount(chars) {
  let results = {lowercase: 0, uppercase: 0, neither: 0};

  for (let idx = 0; idx < chars.length; idx += 1) {
    if (/[A-Z]/.test(chars[idx])) {
      results.uppercase += 1;
    } else if (/[a-z]/.test(chars[idx])) {
      results.lowercase += 1;
    } else {
      results.neither += 1;
    }
  }

  return results;
}