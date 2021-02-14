// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// Examples:

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// problem: write a function that 
// input: takes a string. 
// output: It returns the string with 
// requirements: every uppercase letter changed to lowercase 
//    and vice versa.
//    Leave non-alphabetic characters unchanged.

// data structure/algorithm: split the string into characters. Map the characters, testing to see if char is an uppercase character. Use /[A-Z]/.test(char). If true, change the case (toLowerCase()) Else if (/[a-z]/.test(char)) toUpperCase(). Join the mapped array using '' and return.

function swapCase(string) {
  return string
  .split('')
  .map(char => {
    if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  })
  .join('');
}