// Some numbers have funny properties. For example:

//     89 --> 8¹ + 9² = 89 * 1

//     695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

//     46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

//     we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

//     Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

console.log(digPow(89, 1)) // should return 1 since 8¹ + 9² = 89 = 89 * 1
console.log(digPow(92, 1)) // should return -1 since there is no k such as 9¹ + 2² equals 92 * k
console.log(digPow(695, 2)) // should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
console.log(digPow(46288, 3)) // should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

/*

input: two integers
output: an integer
rules:
  - return the integer which, when multiplied by the first input integer, results in a number equal to the sum of each digit of the first input integer raised to a power defined by the second input integer
  - integers given will always be positive
  - if there is no integer which fulfills the condition, return -1

algo:
  - define function digPow(int1, int2)
  - raise each digit of the first input integer by a power, beginning with the second input integer and incrementing by 1 for each digit
    - convert int1 to a string, split the string, map so that each digit is a number, assign to variable intArr
    - initialize sum variable to 0
    - iterate over intArr, for each number, raise it to the power of int2
    - add the result to sum
    - increment int2 by 1
  - calculate whether this sum is evenly divisible by the first input integer
    - if the sum divided by int1 equals the floor of the same operation, return this number
  - if not, return -1

  */

  function digPow(int1, int2) {
    let intArr = int1.toString().split('').map(dig => Number(dig));
    let sum = 0;
    for (let idx = 0; idx < intArr.length; idx += 1) {
      sum += Math.pow(intArr[idx], int2);
      int2 += 1;
    }
    if (sum / int1 === Math.floor(sum / int1)) {
      return sum / int1;
    } else return -1;
  }