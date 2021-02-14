// You have an array of integers. You need to calcurate the difference between 1st biggest number and 2nd biggest number of an array.

    console.log(diffBig2([10, 5, 2]));

// In this case, 1st biggest number is 10 and 2nd biggest number is 5. So, this function return 5, the result of 10 - 5.

// You can assume that the input array must have 2 or more elements.

// The input array has the sort() method disabled, so you will have to solve it in another way.

/*

input: array of numbers
output: number
rules:
  - find the two biggest numbers in the array
  - subtract them and return the difference
  - assume the input array has two or more elements
  - cannot use the sort() method

algorithm:
  - initialize variables biggest and second, both to zero
  - iterate through the array
  - check if the number is greater than biggest
    - if it is, set biggest to the number
    - if not, check if it's bigger than second
    - if it is, set second to number
  - after iterating, subtract second from biggest and return

*/

function diffBig2(numbers) {
  let biggest = Math.max(...numbers);
  let second = Number.MIN_SAFE_INTEGER;

  numbers.forEach(number => {
    if (number > second && number < biggest) second = number;
  });

  return biggest - second;
}