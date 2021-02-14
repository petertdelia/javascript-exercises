// Write a function that determines and returns the ASCII string value of a
// string passed in as an argument. The ASCII string value is the sum of the
// ASCII values of every character in the string.
// (You may use String.prototype.charCodeAt() to determine the ASCII
// value of a character.)

// Examples:

// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0

// inputs:
//   String;
//   edge case: empty String;
// outputs;
//   Number
//     represents the ascii string value of the String;
//   terminology: ascii string value;
//     definition:
//       the sum of the
//       ASCII values of every character in the string.

// data structures:
//   string input;
//   Number;
//   flow control/operators:
//     math operators;
//     for loop

// algorithm:
//   initialize total variable;
//   loop over the length of the string;
//   add the character code value to the total at each index value;
//   print the result


function asciiValue(string) {

  let total = 0;
  for (let iterable = 0; iterable < string.length; iterable++) {
    total += string.charCodeAt(iterable);
  }

console.log(total);

}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0