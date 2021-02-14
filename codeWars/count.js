// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

/*

input: string
output: object
rules:
  - count every character in the input string. Enter the character as a key in the object, and the count as a value in the object
  - if an empty string is passed, return an empty object

algorithm:
  - declare an empty object, results
  - iterate over the string
  - for each character, either create a value at that key or increment it by 1
    - use assignment operator to assign a value at the character's key
    - on the right side of the operator, use an or logical operator to either assign it to + 1 or to 1.
  - return the object

*/

console.log(count('aba'));

function count(str) {
  let results = {};
  for (let idx = 0; idx < str.length; idx += 1) {
    results[str[idx]] = results[str[idx]] + 1 || 1;
  }

  return results;
}