// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// examples:
//    logOdds() => 2
//                 4
//                 6
//                 8
//                 ...
//                 98

// inputs:
//   none;
// output:
  // log all even integers, 1 to 99, inclusive
  // each number on a separate line

// Data structures:
//   number, iterable

// algorithm:
//   iterator = 1;
//   for (iterator; iterator < 100; iterator += 1)
//      if (iterator % 2 === 0)
//      console.log(iterator);

function logEvens() {
  for (let iterator = 1; iterator < 100; iterator += 1) {
    if (iterator % 2 === 0) {
      console.log(iterator);
    }
  }
}

logEvens();