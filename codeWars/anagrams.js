// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer','racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // => []

/*

input: string, array of strings
output: array of strings
rules:
  - output array contains all elements from the input array that are anagrams of the input string
  - an anagram is a word that contains the same letters as a different word
  - return an empty array if there are no anagrams
algorithm:
  - split, sort, and join the input string. Assign to variable sortedStr
  - filter the input array
  - callback returns true if the sorted element equals the sorted input string
    - need to split, sort, and join each element
  - return the filtered array

*/

function anagrams(string, arr) {
  let sortedStr = string.split('').sort().join('');
  return arr.filter(elem => elem.split('').sort().join('') === sortedStr);
}