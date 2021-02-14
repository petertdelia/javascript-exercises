// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

console.log(duplicateEncode("din")) //,"(((");
console.log(duplicateEncode("recede")) //,"()()()");
console.log(duplicateEncode("Success")) //,")())())","should ignore case");
console.log(duplicateEncode("(( @")) //,"))((");

/*

input: string
output: string
rules:
  - the output string should replace every character in the input string with either a '(' or ')'
  - replace char with '(' when that character only appears once in the input string
  - replace char with ')' when that character appears more than once in the input string
  - ignore case
  - ')' appears even before that character has appeared more than once

algorithm:
  - replace input string with a lower case version
  - create an object whose keys are characters in the input string and whose values are counts of those characters.
    - initialize empty object
    - iterate over the string
    - either increment the object at the character's key, or initialize it at 1 if the key doesn't yet exist
  - split the input string and map it. If the value at the key is greater than 1, return closed parens. Else return open parens
  - join the mapped array and return it

  */

function duplicateEncode(str) {
  str = str.toLowerCase();
  let count = {};

  str.split('').forEach(char => {
    count[char] = count[char] + 1 || 1;
  });
  
  return str
    .split('')
    .map(char => {
      if (count[char] > 1) return ')';
      return '(';
      })
    .join('');

}

