// We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

// Write a function that returns true if the word is balanced, and false if it's not.

/*
input: string -- alphabetic chars only, min 2 chars, lowercase only
output: boolean
rules:
  - each letter can be translated to a numeric value => a = 1...z = 26
  - if we split the input word into equal parts (ignoring the middle letter if the length is odd), then we can add the values of each letter from each half
  - if the sum of the values from each half equal each other, return true
  - otherwise, return false.

data structures:
  - strings -- input
  - if we want to map chars, array
  - math - addition
  - output -- boolean

algorithm:
  - get two halves of the input word
      - e.g. if length === 5, the middle char is index = 2. i.e. middleChar = Math.floor(length / 2);
      firstHalf equals slice(0, length / 2), secondHalf = slice(Math.ceil(str.length));
  - separate characters into two arrays, firstHalf, secondHalf
    - split('');
  - map characters to their number equivalents
    - return char.charCodeAt(0)
  - reduce arrays and sum numbers
  - compare sums and return true if they are equal

*/


function balanced(word) {
  let mapToNumber = char => char.charCodeAt(0);
  let firstHalf = word.slice(0, word.length / 2).split('').map(mapToNumber);
  let secondHalf = word.slice(Math.ceil(word.length / 2)).split('').map(mapToNumber);
  let firstHalfSum = firstHalf.reduce((accum, value) => accum + value);
  let secondHalfSum = secondHalf.reduce((accum, value) => accum + value);

  return firstHalfSum === secondHalfSum;
}

// Examples

console.log(balanced("zips")); //➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

console.log(balanced("brake")); //➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

// Notes

//     All words will be lowercase, and have a minimum of 2 characters.
//     Palindromic words will always be balanced.