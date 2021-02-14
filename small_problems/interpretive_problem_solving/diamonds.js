// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

// Examples:

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
    // *

/*

problem: write a function
input: an odd integer
outputs: logs a star pattern to the console
requirements:
  -input must be odd integer
  -integer represents the number of lines that the diamond pattern will display
    -And it represents the number of stars of the longest line in the pattern
  -the diamond pattern begins with one star, printed at the center of the input number
  -it then prints every odd number up until the input number
  -Then it prints every odd number down to one again

data structure/algorithm:
  -define function:
    function diamond(integer)
  -declare spaces variable
    let spaces = Math.floor(integer / 2)
  -loop over input number, beginning with 1 and incrementing + 2
  -print that many stars + appropriate number of spaces
    for (let stars = 1; stars <= integer; stars += 2)
      console.log(`${spaces}${stars}`);
      spaces -= 1;
  spaces = 1;
  -Then loop down, beginning with input number - 2, incrementing - 2
  -Then it prints the appropriate number of stars and spaces
    for (let stars = integer - 2; stars <= 1; stars -= 2)
      console.log(`${spaces}${stars}`);
      spaces += 1;


  -number of stars to log is:
    -1, then every other odd number
  -number of spaces on the first line to log is: Math.floor(input number / 2)
  -subsequently log one fewer space per line until reaching input number
  -log one more until reaching original number of spaces

*/

function diamond(integer) {
  let spaces = Math.floor(integer / 2);

  for (let stars = 1; stars <= integer; stars += 2) {
    console.log(`${" ".repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
  }
  spaces = 1;
  for (let stars = integer - 2; stars >= 1; stars -= 2) {
    console.log(`${" ".repeat(spaces)}${'*'.repeat(stars)}`);
    spaces += 1;
  }
}