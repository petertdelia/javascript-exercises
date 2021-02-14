// A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

// To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

// 1  4  3
// 5  7  9
// 8  2  6

// Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

// Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const threeX4 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,0,1,2],
  [3,4,5,6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

/*

problem: write a function that:
input: a 3 X 3 matrix, or two-dimensional array, that is, an array that contains 3 inner arrays, each of which contains 3 elements
output: a new two-dimensional array, which is the transpose of the input array
requirements:
  -the transpose is a matrix that exchanges rows and columns of a given matrix.
  -leave the input array non-mutated.

data structure/algorithm:
  -create a new array, with three empty inner arrays.
  -use a double for-loop, with x and y as its counters, that loops from 0 to 2.
  -push values from the input array at [x][y] to the new array at [y][x].
  -return the new array.

*/

function transpose(matrix) {
  let newMatrix = [[],[],[]];

  for (let row = 0; row <= 2; row += 1) {
    for (let column = 0; column <= 2; column += 1) {
      newMatrix[row][column] = matrix[column][row];
    }
  }

  return newMatrix;
}

/*

to transpose in-place:
algorithm:
  -use a double for loop with rows and columns
  -instead of setting the new matrix at row,column to old matrix at column, row, we need to swap row, column; column, row, with column, row; row column.
  -use array destructuring to swap
  -PROBLEM: the above method swaps everything twice, which puts everything back to its original place. How do we avoid that?
  -solution: create an object, swaps, whose keys are rows and columns, columns and rows, and whose values are booleans.

*/

// transposes in-place; works for any square matrix
function transpose(matrix) {
  let swaps = {};

  for (let row = 0; row < matrix.length; row += 1) {
    for (let column = 0; column < matrix.length; column += 1) {
      if (!isSwapped(row, column, swaps)) {
        [matrix[row][column], matrix[column][row]] = [matrix[column][row], matrix[row][column]];
      }
      swaps[[row,column]] = true;
    }
  }

  function isSwapped(row, column, swaps) {
    return swaps[[column, row]];
  }
}

matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

[ [], [], [], [] ]
Array(3).fill([]);

// for mxn matrix
function transpose(matrix) {
  let newMatrix = [];

  for (let row = 0; row < matrix[0].length; row += 1) {
    // newMatrix.push([]);
    for (let column = 0; column < matrix.length; column += 1) {
      newMatrix[row][column] = matrix[column][row];
    }
  }

  return newMatrix;
}
