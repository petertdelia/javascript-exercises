// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450

// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

/*

input: an array of 5 numbers, 1-6
output: an integer, the score
rules:
  - Use the above table to determine the score
  - each value in the array can only be used once in calculating the score
  - don't mutate the argument

algorithm:
  - declare const threes, assigned to an object with each digit as its key and each score as its value
  - declare const ones, with each digit as key and each score as value
  - declare scores value initialized to 0
  - declare variable rollVals, assinged to empty object
  - iterate through the roll; for each roll, add the value as its key and either increment it or initialize it
  - iterate through the keys of rollVals; for each, if the value is 3 or more, add the equivalent from the THREES const and subtract 3 from that key
  - iterate through the keys of rollVals; for each, if the key exists in ONES and the value is 1 or more, add that amount from ONES and subtract 1 from that key

*/

const THREES = {
  1: 1000,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600
};
const ONES = {
  1: 100,
  5: 50
};

function addScores(rollVals) {
  let score = 0;
  let rollKeys = Object.keys(rollVals);

  for (let idx = 0; idx < rollKeys.length; idx += 1) {
    let key = rollKeys[idx];
    while (rollVals[key]) {
      if (rollVals[key] >= 3) {
        score += THREES[key];
        rollVals[key] -= 3;
      } else if (rollVals[key] >= 1) {
        if (ONES[key]) {
          score += ONES[key];
        }
        rollVals[key] -= 1;
      }
    }
  }
  return score;
}

function score(roll) {

  let rollVals = {};
  roll.forEach(val => rollVals[val] ? rollVals[val] += 1 : rollVals[val] = 1);
  
  return addScores(rollVals);
}

console.log(score([5, 1, 3, 4, 1]));
console.log(score([1, 1, 1, 3, 1]));
