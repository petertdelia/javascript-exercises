
// Rotating Matrix

// As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

// A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

// 3  4  1
// 9  7  5
// 6  2  8

// A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

// 3  4  1
// 9  7  5

// its 90-degree rotation is:

// 9  3
// 7  4
// 5  1

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

// Examples:

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

/*

problem: write a function
input: takes a matrix, in the form of a two-dimensional array, of mxn rows and columns
output: a new 2-dimensional array
requirements: the matrix should be rotated by the function
  -rotation means: each side is rotated clockwise by 90 degrees
  -in more detail, columns of the input matrix become rows, and:
  -each column, from bottom to top, becomes each row, from left to right, and:
  -the first column becomes the first row, etc.

data structure/algorithm:
  -declare function rotate90(matrix)
  -create a new empty array
    -let outputArr = [];
  -fill that array (not using fill method) with appropriate number of subarrays, empty
    -appropriate number of subarrays is the length of the outer input array.
      -matrix.length
    -use for loop to push empty arrays to the output array
      -for (let num = 0; num < matrix.length; num += 1) {
        outputArr.push([]);
      }
  -fill the new array with appropriate elements from the input array
      -use double for loop, with outer counter 'column' and inner counter 'row', looping over input matrix
      -matrix[row][column] will increment down the column, then over to the next row
      -Array.prototype.unshift() will enter each value to the beginning of the outputArr row. Want to go over the entire row at each column, then go down to the next row. 
      -Set outputArrRow = column; outputArr[outputArrRow].unshift(matrix[row][column]) will insert each value at the beginning of the appropriate row
  -return the new array.
*/

function rotate90(matrix) {
  let outputArr = [];

  for (let num = 0; num < matrix[0].length; num += 1) {
    outputArr.push([]);
  }

  for (let column = 0; column < matrix[0].length; column += 1) {
    for (let row = 0; row < matrix.length; row += 1) {
      let outputArrRow = column;
      outputArr[outputArrRow].unshift(matrix[row][column]);
    }
  }

  return outputArr;
}