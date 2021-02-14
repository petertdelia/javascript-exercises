// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

//     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

//     F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//     F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

// [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

// F(m) being the smallest one such as F(m) * F(m+1) > prod.

/*

input: number
output: 
  - array, with three values
    - a fibonnaci number
    - the subsequent fibonnaci number
    - boolean
rules:
  - the output array contains two fibonnaci numbers in sequence, and a boolean which represents whether or not the product of those two fibonnaci numbers is equal to the input number
  - if there does not exist a pair of subsequent fibonnaci numbers such that their product equals the input number, the boolean will be false and the two numbers should be those whose product is the first product that is larger than the input number.

algorithm:
  - num1 equals 0
  - num2 equals 1
  - product equals num1 times num2;
  - while the product of num1 and num2 is less than the input number
    - calculate two subsequent fibonacci numbers
      - sum equals num1 plus num2
      - num1 = num2
      - num2 = sum
    - multiply them together, save to product
  - when the while loop breaks, check the product for:
  - if it is equal to the input number, return an array with those two numbers and a true boolean
  - if it is greater than the input number, return an array with those two numbers and a false boolean

*/

console.log(productFib(4895)) //, [55, 89, true])
console.log(productFib(5895)) //, [89, 144, false])
console.log(productFib(74049690)) //, [6765, 10946, true])
console.log(productFib(84049690)) //, [10946, 17711, false])
console.log(productFib(193864606)) //, [10946, 17711, true])
console.log(productFib(447577)) //, [610, 987, false])
console.log(productFib(602070)) //, [610, 987, true])

function productFib(prod) {
  let num1 = 1;
  let num2 = 1;
  let product = num1 * num2;
  while (product < prod) {
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    product = num1 * num2;
  }

  return [num1, num2, product === prod];
  
}