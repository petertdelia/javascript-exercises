let animal = "dog"

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}

speak();

let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat("World!");
  return arr;
}

test(greeting);
console.log(greeting);

// line 13: variable is declared
// line 20: greeting is called, the variable is passed into the function test()

// Given the string of chars a..z A..Z do as in the sample cases

console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
accum("RqaEzty")  // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")    // "C-Ww-Aaa-Tttt"

// problem: replicate the function as defined in the sample cases.
// input: string
// output: string, with each consecutive character in the string repeated one more time than the last one. The first character is repeated once. Each character repetition is separated by a dash. Each repetition begins with an upper-case character, followed by lower case characters. Ignore case in the input string.
// data structure/algorithm: declare a variable, result, assigned to an empty string. Use a for loop, beginning at idx = 0 and terminating at string.length. For each iteration, declare a variable, chars, equal to input string at idx, repeating idx + 1 times. Then redefine chars to equal chars[0].toUpperCase + chars.slice(1). In an if block, append a '-' to chars if idx < string.length - 1. Append chars to result.
// Return result.

function accum(string) {
  let result = "";

  for (let idx = 0; idx < string.length; idx += 1) {
    let chars = string[idx].repeat(idx + 1);
    chars = chars[0].toUpperCase() + chars.slice(1);

    if (idx < string.length - 1) {
      chars += '-';
    }
    result += chars;
  }

  return result;
}


//Find the length of the longest substring in the given string that is the same in reverse.

//As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

//If the length of the input string is 0, return value must be 0.

//Example:
//"a" -> 1
//"aab" -> 2
//"abcde" -> 1
//"zzbaabcd" -> 4
//"" -> 0

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9

// problem: write a function that takes a string. It returns a number that represents the length of the longest substring in the input string that is the same in reverse. 

// input: string
// output: number

// requirements: if the input string length is zero, output 0.

// data structure/algorithm: find all substrings in the given string. Test them to see if they are palindromes. Find the length of the longest palindrome and return it.

// declare variable, substrings, assigned to an empty array; for loop over input string. Use another for loop; in the inner for loop, find all substrings from the given index until the end of the input string. Push each substring to the substrings array. In the outer for loop, loop over all characters.

// filter substrings. Test to see if they are the same forwards and backwards (split "" each, reverse, and join "")

function longestPalindrome(string) {
  if (string.length === 0) {
    return 0;
  }

  let substrings = [];

  for (let outerIdx = 0; outerIdx <= string.length; outerIdx += 1) {
    for (let innerIdx = outerIdx + 1; innerIdx <= string.length; innerIdx += 1) {
      substrings.push(string.slice(outerIdx, innerIdx));
    }
  }

  let palindromeStrings = substrings.filter(string => string === string.split("").reverse().join(""));

  let longestPal = palindromeStrings[0];

  palindromeStrings.forEach(string => {
    if (string.length > longestPal.length) {
      longestPal = string;
    }
  });
    return longestPal.length;
}


/*
algorithm:
        - find all the substrings for a given string
             - 

        - find all the palindromes in the substrings array
            - 
        - return sorted palindromes (the length of the first value) -> shift. length


*/

// Always return to the algorithm and put it back

// codewars is good
// Karl has a tech talk about PEDAC

const longestPalindrome = (str) => {
  let substrings= findSubstrings(str);
  let palindromes = findPalindromes(substrings)
  return palindromes.sort((a,b) => b.length - a.length).shift().length();
}