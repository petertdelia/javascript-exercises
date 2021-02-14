// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance, if
// the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10
//  + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// inputs:
//   integer greater than one (assumed);
// outputs:
//   integer that represents:
//    the sum of all numbers between 2 and input, inclusive, that are multiples of 3 or 5
//    implicit requirement: do not duplicate common multiples
//    (e.g. 15 is counted once)

// Data structures:
//   integers;
//   math operations;

// Algorithm:
//   initialize a total variable;
//   use a for loop between 2 and target Number, inclusive, incrementing by 1;
//   for each number: 
//     test to see if the number is divisible by BOTH 3 and 5
//       if it is, add it to the total;
//     else if it is divisible by EITHER 3 OR 5;
//       add it to the total;
//     else do nothing;
//   return? or print? number

function multisum(targetNum) {
  let total = 0;

  for (let iterable = 2; iterable <= targetNum; iterable++) {
    if (iterable % 3 === 0 || iterable % 5 === 0) {
      total += iterable;
    }
  }
  console.log(total);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168