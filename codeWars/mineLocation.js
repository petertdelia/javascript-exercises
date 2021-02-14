// You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

// Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

// The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.
// Examples:

console.log(mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] )) //=> returns [0, 0]
console.log(mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] )) //=> returns [1, 1]
console.log(mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] )) //=> returns [2, 1]

/*

input: a 2d array
output: an array of 2 integers
rules:
  explicit:
    - the returned array represents the location of the 1 in the input array
  implicit:
    - the location of the 1 is the index of the nested array within the outer array, and the index of the element within that nested array of the 1

algorithm:
  - declare variable location, assign to empty array
  - iterate through outer array and inner array, using conditional to search for 1
  - when it is found, push the outer array index and then the inner array index to location
  - return location

*/

function mineLocation(minefield) {
  let location = [];
  for (let outerIdx = 0; outerIdx < minefield.length; outerIdx += 1) {
    for (let innerIdx = 0; innerIdx < minefield[outerIdx].length; innerIdx += 1) {
      if (minefield[outerIdx][innerIdx] === 1) {
        location.push(outerIdx, innerIdx);
        return location;
      }
    }
  }
  return undefined;
}