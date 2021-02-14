// You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:

// can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])

// Write a function that returns true if you can build the following numbers using only the digits you have.

/*
input: two arrays, the first one consists of ten elements, all numbers. The   second might be empty, but contains only numbers if it has any elements
output: boolean
rules:
  - the first input array represents the number of digits that we have available at that respective index. e.g. at index 1 of the first input array, if the number at that index is 3, that means we have three '1's digits available to use.
  - we use these digits to build the numbers in the second input array. Each time a digit is encountered in the second input array, the number at the respective index for that digit in the first input array is decremented by one.
  - If we try to decrement a digit's number at the appropriate index in the first input array and it's already 0, that means we don't have any more of that digit and we return false.
  - The output boolean represents whether we have enough digits available to construct all of the numbers in the second input array.
  - if we have enough digits to construct all of the numbers in the second input array, we return true.
  - assume we have two arguments which are both arrays.
  - assume that the first input array will always contain ten elements whose values are numbers >= 0.
  - if the second input array is empty, return true.

data structure:
  - input: two arrays
  - in the function:
    - array methods and element access
  - return value: boolean

algorithm:
  - check if the second input array is empty -- if it is, return true.
  - iterate over the second input array using for loop.
    - set a hasDigits var to true;
    - parse each number as a string, split it, use a forEach loop and look at each digit in turn.
    - check to see if the first input array at the index of each digit is > 0.
      - first input arr: numberOfDigits = [0, 1, 2, 2, 3, 0, 0, 0, 1, 1];
      - second input array element: num = 123;
      - String(num).forEach(digit => {
        if (numberOfDigits[Number(digit)] > 0) 
      })
      - if it is, decrement it by 1.
      - if it isn't, set hasDigits to false.
  - after iterating, return hasDigits.

*/

function canBuild(numberOfDigits, numbers) {
  if (numbers.length === 0) return true;
  let hasDigits = true;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    let number = String(numbers[idx]);

    number.split('').forEach(digit => {
      if (numberOfDigits[Number(digit)] > 0) {
        numberOfDigits[Number(digit)] -= 1;
      } else hasDigits = false;
    });
  }

  return hasDigits;
}

// Examples

console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])); // ➞ true
console.log(canBuild([1, 1, 2, 1, 1, 1, 1, 1, 1, 0], [234, 567, 821])); // => true

// You have: one 1, two 2s, two 3s, three 4s, one 8 and one 9
// Using only these digits, you can build 123, 444, and 92

console.log(canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44])); // ➞ false

console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [])); // ➞ true

console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3])); // ➞ false