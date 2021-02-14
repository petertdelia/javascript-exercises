// The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

// This simple sequence can be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n:

function sum(num) {
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

// A good recursive function has three primary qualities:

//     It calls itself at least once.
//     It has an ending condition — e.g., if (num === 1), in the sum function above.
//     The results of each recursion are used in each step — e.g., num + sum(num - 1) uses sum(num - 1).

// Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

// Examples:

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

/*

problem: write a function that:
input: an integer
output: an integer, the fibonacci number at the nth position, where n is the input integer
requirements:
  -the fibonacci sequence sums two numbers, starting with 1 and 1. Then it sums the sum with the previous number, and on and on.
  -use recursion to solve this problem
  -identify a base case (or two)
  -identify the pattern between numbers

data structure/algorithm:
  base case as defined above: 
  F(1) = 1
  F(2) = 1
  recursive call as defined above:
  F(n) = F(n - 1) + F(n - 2) where n > 2

  more formally:
  -DEFINE fibonnaci(num)
  -IF (num === 1 || num === 2)
    return 1;
  return fibonacci(num - 1) + fibonacci(num - 2)

*/

function fibonacci(num) {
  if (num === 1 || num === 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}