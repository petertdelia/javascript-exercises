// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2 ignores case

/*

input: string
output: integer
rules:
  - output integer represents the number of times any alphanumeric character occurs more than once
  - the input string only contains alphanumeric characters
  - ignore case
  - empty string returns zero

algorithm:
  - if the input is an empty string, return 0
  - initialize an empty object, called count
  - iterate over the input string
  - either increment count at the character's value, or initilize at 1
  - after iteration, filter the keys of count, on the condition that the value is greater than 1
  - return the length of the filtered array
*/

function duplicateCount(str) {
  if (str.length === 0) return 0;

  let count = {};

  str.split('').forEach(char => {
    char = char.toLowerCase();
    count[char] = count[char] + 1 || 1;
  });

  return Object.keys(count).filter(key => count[key] > 1).length;
}
