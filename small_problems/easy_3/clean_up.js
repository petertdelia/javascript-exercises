// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:

cleanUp("---what's my +*& line?");    // " what s my line "

// restate problem:
// write a function that takes a string of characters. Return that string with all non-alphabetic characters removed, and a space inserted instead. Insert only one space for multiple consecutive non-alphabetic characters.

// input: string of characters
// output: string of alphabetic characters plus a max of one space between each

// data structures: string, string methods, iteration

// algorithm:
//  initialize a new empty string, result, and a boolean variable, insertSpace, set to true. Start a for loop that terminates after it has iterated over all characters in the input string. In the loop, use match(?) to check if the character at each index is alphabetic. If it is, append it to the result string and set insertSpace to true. If it is not, skip the character at that index but append a space if insertSpace is set to true. Then set it to false. When the loop is done, return the result variable.

function cleanUp(string) {
  let result = "";
  let insertSpace = true;

  for (let idx = 0; idx < string.length; idx++) {
    if (/[A-Za-z]/.test(string.charAt(idx))) {
      result += string.charAt(idx);
      insertSpace = true;
    } else if (insertSpace) {
      result += " ";
      insertSpace = false;
    }
  }
  return result;
}