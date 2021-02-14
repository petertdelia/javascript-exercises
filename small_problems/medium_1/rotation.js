// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

//     If the input is not an array, return undefined.
//     If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

/*

problem: write a function that:
  input: array
  output: array
  requirements:
    -the function must move the first element of the array to the end of the array.
    -it returns a new array
    -do not modify the input array
    -if the argument is not an array, return undefined
    -if the argument is an empty array, return an empty array

data structure/algorithm:
  -check if argument is an array
  -check if input array is empty
  -create a copy of the input array
  -remove the first element of the copy
  -append the element to the end of the copy
  -return the copy

  more formally:
  -if !Array.isArray(argument) return undefined
  -if argument.length === 0 return []

  copy = argument.slice()
  copy.push(copy.shift())
  return copy

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let copy = array.slice();
  copy.push(copy.shift());
  return copy;
}

// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

// Examples:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

/*

problem: write a function that:
input: two arguments, both integers;
output: an integer
requirements:
  -'rotate' the first argument by the 'count' given in the second argument
  -to 'rotate' means to count backwards from the end of the first argument, using the second argument as the count. A '1' indicates the right-most digit, a '2' the second-from-right, etc.
  -Then to 'rotate' means to remove that digit from the rest of the number and to append it to the end of the result.
  -assume valid input
  -return a number

data structure/algorithm:
  -locate the digit in the first argument referred to by the second argument;
    -convert the first arg to a string
    -firstArg = String[firstArg]
    -digit = firstArg[firstArg.length - secondArg]
  -remove that digit from the number
    -firstArg = firstArg.replace(firstArg[firstArg.length - secondArg], '')
  -append the digit to the end of the number, convert to number and return it
    -firstArg += digit;
    -return Number(firstArg)

*/

function rotateRightmostDigits(integer, count) {
  integer = String(integer);
  let digitIndex = integer.length - count;
  let digit = integer[digitIndex];
  integer = integer.replace(integer[digitIndex], '');
  integer += digit;
  return Number(integer);
}

// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

/*

problem: write a function that:
input: an integer
output: the maximum rotation of that integer
requirements:
  -the 'maximum rotation' is defined as follows:
    -rotate the first number to the end, everything else goes to the left
    -rotate the second number;
    -rotate every remaining number
    -if there is/(are?) a leading zero in the final number, it/(they?) gets dropped

data structure/algorithm:
  -pass arguments to the rotateRightMostDigits function. Our function should pass 'number.length' number of arguments, each one counting down from number.length to 1. Each iteration must save the number that is returned by the previous iteration, and pass that return value to the next iteration.

  more formally,
    -define maxRotation(integer)
      -define newInt = integer;
      -for (let count = integer.length; count >= 1; count -+ 1)
        -newInt = rotateRightmostDigits(newInt, count);
      -loop done
      -return newInt;
*/

function maxRotation(integer) {
  let newInt = integer;

  for (let count = String(integer).length; count >= 1; count -= 1) {
    newInt = rotateRightmostDigits(newInt, count);
  }

  return newInt;
}