// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.
// 
// If you liked this kata, check out part 2!!

/*

input: integer
output: string
rules:
  - the output should return each digit with the correct number of zeros after it (according to the input integer), separated by spaces and plus signs
  - input numbers will be whole numbers > 0

algorithm:
  - declare results variable, assigned to empty string
  - convert number to string
  - iterate through the string
  - if the digit is '0' continue
    - append 0s to it, save to variable numToAppend
      - the number of 0s is num.length - (idx + 1)
    - if the idx is 0, append numToAppend to results and continue
    - concatenate ' + ' and numToAppend to results string


*/

function expandedForm(num) {
  let results = '';
  num = num.toString();
  for (let idx = 0; idx < num.length; idx += 1) {
    if (num[idx] === '0') continue;
    let numToAppend = num[idx] + '0'.repeat(num.length - (idx + 1));
    if (idx === 0) {
      results += numToAppend;
      continue;
    }
    results += ' + ' + numToAppend;
  }

  return results;
}

// alternative algo:
/*

convert the number to a string
split the string
map the string=> for each number, add the appropriate number of zeros
filter the string => take out any numbers that are all zeros
join the string, use ' + '.