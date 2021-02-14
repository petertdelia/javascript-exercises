// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

/*

input: string of words
output: the word that is the highest scoring, a string
rules: 
  explicit: 
    - each letter scores points according to its position in the alphabet, e.g. a = 1, z = 26
    - if two words score the same, return the word that appears earliest in the string
    
algorithm:
  - create an array of letters. Idx + 1 from the array will equal that letter's value
  - split the string into an array of words, assign to variable wordArr
  - Map wordArr so that it transforms each word into its equivalent numerical value, save to numberArr variable
    - 'word'.split('').reduce((accum, letter) => accum + wordVals.indexOf(letter), 0)
    - 

  - find the maximum of these values by using Math.max and passing numberArr with the spread operator, save to variable maxVal
  - find the numberArr.indexOf(maxVal). Return the value of wordArr at this index.

*/

console.log(high('man i need a taxi up to ubud'));

function high(words) {
  let wordVals = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let wordArr = words.split(' ');

  let numArr = wordArr.map(word => word.split('').reduce((accum, letter) => accum + (wordVals.indexOf(letter) + 1), 0));

  let maxVal = Math.max(...numArr);
  return wordArr[numArr.indexOf(maxVal)];
}
