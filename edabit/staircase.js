// Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward direction and downwards for a negative value.

/*
input: number, either positive or negative
output: string, with newline chars
rules:
  - the number represents the number of lines that the staircase will have
  - assuming positive input:

    - the first line has (n - 1)'_' chars followed by 1 '#' char.
    - every subsequent line has 1 fewer '_' followed by 1 more '#'.
  - if the input is negative, reverse the order.

  data structure:
  - strings and array.

algorithm:
  - initialize empty array, staircaseArr
  - initialize hash = 1 and underscore = n - 1
  - loop Math.abs(n) number of times.
    - in each iteration, build a string with underscore + hash symbols repeated their respective number of times.
    - push that string to staircaseArr.
    - increment hash, decrement underscore.
  - after iterating, check if the input integer is negative. If it is, reverse the array.
  - Join the array wth '\n' and return.

*/

function staircase(num) {
  let staircaseArr = [];
  let hash = 1;
  let underscore = Math.abs(num) - 1;
  for (let count = 0; count < Math.abs(num); count += 1) {
    let str = '_'.repeat(underscore) + '#'.repeat(hash);
    staircaseArr.push(str);
    hash += 1;
    underscore -= 1;
  }
  return num < 0 ? staircaseArr.reverse().join('\n') : staircaseArr.join('\n');
}

// Examples

console.log(staircase(3)); // ➞ "__#\n_##\n###"
// __#
// _##
// ###

console.log(staircase(7)); //➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
// ______#
// _____##
// ____###
// ___####
// __#####
// _######
// #######

console.log(staircase(2)); //➞ "_#\n##"
// _#
// ##

console.log(staircase(-8)); //➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
// ########
// _#######
// __######
// ___#####
// ____####
// _____###
// ______##
// _______#