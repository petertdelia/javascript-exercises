// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

console.log(sumStrings('99','1')) // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

/*

input: two strings
output: string
rules:
  - return the sum of the two input strings as a string

algorithm:
  - declare var result, assign to empty string
  - reverse both string numbers
  - declare var hasOne, equals false
  - iterate through the longer of the two
    - convert digits to numbers
    - pass each pair of Number digits to addDigits()
    - check hasOne; if true, add 1 to return value
    - convert the return value to a String
    - if the string is longer than one,  
      - set hasOne to true
      - append the second index to result
    - else
      - set hasOne to false
      - append the digit to result
  
  - function addDigits(dig1, dig2)
    - check to see if either Number digit is NaN
    - if it is, return the one that is a number
    - if it's not, add the two numbers together and return

*/

function sumStrings(int1, int2) {
  let result = '';
  int1 = int1.split('').reverse();
  int2 = int2.split('').reverse();
  let longer = Math.max(int1.length, int2.length);
  let hasOne = false;
  let sum;
  for (let idx = 0; idx < longer; idx += 1) {
    sum = addDigits(Number(int1[idx]), Number(int2[idx]));
    if (hasOne) sum += 1;
    if (String(sum).length > 1) {
      hasOne = true;
      result += String(sum)[1];
    } else {
      hasOne = false;
      result += String(sum);
    }
  }
  if (String(sum).length > 1) result += '1';
  if (result[result.length - 1] === '0') {
    result = result.slice(0, result.length - 2);
  }
  return result.split('').reverse().join('');
}

function addDigits(dig1, dig2) {
  if (Number.isNaN(dig1)) return dig2;
  if (Number.isNaN(dig2)) return dig1;

  return dig1 + dig2;
}