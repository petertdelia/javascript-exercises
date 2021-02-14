// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// Examples:
// problem: write a function that takes a string and returns a new string consisting of the characters in the input string and in which only consonants are doubled (see part 1 "repeater" for a similar but simpler problem).

// input: string
// output: string with consonants doubled

// data structure/algorithm
//  split the string into an array using split(""). Use map to create and return a new array. In the map callback function, provide a test for each character that uses two RegExp test() to see if that character is alphabetical (ignoring case) and that it is not a vowel (ignoring case). If it evaluates to true, use string concatenation to return two of that character to map. Else, just return the char. Use join("") to create a string from the array. Return the result.

function doubleConsonants(string) {
  return string.split("").map(char => {
    if (/[a-z]/i.test(char) && /[^aeiou]/i.test(char)) {
      return char + char;
    } else {
      return char;
    }
  }).join("");
}