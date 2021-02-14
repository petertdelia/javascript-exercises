// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered

// Input strings s1 and s2 are null terminated.

// Examples

console.log(scramble('rkqodlw', 'world')) // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // ==> True
console.log(scramble('katas', 'steak')) // ==> False

/*

input: two strings
output: boolean
rules:
  - returns true if any substring of the first input string can be rearranged to form the second input string
  - only lowercase letters will be used
  - performance needs to be considered

algorithm:
  - split the first input string into an array
  - iterate over the second input string
    - use for loop
  - check to see if the array contains the value at each index of the second input string
  - if it does not, return false
      - if (!arr.includes(str[idx])) return false
  - if it does, remove that value from the array (use splice) and continue iterating
    - arrIdx = array.indexOf(str[idx]);
    - array.splice(arrIdx, 1);
  - if it reaches the end of the loop, return true

*/

function scramble(str1, str2) {
  let strArr = str1.split('');

  for (let idx = 0; idx < str2.length; idx += 1) {
    if (!strArr.includes(str2[idx])) return false;
    let arrIdx = strArr.indexOf(str2[idx]);
    strArr.splice(arrIdx, 1);
  }
  return true;
}
