// Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

// Example:

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

/*

problem: write a function that takes:
input: a string, consisting of sentences, consisting of space-separated words
output: a string, consisting of the longest sentence in the input string, plus a string that says how many words are contained in the longest sentence.
requirements:
  -sentences can end with a !, ?, or .
  -The printed sentence should contain the correct punctuation at the end

data structure/algorithm: 
  -define function longestSentence(text)
  -let longestSentence = [].
  -let sentence = [];
  -split the input string into an array of space-separated words.
    -let splitText = text.split(' ');
  -loop over splitText. 
      -let word = splitText[idx];
      -sentence.push(word);
      -if ['!', '?', '.'].includes(word[word.length - 1])
        -if (sentence.length > longestSentence.length) {
          longestSentence = sentence;
        }
        sentence = [];

  -longestSentence =  longestSentence.join(' ');
  -print the longest sentence, and also its length
  console.log(longestSentence, `The longest sentence has ${longestSentence.length} words`);

*/

function longestSentence(text) {
  const SENTENCE_ENDING_CHARS = ['!', '?', '.'];
  let longestSentence = [];
  let sentence = [];
  let splitText = text.split(' ');

  for (let idx = 0; idx < splitText.length; idx += 1) {
    let word = splitText[idx];
    let lastChar = word[word.length - 1];
    sentence.push(word);

    if (SENTENCE_ENDING_CHARS.includes(lastChar)) {
      if (sentence.length > longestSentence.length) {
        longestSentence = sentence;
      }
      sentence = [];
    }
  }

  console.log(`${longestSentence.join(' ')}`);
  console.log(`The longest sentence has ${longestSentence.length} words`);
}