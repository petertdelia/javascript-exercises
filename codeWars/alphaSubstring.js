// Longest alphabetical substring

// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

// Good luck :)

/*

input: string
output: string, a substring of the input string
rules:
  explicit:
    - return the longest substring that is in alphabetical order

algorithm:
  - declare variable substrings, empty array
  - generate a list of all substrings
    - iterate over string
    - begin at outerIdx 0 on outer loop, end at <= str.length - 2
    - begin at outerIdx + 2 on inner loop
    - push each substring to substrings array
  - filter the list, based on test that selects ones that are alphabetical, assign to variable alphaSubstrings
    - call filter on substrings
    - pass substr, call split on substr and sort, then join, see if the sorted string is the same as the original one. Return the boolean.
  - return the longest one
    - filter alphaSubstrings
      - find Math.max of the lengths of the substrings
        -Math.max(...alphasubstr.map(substr => substr.length))
      - callback returns truthy if the length of the substring equals math.max value
    -return element 0 of this list.

*/

console.log(longest("asdfaaaabbbbcttavvfffffdf"));
console.log(longest("asdfabc"));

var iterations = 10000;
console.time('Function #1');
for (let i = 0; i < iterations; i++ ) {
    longest("asdfaaaabbbbcttavvfffffdf");
}
console.timeEnd('Function #1');

function longest(str) {
  let substrings = [];

  for (let startIdx = 0; startIdx <= str.length - 1; startIdx += 1) {
    for (let endIdx = startIdx + 1; endIdx <= str.length; endIdx += 1) {
      let substr = str.slice(startIdx, endIdx);
      if (substr === substr.split('').sort().join('')) {
        substrings.push(str.slice(startIdx, endIdx));
      }
    }
  }

  let longestValue = Math.max(...substrings.map(substr => substr.length));

  return substrings.filter(substr => substr.length === longestValue)[0];
}
