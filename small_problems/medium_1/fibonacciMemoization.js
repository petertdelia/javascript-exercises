// Our recursive fibonacci function from an earlier exercise isn't very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

/*

problem: use memoization to solve previous fibonacci problem
data structure/algorithm:
  -create object sums;
  -include a step that adds the result of a call to fibonacci(num) to sums as a value; 
  -in recursive call, replace fibonacci(num - 2) with sums[String(num - 2)]

*/
let sums = {1: 1};


function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  sums[String(num - 1)] = fibonacci(num - 1);

  return sums[String(num - 1)] + sums[String(num - 2)];
}

// LS solution

let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    console.log(memo[nth])
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}
