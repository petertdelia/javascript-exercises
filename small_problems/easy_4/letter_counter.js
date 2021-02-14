// Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// restate problem: write a function that takes a string as input. The string consists of zero or more space separated words. The function returns an object that shows the number of words of different sizes.

// input: string of space-separated words, or empty.
// output: object whose values are a count of the size indicated by the keys.

// data structures: string, coerce to array, object, iteration?

// algorithm: Initilize an empty object, result. coerce the input string to an array, words. Use split, using spaces as the splitter. Iterate through words. On each iteration, add the length of the word to the object as its key, and increment its value by one. Return results after the for loop is complete.

function wordSizes(words) {
  let result = {};
  words = words.split(' ');

  for (let word = 0; word < words.length; word += 1) {
    let length = words[word].length;
    if (!result[length]) {
      result[length] = 0;
    }
    result[length] += 1;
  }
  return result;
}