// Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

// Examples:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

/*

problem: write a function that:
input: a number, count
outputs: returns a number, that represents:
requirements:
  -calculate the sum of the consecutive integers, beginning at one and ending at count, inclusive
  -calculate the square of that sum
  -calculate each square of the consecutive integers; sum the result of each square
  -subtract the (sum of the squares) from the (square of the sum);

data structure/algorithm:
  -declare variables squaredSum and sumOfSquares, assign to 0
  -use a for loop to sum all of the consecutive integers up to count, assign to variable squaredSum
  -square squaredSum;
  -use a second for loop to square each integer;
    -declare variable squaredNum, assign to num * num;
    -after squaring, add it to variable sumOfSquares;
  -return squaredSum - sumOfSquares;

*/

function sumSquareDifference(integer) {
  let squaredSum = 0;
  let sumOfSquares = 0;

  for (let num = 1; num <= integer; num += 1) {
    squaredSum += num;
    let squaredNum = num * num;
    sumOfSquares += squaredNum;
  }
  squaredSum *= squaredSum;

  return squaredSum - sumOfSquares;
}