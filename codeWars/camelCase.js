// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

solution("camelCasing")  ==  "camel Casing"

/*

input: string
output: string
rules:
  explicit requirements:
    - break up camel cased words using a space between them
  implicit requirements:
    - camel casing is using a capital letter to denote a new word, with no space between letters/characters

algorithm:
  - declare variable wordArr, assign to empty array
  - declare variable wordStr, assign to empty string
  - iterate through the input string
  - When we encounter a capital letter
    - add wordStr to wordArr, reassign wordStr to an empty string.
  - add each character to variable word
  - after iteration, join wordArr with a space and return

*/

function solution(string) {
  let wordArr = [];
  let wordStr = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === string[idx].toUpperCase()) {
      wordArr.push(wordStr);
      wordStr = '';
    }
      wordStr += string[idx];
  }
  wordArr.push(wordStr);

  return wordArr.join(' ');
}