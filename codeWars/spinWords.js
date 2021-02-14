// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: 

console.log(spinWords( "Hey fellow warriors" )) // => returns "Hey wollef sroirraw" 
console.log(spinWords( "This is a test")) // => returns "This is a test" 
console.log(spinWords( "This is another test" )) //)=> returns "This is rehtona test"

/*

input: string
output: string
rules:
  - reverse all words that are 5 or more letters long
  - strings will include only letters and spaces

algorithm:
  - split the input string into words
  - check each word, reverse it if it is at least length 5
    - use map, an if statement, split, reverse, join methods
  - join the array and return

*/

function spinWords(string) {
  return string.split(' ')
        .map(word => {
          if (word.length >= 5) {
            return word.split('').reverse().join('');
          } else return word;
        })
        .join(' ');
}