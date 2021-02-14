// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 

/*

input: string, consisting of uppercase and lowercase letters
output: string
rules:
  explicit:
    - uppercase stand for mothers; lowercase stand for children
    - place mothers with children, eg 'AaaBbb'.

algorithm:
  - split string by character into array
  - map the array so that all letters are lowercase
  - sort the array
  - map the array; check consecutive letters. If they are different, change the second one to an uppercase.
  - return
  
*/
let dancingBrigade = "aAbaBb";

console.log(findChildren(dancingBrigade));

function findChildren(dancingBrigade) {
  let sortedArr = dancingBrigade
    .split('')
    .map(letter => letter.toLowerCase())
    .sort();
  sortedArr[0] = sortedArr[0].toUpperCase();

  for (let idx = 0; idx < sortedArr.length; idx += 1) {
    if (sortedArr[idx + 1] === undefined) break;
    if (sortedArr[idx].toUpperCase() !== sortedArr[idx + 1].toUpperCase()) {
      sortedArr[idx + 1] = sortedArr[idx + 1].toUpperCase();
    }
  }

  return sortedArr.join('');

}