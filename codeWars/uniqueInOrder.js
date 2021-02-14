// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       //== [1,2,3]
console.log(uniqueInOrder([]));   

/*

input: string or array
output: array
rules:
  explicit:
    - return an array of the values of the input sequence, with any repeated values removed
    - preserve the original order of elements

algorithm:
  - declare results variable = []
  - check if the input is an array. If not, split the string into an array
  - declare variable value = arr[0]
  - Iterate over the array, starting at idx 1
    - declare currentVal = arr[idx];
    - if (currentVal !== value) 
      - results.push(value)
      - value = currentVal;
  - after iterating, return results

*/

function uniqueInOrder(iterable) {
  let results = [];

  for (let idx = 0; idx < iterable.length; idx += 1) {
    if (iterable[idx] !== iterable[idx - 1]) {
      results.push(iterable[idx]);
    }
  }

  return results;
}