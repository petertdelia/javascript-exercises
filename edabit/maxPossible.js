// Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.

/*

input: two arguments, both numbers
output: a number
rules:
  - the output number should be the largest number that can be made by swapping out digits from the second number into the first number.
  - each digit in the second number can only be used once.
  - you may use as many or as few digits from the second number as you would like.
  - assume valid input -- two arguments, both numbers

data structure:
  - array: convert first argument to string and split.
  - array: convert second argument to string and split.
  - join to string and convert to number at end.

algorithm:
  - convert second number to string, split, map to number, and assign to var swappingDigits
  - convert first number to string, split, map to number, assign to var largeDigits
  - iterate through largeDigits, starting with leftmost digit, using a for loop
    - check to see if the largest digit from swappingDigits is bigger than the digit from largeDigits.
    - To find largest digit from swappingDigits, use math.max(...swappingDigits)
      - if it is, reassign that element in largeDigits to equal the largest digit from swappingDigits AND splice that element out of swappingDigits
      - if it isn't, continue
  - after iterating, join largeDigits, convert to number, and return.

*/

function maxPossible(firstNum, secondNum) {
  let largeDigits = String(firstNum).split('').map(Number);
  let swappingDigits = String(secondNum).split('').map(Number);

  for (let idx = 0; idx < largeDigits.length; idx += 1) {
    if (Math.max(...swappingDigits) > largeDigits[idx]) {
      largeDigits[idx] = Math.max(...swappingDigits);
      swappingDigits.splice(swappingDigits.indexOf(Math.max(...swappingDigits)), 1)
      console.log('largeDigits: ', largeDigits);
      console.log('swappingDigits: ', swappingDigits);
    }
  }
  return Number(largeDigits.join(''));
}

// To illustrate:

console.log(maxPossible(9328, 456)) // ➞ 9658
// 9328, 456 => 9328, 456 => 9628, 45 => 9658, 4 => 9658, 4
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.

// Examples

console.log(maxPossible(3456, 847)) // => 8456, 47 => 8756, 4 => 8756

console.log(maxPossible(523, 76)) //➞ 763

console.log(maxPossible(9132, 5564)) //➞ 9655

console.log(maxPossible(8732, 91255)) //➞ 9755

// Notes

//     Each digit in the second number can only be used once.
    // Zero to all digits in the second number may be used.