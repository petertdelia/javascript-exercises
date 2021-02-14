// Write a method that finds all substrings in a string. No 1 letter words

console.log(substrings('band')) // => ['ba', 'ban', 'band', 'an,' and', 'nd']

console.log(substrings('world')); 

console.log(substrings('ppop'));
/*

input: string
output: array of strings
rules:
  explicit:
    - no 1 letter words
    - find all substrings
  implicit:
    - return an array of the substrings

algorithm:
  - declare empty array variable results
  - iterate over the string from startIdx = 0 and end <= str.length - 2
    - iterate again=> the inner loop (endIdx) should extend from startIdx + 2 to <= str.length 
      - use str.slice(startIdx, endIdx) to push string slice to results
  -return results

*/


function substring(str, startIdx, endIdx = startIdx) {
  let results = "";

  for (let idx = startIdx; idx <= endIdx; idx += 1) {
    if (idx > str.length - 1) break;
    results += str[idx];
  }

  return results;
}

function substrings(str) {
  let results = [];

  for (let startIdx = 0; startIdx <= str.length - 2; startIdx += 1) {
    for (let endIdx = startIdx + 2; endIdx <= str.length; endIdx += 1) {
      results.push(str.slice(startIdx, endIdx));
    }
  }

  return results;
}
