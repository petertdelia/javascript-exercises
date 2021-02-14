// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O  X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Examples:

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('hello'));      // false


/*
input: string
output: boolean
rules:
  - the function returns true if the input string can be spelled using the given letter blocks
  - only one letter from each pair of letter blocks may be used in a given word
  - ignore case

algorithm:
  - create a nested array with capital letters as values in each subarray
  - create an empty object, seen
  - iterate through the input string
  - for each letter, convert to uppercase,
  - lookup the array index
    - loop trhough VALID_LTTERS
    - see if each the array at each  index contains the letter. If it does, then: 
    - if we have already seen it, increment it by 1
  -  if we haven't seen it yet, set the value at that index key in seen to 0
  - filter the values of seen
    - return the ones that have a value of 1 or greater
  - return whether this filtered array has a length greater than 0
  - if we encounter a value of 1, return valse
  - otherwise return true

*/

function isBlockWord(str) {
  const SPELLING_BLOCKS = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

  let seen = {};
  for (let idx = 0; idx < str.length; idx += 1) {
    let letter = str[idx].toUpperCase();
    for (let jdx = 0; jdx < SPELLING_BLOCKS.length; jdx += 1) {
      if (SPELLING_BLOCKS[jdx].includes(letter)) {
        seen[jdx] = seen[jdx] === 0 ? seen[jdx] + 1 : 0;
      }
      if (seen[jdx]) return false;
    }
  }

  return Object.values(seen).filter(value => value > 0).length === 0;
}

/*
alternate algorithm:
  - create var SPELLING_BLOCKS with subarrays of each block
  - create var seen with empty array
  - loop through input string
  - check if the current letter is already in seen
  - for each letter, loop through SPELLING_BLOCKS.
  - if it is, return false
  - if it is not, add the elements from the subarray into seen 
  - after iteration, return true
*/


function isBlockWord(str) {
  const SPELLING_BLOCKS = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

  let usedLetters = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    let letter = str[idx].toUpperCase();
    if (usedLetters.includes(letter)) return false;

    SPELLING_BLOCKS.forEach(block => {
      if (block.includes(letter)) {
        usedLetters.push(...block);
        console.log(usedLetters);
      }
    });
  }

  return true;
}

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let letters = word.split('');

  for (let index = 0; index < letters.length; index += 1) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[index].toUpperCase()) > -1;
    });
    console.log(matchingBlock);
  }
}