// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output:
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// inputs: strings noun, verb, adjective, adverb
// outputs: three lines of strings, using the accumulated variables
//  questions: validate input?

// examples: see above
// data structures: strings, readline for input, template literal for output

// algorithm:
//  use readline to prompt user for input. Save that input to variables, log them along with associated text.

let rlSync = require('readline-sync');


let noun = rlSync.question("Enter a noun?\n");
let verb = rlSync.question("Enter a verb?\n");
let adjective = rlSync.question("Enter a adjective?\n");
let adverb = rlSync.question("Enter a adverb?\n");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);