// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// Example:

interleave([1, 2, 3], ['a', 'b', 'c']);  // [1, "a", 2, "b", 3, "c"]

// problem: write a function that takes two arrays as arguments. It returns a new array that contains all of the elements of the passed arrays, with alternating elements from each.

// inputs: two arrays
// output: one new array
//    requirements:
//    -assume that both input arrays are of equal length
//    -assume that input arrays are non-empty
//    -output a new array, do not mutate input arrays

//  data structure/algorithm:
//    arrays, looping structure.
//    -initialize a variable, result, as an empty array
//    -loop over input arrays. For each iteration, first push an element onto the result variable from the first input array, then from the second input array. Return result.

function interleave(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    result.push(array1[idx]);
    result.push(array2[idx]);
  }
  return result;
}

// use the forEach() method
// algorithm:
//  initialize an array, result, the length of one of the input arrays * 2.
//  use the forEach method on the result method. Use both element and index. In each iteration, test to see if the index is even or odd. If even, shift a value from array1, assigned to the element. Else, shift a value from array2, assigned to the element. Return the result.

function interleave(array1, array2) {
  let result = [];
  result.length = array1.length * 2;
  result.fill(0);
  result.forEach((element, index, array) => {
    index % 2 === 0 ? array[index] = array1.shift() : array[index] = array2.shift();
  });
  return result;
}