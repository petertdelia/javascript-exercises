// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// Examples:

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"

// problem: write a function that 
// input: takes a string and 
// output: returns that string, 
// requirements:
//    with every other character switched to uppercase, 
//    with every following character switched to lowercase. 
//    Count, but don't change, non-alphabetic characters when switching between uppercase and lowercase.

// data structure/algorithm: declare a results variable, assigned to an empty string. Use a for loop to iterate over the string. In the loop, if idx % 2 === 0, change the character at that index to uppercase and append it to the results string. Else, change it to lowercase and append it. Return result string.

function staggeredCase(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    result += idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }

  return result;
}

// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// Example:

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

// data structure/algorithm: declare an upperCase variable and set it to true. Declare a result variable, assigned to an empty string. Use a for loop to iterate over the string. Test to see if upperCase is true; if it is, change the character to upper case and append to result. If not, change the character to lower case and append to result. Then, Test to see if the character is alphabetic (/[a-z]/i.test(char)). If it is, see if upperCase is true and change it to false if it is. Otherwise, change it to false.

function staggeredCase(string, everyOther = true) {
  let result = '';
  if (everyOther) {
    for (let idx = 0; idx < string.length; idx += 1) {
      let char = string[idx];
      result += idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }
  } else {
    let upperCase = true;

    for (let idx = 0; idx < string.length; idx += 1) {
      let char = string[idx];
      result += upperCase ? char.toUpperCase() : char.toLowerCase();

      if (/[a-z]/i.test(char)) {
        upperCase = !upperCase;
      }
    }
  }
  
  return result;
}