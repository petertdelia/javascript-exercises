// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

// Examples:

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// problem: write a function that takes a string as its argument.
//  it returns an array that contains all palindromic substrings of the input string.
//    a palindromic substring is a sequence of characters that reads the same forward and backward.

// input: string
// output: array
//    requirements:
//    palindromes should be sorted in the order of their appearance in the input string.
//    case matters: 'Aa' is not a palidrome; 'aa' is
//    palindromes must be greater than length 1.
//    consider all characters, not just alphabetical
//    use the function from the previous exercise.

// data structure/algorithm: Call allSubStrings on the input string and assign to a variable, substrings. Call filter on substrings and pass to the callback function a test for the equality of each substring with its reversed counterpart. Use split(""), reverse(), join("") to reverse each substring. Also test that the length of the string is greater than 1.

function substringsAtStart(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(string.substring(0, idx + 1));
  }

  return result;
}

function substrings(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(substringsAtStart(string.substring(idx)));
  }

  return result.flat();
}

function palindromes(string) {
    return substrings(string)
    .filter(string => {
      return string === string.split('').reverse().join('');
    })
    .filter(string => string.length > 1);
}