// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

// Examples:

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

/*

num1    num2  sum
1   +   1 =   2
1   +   2 =   3
2   +   3 =   5

data structure/algorithm:
DEFINE function fibonacci(nth)
if (nth < 3)
  return 1;
initialize num1 = 1;
initialize num2 = 1;
initialize sum;

for (let num = 3; num <= nth; num += 1)
  sum = num1 + num2;
  num1 = num2;
  num2 = sum;

return sum;

*/

function fibonacci(nth) {
  if (nth < 3) return 1;

  let num1 = 1;
  let num2 = 1;
  let sum;

  for (let counter = 3; counter <= nth; counter += 1) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }

  return sum;
}