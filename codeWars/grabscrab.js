// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] ))

// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// Good luck!

/*

input: a string, an array of strings
output: an array of strings
rules:
  - the output array should contain the strings from the input array that contain the same letters as the input string
  - return matches in the same order that they appear in the input array
  - return an empty array if there are no matches

algorithm:
  - declare a matches variable assigned to an empty string
  - iterate through the input array
  - split the input string into an array, sort it, then join it. Do the same with the element at each index. check to see if the sorted, split string at each index equals the sorted input string
  - if they match, add the element from the array to matches
  - return matches

*/

function grabscrab(str, arr) {
  let matches = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (str.split('').sort().join('') === arr[idx].split('').sort().join('')) {
      matches.push(arr[idx]);
    }
  }

  return matches;
}