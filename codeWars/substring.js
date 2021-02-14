// write a method that will return a substring based on specified indices.

console.log(substring('honey', 0, 2)) // => 'hon'
console.log(substring('honey', 1, 2)) // => 'on'
console.log(substring('honey', 3, 9)) // => 'ey'
console.log(substring('honey', 2)) // => 'n'

/*
input: string, two integers
output: string
rules:
  explicit:
    - the method returns a substring based on the indices provided in the second and third parameters
  implicit:
    - if the third parameters is higher than the last index of the string, return all remaining characters
    - if the third parameter is not given, default to 1
    - the third parameter is inclusive of the index

algorithm:
  - use slice to return the specified indices

*/

function substring(str, startIdx, endIdx = startIdx) {
  return str.slice(startIdx, endIdx + 1);
}

// without slice
/*

algorithm:
  - declare results variable, assign to empty string
  - iterate over str, beginning at startIdx and ending <= endIdx
  - concatenate character to results
  - return results

*/

function substring(str, startIdx, endIdx = startIdx) {
  let results = "";

  for (let idx = startIdx; idx <= endIdx; idx += 1) {
    if (idx > str.length - 1) break;
    results += str[idx];
  }

  return results;
}