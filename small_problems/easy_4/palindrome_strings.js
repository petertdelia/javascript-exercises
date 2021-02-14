// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

// restate problem: write a function that returns a boolean: true if the passed in string is a palindrome and false otherwise.
// A palindrome is the same forwards and backwards. Case and all characters matter.

// input: string
// output: boolean

// data structures: string, array, array reverse method, comparison operator, if control flow statement, boolean

// algorithm: create an array of characters from the string, reverse it, coerce it to a string, and compare it to the passed in string. If they are equal, return true.

function isPalindrome(string) {
  let charArray = Array.from(string);

  return charArray.reverse().join('') === string;
}

// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

// restate problem: This time, the function should be case insensitive and ignore non-alphanumeric characters.

// algorithm: use regex to remove non-alphanumeric characters, and the string method toLowerCase().

function isRealPalindrome(string) {
  string = string.replace(/[^a-z0-9]/gi,"").toLowerCase();
  return isPalindrome(string);
}