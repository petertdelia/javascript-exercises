// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

logInBox('To boldly go where no one has gone before.');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// restate problem:
//  write a function that takes in a string, a "short line of text",
//  write the string to the console log, within a box
//  Assume the input string will fit on the screen on one line.
//  implicit requirements: there are several!
//    From the examples, the box must change shape to accomodate the
//    length of the input string.
//    the second example gives a default box position, when there is
//    no input.
//    The box will be constructed of the '+', '-', and '|' characters
//    It will be three | characters high, bookended by + characters
//    It will be at least two - characters long, but will stretch
//    to become the length of the string, plus one - character on either
//    side of the text.

//  inputs: short string
//  outputs: short string, plus box constructed of characters

//  data structures and methods:
//  string, string property of length, \n newline characters to help construct
//  the box, repeat string method

// algorithm:
//  log five lines of code
//  -On the first line, print the first + character, then print a number of -
//  characters equal to the length of the input string plus two. Use the
//  string repeat method for this. Then print another + character
//  -On the second line, print a | character, then print a number of space
//  characters equal to the length of the input string plus two. Use the
//  string repeat method for this. Then print another | character
//  -The third line should print |, a space, the input string, a space, and |
//  -The fourth line is the same as the second line
//  -The fifth line is the same as the first line

function logInBox(string) {
  let lengthOfBox = string.length + 2;

  let topAndBottom = function() {
    console.log("+" + "-".repeat(lengthOfBox) + "+");
  };

  let emptyLine = function() {
    console.log("|" + " ".repeat(lengthOfBox) + "|");
  };

  topAndBottom();
  emptyLine();
  console.log("|" + " " + string + " " + "|");
  emptyLine();
  topAndBottom();
}

// Further Exploration

// Modify this function so that it truncates the message if it doesn't fit
// inside a maximum width provided as a second argument (the width is the
// width of the box itself). You may assume no maximum if the second
// argument is omitted.

// restate problem:
//  modify the function, so that:
//  It takes a second argument which specifies a maximum box width
//  This width is the width of the box itself
//    The box is four characters wider than the input string
//  If the passed in string doesn't fit within this width, it shortens the
//  the string to fit
//  If the second argument is omitted, there is no maximum--use a default parameter

// inputs: string, optional second argument, integer
// outputs: string enclosed in a box

// example:
//  logInBoxShorten('To boldly go where no one has gone before.', 42);

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// data structures:
//  string, integer, string methods

// Algorithm:
//  set default maxWidth to -1
//  if maxWidth is not -1 OR if the message does not fit in maxWidth, modify message
//  shorten message to four chars shorter than maxwidth
//    We want slice() to extract from the beginning of the string, up to the maxwidth
//     minus four
//  example: message = 'To boldly go where no one has gone before.' length = 42
//            maxWidth = 40.
//          message.slice(0, maxWidth - 4)
//  proceed with original function
//  if the message doesn't fit, then use method to shorten message
//   use the slice method, counting back from the end (message.length - 4)
//  then set the widthOfBox to message length + 2

function logInBoxWrap(message, maxWidth = null) {

  let cutLength = maxWidth - 4;
  let widthOfBox;
  if (maxWidth) {
    widthOfBox = maxWidth - 2;
  } else {
    widthOfBox = message.length + 2;
  }

  printTopAndBottom(widthOfBox);
  printEmptyLine(widthOfBox);
  if (maxWidth) {
    wrapMessage(message, cutLength);
  } else {
    console.log(`| ${message} |`);
  }
  printEmptyLine(widthOfBox);
  printTopAndBottom(widthOfBox);
}

function printTopAndBottom(widthOfBox) {
  console.log("+" + "-".repeat(widthOfBox) + "+");
}

function printEmptyLine(widthOfBox) {
  console.log("|" + " ".repeat(widthOfBox) + "|");
}




// For a challenging but fun exercise, try word wrapping messages that are
// too long to fit, so that they appear on multiple lines but are still
// contained within the box. This isn't an easy problem, but it's doable
// with basic JavaScript.

// Examples:
//
 logInBoxWrap('To boldly go where no one has gone before.', 20);

// will log on the console:


// +-------------+
// |             |
// | To boldly g |
// | o where no  |
// | one has go  |
// | ne before.  |
// |             |
// +-------------+

// piece of algorithm:
//  -will need to create a function wrapMessage, which runs until all of the message has been written to the box. It will need to go on the middle line of the function series: 
  //  topAndBottom();
  // emptyLine();
//  %%% wrapMessage() %%%
  // emptyLine();
  // topAndBottom();

// wrapMessage
//  inputs: message, length to cut the message to (cutLength = maxWidth - 4)
//  outputs: printing formatted pipes and pieces of message to the console until all of the message has been printed.

// Algorithm:
//  -initilize indexCounter variable at 0;
//  -set while loop condition to terminate when indexCounter >= message.length
//  -iterate through the message, using the cutLength argument to set a messagePiece variable which contains the piece of message to be printed in that loop
//  -print each appropriately sized piece of the message to the console along with beginning and ending pipes
//  -increment the indexCounter by cutLength
// TODO: fix the last bit of message so that there is padding to line up the last pipe correctly

function wrapMessage(message, cutLength) {
  let startingIndex = 0;
  let messagePiece;

  while (startingIndex <= message.length) {
    let endingIndex = startingIndex + cutLength;
    messagePiece = message.substring(startingIndex, endingIndex);

    if (messagePiece.length < cutLength) {
      let padding = ' '.repeat(cutLength - messagePiece.length);
      console.log(`| ${messagePiece}${padding} |`);
    } else {
      console.log(`| ${messagePiece} |`);
    }

    startingIndex += cutLength;
  }
}
