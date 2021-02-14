/*

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

problem: write a function that:
input: an integer
output: an integer
requirements: the output integer should be:
  -the first number greater than the input integer that is:
  -not divisible by 2
  -divisible by 7
  -has no two digits that are the same
  -the maximum number that can fulfill these requirements is 9876543201.
    -if it is greater than 9876543201, it should return the following string:
      -"There is no possible number that fulfills those requirements."

data structure/algorithm:
  -check if the input is 9876543201 or greater. If it is, return the string "There is no possible number that fulfills those requirements."
  -beginning with the input number, iterate over each higher integer until 9876543201, checking the requirements. 
    -if divisibleBy2(number) 
      the number is divisible by 2 (number % 2 === 0) continue to next iteration
    -if indivisibleBy7(number) 
      indivisible by 7 (number % 7 !== 0) continue to next iteration
    -if containsDuplicateDigit(number)
      it contains duplicate digits, continue to next iteration
        -method for checking for duplicate digits:
        -create an empty object, uniqueDigits
        -create an array of the digits of the number by first converting to string then splitting them
        -loop over the array, check if the digit is in the uniqueDigits object. -If it is, return true.
        -if it isn't, add the digit to the object.
        -if it loops over the entire number and doesn't find a duplicate, return false.
    -if it doesn't continue, return the number.

*/

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = number + 1;

  for (featuredNum; featuredNum <= MAX_FEATURED; featuredNum += 1) {
    if (divisibleBy2(featuredNum)) continue;
    if (indivisibleBy7(featuredNum)) continue;
    if (containsDuplicateDigit(featuredNum)) continue;

    return featuredNum;
  }

  return "There is no possible number that fulfills those requirements.";
}

function divisibleBy2(number) {
  return number % 2 === 0;
}

function indivisibleBy7(number) {
  return number % 7 !== 0;
}

function containsDuplicateDigit(number) {
  let digits = {};
  let arr = String(number).split('');

  for (let idx = 0; idx < arr.length; idx += 1) {
    let num = arr[idx];
    if (digits[num]) {
      return true;
    } else {
      digits[num] = true;
    }
  }

  return false;
}

let unique = {}

let num = 1234;
let arr = String(num).split('');

for (let idx = 0; idx < arr.length; idx += 1) {
  let num = arr[idx];
  unique[num] ? console.log(false) : unique[num] = true;
}