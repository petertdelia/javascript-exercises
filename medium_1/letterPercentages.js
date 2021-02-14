// Write a function that takes a string, and returns an object containing the following three properties:

//     the percentage of characters in the string that are lowercase letters
//     the percentage of characters that are uppercase letters
//     the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// Examples:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/*
input: string
output: object, with percentages of uppercase, lowercase, and neither characters from the input string
rules:
  - assume input will contain at least 1 character
  - count the characters in the input string that are uppercase, lowercase, or neither.
  - convert the count of each to a percentage -- count / total number of chars
  - return the percentage of each as a value in an object whose key is the case of the char or neither
  - each percentage in the returned object should be formatted to two decimal places and be of type string.

data structure;
  - string
  - iteration
  - count chars --keep values in variables, or count as values in an already-created object.
  - object

algorithm:
  - create upper, lower, neither var initialized to 0
  - iterate over string
    - check if the char is upper or lower or neither
      - increment the appropriate var
  - after iterating, convert counts to appropriate values.
  - format properly and return.
*/