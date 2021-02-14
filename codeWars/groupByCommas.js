// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647
// Examples

//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

/*

input: integer
output: string
rules:
  - the output string is a decimal representation of the integer
  - it is grouped by commas after every three digits

algorithm:
  - declare results variable assigned to empty array
  - convert input number to string, split it then reverse it, save to variable strArr
  - iterate over strArr
  - every third iteration, push a ',' to results array
  - every iteration, push character to results
  - after iterating, reverse results, join it, and return

*/

console.log(groupByCommas(35235235));

function groupByCommas(int) {
  let results = [];
  let strArr = String(int).split('').reverse();
  
  strArr.forEach((char, idx) => {
    if (idx % 3 === 0 && idx !== 0) {
      results.push(',');
    }
    results.push(char);
  });
  return results.reverse().join('');
}