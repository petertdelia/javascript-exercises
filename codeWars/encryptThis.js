// Description:

// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter needs to be converted to its ASCII code.
//         The second letter needs to be switched with the last letter
//     Keepin' it simple: There are no special characters in input.

// Examples:

console.log(encryptThis("Hello") === "72olle")
console.log(encryptThis("good") === "103doo")
console.log(encryptThis("hello world") === "104olle 119drlo")

/*

input: string of space-separated words
output: string
rules:
  - convert the first letter of each word to its ASCII code equivalent
  - exchange the second letter with the last letter of each word
  - return the modified string
  - there are no special input characters

algorithm:
  - split the string by word
  - map each word
    - split the word, assign to variable letters
    - change the value at index 0 to code equivalent
    - swap second and last values
    - join letters
    - return
  - join the array

*/

function encryptThis(string) {
  return string.split(' ')
        .map(word => {
          let letters = word.split('');
          letters[0] = letters[0].charCodeAt(0);
          [letters[letters.length - 1], letters[1]] = [letters[1], letters[letters.length - 1]];
          return letters.join('');
        })
        .join(' ');
}