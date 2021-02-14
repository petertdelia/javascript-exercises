// Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

// Examples:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// The tests above should log true.

// Note that balanced pairs must each start with a (, not a ).

// input: string
// output: boolean
//  requirements:
//    each left paren must have a right paren after it in the string
//    pairs must begin with left parens
//    there must be equal numbers of left and right parens in the string
//    if, when iterating, there are more right parens than left parens, then it must be false. 

// data structure/algorithm:
//    declare variables parensCount, assign to zero. iterate through the string, checking for left and right parens. If a left is encountered, add it to the count. If a right is encountered, decrement the count. If the count falls below zero, break and return false. If the count is > 0 at the end, return false. If it is zero at the end, return true.

// algorithm for checking for parens: regex test expression. /\(/.test(char), /\)/.test(char)

function isBalanced(string, leftChar = '(', rightChar = ')') {
  let count = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (char === leftChar) {
      count += 1;
    } else if (char === rightChar) {
      count -= 1;
    }

    if (count < 0) {
      break;
    }
  }

  return count === 0;
}

function isBalancedQuotes(string, quote) {
  let count = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];

    if (char === quote) {
      count += 1;
    }
  }

  return count % 2 === 0;
}

// further exploration: There are a few other characters that should be matching as well. Square brackets and curly brackets normally come in pairs. Quotation marks(single and double) also typically come in pairs and should be balanced. Can you expand this function to take into account those characters?

// data structure/algorithm: define a constant, charSets, that has subarrays containing pairs of balancing characters. Use map on the array, with the intention to return a boolean for each subarray, depending on whether the input string is balanced in that set of characters or not.

const charSets = [['(', ')'], ['[', ']'], ['{', '}'], ["'", "'"], ['"', '"']];

function allIsBalanced(string) {

  return charSets.map(pair => {
    if (pair[0] === pair[1]) {
      return isBalancedQuotes(string, pair[0]);
    }

    return isBalanced(string, pair[0], pair[1]);
  });
}
