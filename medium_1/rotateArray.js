// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

//     If the input is not an array, return undefined.
//     If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.
function p(arg) {
  console.log(arg);
}

/*
input: array (or not, need to guard against bad input)
output: array
rules:
  - the output array consists of the elements of the input array, with the first element moved to the end.
  - the input array should not be modified
  - return undefined if the argument is not an array
  - return an empty array if the argument is an empty array.
  - Q: do we need to make copies any array elements that are objects? Or can the output array contain references to elements of the input array?

examples:
  - [1,2,3,4] => [2,3,4,1]
  - [] => []
  - 'abc' => undefined

data structure:
  - arrays: copy of the input array

algorithm:
  - if the input is not an array, return undefined
  - if the input array is empty, return an empty array
  - slice the input array from 1 to end, assign to var output
  - push the first element from the input array onto output and return.

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let output = arr.slice(1);
  output.push(arr[0]);
  return output;
}

p(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
p(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
p(rotateArray(['a']));                    // ["a"]
p(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
p(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
p(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
p(rotateArray());                         // undefined
p(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
