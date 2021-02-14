// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:

//     zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

const englishNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// Example:

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// problem: write a function that takes an array of integers from 0 to 19, and returns a new? array of those integers that is sorted based on the english-word equivalents of the integers.

// input: 
// output:
// requirements:
// 
// data structure/algorithm: declare a const, englishNums, and assign it be an array with the twenty string elements defined as english numbers above.
// call the sort function on the array. In the callback, return 1 if englishNums[a] > englishNums[b], -1 if opposite, and 0 if they are equal.

let wordSort = function (a, b) {
   if (englishNums[a] > englishNums[b]) {
   return 1;
} else if (englishNums[a] < englishNums[b]) {
   return -1;
}
   return 0;
}

function alphabeticNumberSort(numbers) {
   return numbers.sort((a, b) => {
      if (englishNums[a] > englishNums[b]) {
      return 1;
   } else if (englishNums[a] < englishNums[b]) {
      return -1;
   }
      return 0;
   });
}

function alphabeticNumberSort(numbers) {
   return numbers.sort(wordSort);
}