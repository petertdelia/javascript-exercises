// Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

// Examples:

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// problem: write a function. It takes one argument, a string. It returns true if all characters inside the string are uppercase, otherwise false. Ignore non-alphabetic characters

// input: string
// output: boolean
//    explicit requirements: check that all alphabetic characters are uppercase. Ignore non-alphabetic characters
//    implicit requirements: if the string is empty, return true.
//    Assume string input

// data structure/algorithm: Call split('') on the string to create an array of characters. Then call filter on the result. Use regex.test to filter out non-alphabetic characters--that is, use /[A-Za-z]/.test(char). Assign the result to a variable, alphabetArr. Call every on alphabetArr; in the callback, pass char and test char === char.toUpperCase(). Return the result of every, which will be a boolean that tells us if every element in the alphabetArr passes the test.

function isUppercase(string) {
  let alphabetArr = string.split('').filter(char => /[A-Za-z]/.test(char));
  return alphabetArr.every(char => char === char.toUpperCase());
}