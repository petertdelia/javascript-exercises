// Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.
// Notes:

//     Words are separated with spaces
//     Each word will include at least 1 letter
//     There will be no exclamation marks in the middle of a word

// Examples

console.log(remove("Hi!")) // === "Hi"
console.log(remove("!Hi! Hi!")) // === "!Hi! Hi"
console.log(remove("!!Hi! !Hi!!")) // === "!Hi! !Hi!"
console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!")) // === "!!Hi!! Hi !Hi!"

/*

input:string
output: string
rules:
  - remove the minimum number of '!' from either side of each word in the input string to make their numbers equal
  - words are separated by spaces
  - words include at least 1 letter
  - no '!' in the middle of the word

algorithm:
  - function remove(), takes a string
    - split the input string into words
    - declare results array, empty array
    - iterate over the array
      - pass each word to removeExclams, push the result to results
    - join results and return
  
  - function removeExclams(), takes a word
    - declare var hasSeenChars, equals false
    - declare var startExs, equals 0
    - declare var endExs, equals 0
    - declare var chars, equals empty str
    - declare var min
    - iterate over input word
      - declare var char, equals word at idx
      - if char equals ! and hasSeenChars is false, increment startExs
      - if char equals ! and hasSeenChars is true, increment endExs
      - if char doesn't equal !, add char to chars and set hasSeenChars to true
    - reassign min, equals the min of startExs and endExs
    - concatenate the min of ! plus chars plus min of ! and returns the result

*/

function remove(str) {
  let wordArr = str.split(' ');
  let results = [];

  for (let idx = 0; idx < wordArr.length; idx += 1) {
    results.push(removeExclams(wordArr[idx]));
  }

  return results.join(' ');
}

function removeExclams(word) {
  let start = 0;
  let end = 0;
  let chars = '';
  let hasSeenChars = false;
  let min;

  for (let idx = 0; idx < word.length; idx += 1) {
    let char = word[idx];

    if (char === '!' && !hasSeenChars) start += 1;
    else if (char === '!' && hasSeenChars) end += 1;
    else {
      hasSeenChars = true;
      chars += char;
    }
  }

  min = Math.min(start, end);
  return '!'.repeat(min) + chars + '!'.repeat(min);
}