// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// For C: do not mutate input.

// More examples in test cases. Good luck!

// If you like this Kata, please try:

console.log(solve('strength'));

/*

input: string
output: number
rules:
  - return the value of the consonant substring of the given string whose value is highest out of all consonant substrings
  - strings will be all alphanumeric and without spacees

algorithm:
  - create array of letters
  - initialize a results variable, assign to empty array
  - substr var, empty string
  - loop through input string
    - if the character isn't a vowel, concatenate char to substr
    - if it is a vowel, (as long as substr isn't empty) push substr to results, assign substr to empty string, and continue
  - loop through results
    - calculate the value of each substring 
    - keep track of the highest value
    - return the highest value
*/

function solve(str) {
  let letterValues = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let results = [];
  let substr = '';
  str.split('').forEach(letter => {
    if (!'aeiou'.split('').includes(letter)) substr += letter;
    if (substr !== '') {
      results.push(substr);
      substr = '';
    }
  });
  results.push(substr);
  return Math.max(...results.map(substr => substr.split('').reduce((accum, val) => accum + letterValues.indexOf(val) + 1, 0)));

}