// Modify the kebabize function so that it converts a camel case string into a kebab case.

console.log(kebabize('camelsHaveThreeHumps')) // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')) // camels-have-humps

// Notes:

//     the returned string should only contain lowercase letters

/*

input: string
output: string
rules:
  - convert camel case string to kebab case string
  - output should only contain lower case letters

algorithm:
  - initialize words variable, assign to empty array
  - initialize word variable, assign to empty string
  - iterate through the input string
    - check each char to see if it is upper case.
    - if not, concatenate to word
    - if it is, push word to words; reassign word to char
  - after iteration, push the last word to words
  - filter words
    - in the callback, only return true if word doesn't equal an empty string
  - join words with a dash and return

*/

function kebabize(string) {
  let words = [];
  let word = '';

  string = string.replace(/[0-9]/g, '');

  string.split('').forEach(char => {
    if (char.toUpperCase() !== char) {
      word += char;
    } else {
      words.push(word);
      word = char.toLowerCase();
    }
  });
  words.push(word);
  return words.filter(word => word !== '').join('-');
}