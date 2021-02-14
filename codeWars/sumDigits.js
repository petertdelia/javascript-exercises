// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  console.log(sumDigits(10));  // Returns 1
  console.log(sumDigits(99));  // Returns 18
  console.log(sumDigits(-32)); // Returns 5

/*

input: number
output: number
rules:
  - output number represents the sum of the digits of the input number
  - takes the absolute value of each digit (converts negative to positive)

algorithm:
  - initialize sum variable at 0
  - convert the input number to a string
  - iterate over the chars of the string
  - if the character is a number, convert it to a number and add it to sum
    - check if character is a number by converting it to Number and check it using the Number.isNaN function and the NOT logical operator. If it evaluates to true, it's a number and add it to sum.
  - after iterating, return sum

*/

function sumDigits(num) {
  let sum = 0;
  num = String(num);
  for (let idx = 0; idx < num.length; idx += 1) {
    if (!Number.isNaN(Number(num[idx]))) {
      sum += Number(num[idx]);
      console.log(num[idx]);
    }
  }

  return sum;
}