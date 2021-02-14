// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

/*

input: string
output: boolean
rules:
  explicit:
    - the function returns true if the order of parentheses is valid
  implicit:
    - parentheses must begin with an open parenthesis and end with a closed parenthesis.
    - there must be an equal number of open and closed parentheses
    - an open parenthesis must come before a closed parenthesis

algorithm;
  - iterate through the string
  - count the number of open and closed parentheses. Add one for open, subtract one for closed. At the end the number must be zero. Return false if it is not.
  - if the number falls below zero, there is an out-of-place closed parenthesis, so return false if that happens.

*/

function validParentheses(string) {
  let balance = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === '(') {
      balance += 1;
    } else if (string[idx] === ')') {
      balance -= 1;
    }
    if (balance < 0) return false;
  }
  
  return balance === 0;
}