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

problem: write a function that 
input: a string
output: an object, containing:
requirements:
  -the output object contains the percentage of characters in the input string that are:
    -lowercase letters
    -uppercase letters
    -neither
  -the values of the object keys should be strings, rounded to two decimal places.

data structure/algorithm:
  -sum total number of characters in the input string
  -sum number of characters that are lowercase letters
  -sum uppercase letters
  -sum neither
  -create an object that contains these values at the appropriate keys
  -use the toFixed method

more formally,
  -DEFINE function letterPercentages(string)
  -DEFINE variable totalChars = string.length
  -DEFINE variable lowercaseChars = 0;
  -DEFINE variable uppercaseChars = 0;
  -DEFINE variable neitherChars = 0;
  -DEFINE variable outputObj = {};

  -string.split('')
  -.forEach(char =>
    if (char.match(/[A-Z]/)
      uppercaseChars += 1)
    else if (char.match(/[a-z]/))
      lowercaseChars += 1
    else
      neitherChars += 1
      END LOOP

  -outputObj.lowercase = (lowercaseChars / totalChars).toFixed(2)
  -outputObj.uppercase = (uppercaseChars / totalChars).toFixed(2)
  -outputObj.neither = (neitherChars / totalChars).toFixed(2)
  return outputObj

*/

function letterPercentages(string) {
  let totalChars = string.length;

  function matchAndPercentage(regex) {
    let matches = string.match(regex) || [];
    return ((matches.length / totalChars) * 100).toFixed(2);
  }

  return {
    lowercase: matchAndPercentage(/[a-z]/g),
    uppercase: matchAndPercentage(/[A-Z]/g),
    neither: matchAndPercentage(/[^a-z]/gi)
  };
}

function letterPercentages(string)
let totalChars = string.length
let lowercasePercent = ((string.match(/[a-z]/g) || []).length / totalChars * 100).toFixed(2);
let uppercasePercent = ((string.match(/[A-Z]/g) || []).length / totalChars * 100).toFixed(2);
let neitherChars = ((string.match(/[^A-Z]/gi) || []).length / totalChars * 100).toFixed(2);
let outputObj = {};

string.split('')
.forEach(char =>
  if (char.match(/[A-Z]/)
    uppercaseChars += 1)
  else if (char.match(/[a-z]/))
    lowercaseChars += 1
  else
    neitherChars += 1
    END LOOP

-outputObj.lowercase = (lowercaseChars / totalChars).toFixed(2)
-outputObj.uppercase = (uppercaseChars / totalChars).toFixed(2)
-outputObj.neither = (neitherChars / totalChars).toFixed(2)
return outputObj

*/
