// Write a function that takes a word and a string of text as arguments, and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided.

// Example:

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

/*

problem: write a function
input: string searchWord, string text
output: number appearances
requirements:
  -the output represents how many times word appears in text.
  -assume that word and text will always be provided
  -ignore case

data structure/algorithm:
  -declare and assign appearances, equal to 0;
  -split(' ') text
  -call forEach on result.
  -pass word to callback.
    -in each iteration, if wordToSearch === word, increment appearances by 1.
  -return appearances.

  OR

  -return text
  -.split(' ')
  -.filter(word => word === wordToSearch)
  -.length
*/

function searchWord(wordToSearch, text) {
  let appearances = 0;

  text.split(' ').forEach(word => {
    if (word.toLowerCase() === wordToSearch.toLowerCase()) appearances += 1;
  });

  return appearances;
}

function searchWord(wordToSearch, text) {
  return text
  .split(' ')
  .filter(word => word.toLowerCase() === wordToSearch.toLowerCase())
  .length;
}

function searchWord(wordToSearch, text) {
  let regex = new RegExp(`\\b${wordToSearch}\\b`, 'gi');
  let matches = text.match(regex);

  return matches ? matches.length : 0;
}

// Part 2:
// The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and a string of text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

// Example:

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

/*

problem: modify the function from the previous exercise to 
  -return the input string,
  -modified so that the first argument is highlighted within the text
  -highlighted words change thusly: word => **WORD**; uppercase, with two asterisks prepended and appended.

data structure/algorithm:
  -use string replace method, with regex defined above, to replace the first argument with a function: match => `**${match.toUpperCase()}**`.
  -return the result.

*/

function searchWord(word, text) {
  let regex = new RegExp(`\\b${wordToSearch}\\b`, 'gi');
  return text.replace(regex, match => `**${match.toUpperCase()}**`);
}
