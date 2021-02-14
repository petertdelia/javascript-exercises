// Modify the wordArrayizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

// algorithm: use map to replace non numeric characters in each word.

function wordSizes(words) {
  let result = {};
  if (words === '') {
    return result;
  }
  let wordArray = words.split(' ').map(each => each.replace(/[^a-z]/gi, ""));

  for (let word = 0; word < wordArray.length; word += 1) {
    let length = wordArray[word].length;
    if (!result[length]) {
      result[length] = 0;
    }
    result[length] += 1;
  }
  return result;
}