// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// Examples:

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// restate problem:

// write a function that takes one argument, a positive integer. It then prints a triangle out of star characters, whose sides are the length of the integer. The hypotenuse goes from top right to bottom left.

// input: positive integer: assume to be valid input, called size.
// output: prints stars, of row and column length the same as the input integer.

// data structures: number, string(for printing stars), iteration (for printing rows)

// algorithm:
//  use a for loop to print rows of stars. In each row, print the appropriate number of spaces followed by the appropriate number of stars. Spaces plus stars should add up to the input integer. The first row prints (size - 1) spaces plus 1 star. Iteration should terminate after it has reached the input integer.

// more formal algorithm:
//  initialize space variable, a string with a single space. Initialize star variable, a string with a single star. Start the for loop with iter = 1, iter <= size (input), int ++. In each loop, print space.repeat(size - iter) and star.repeat(iter).

function triangle(size) {
  let space = ' ';
  let star = '*';

  for (let iter = 1; iter <= size; iter++) {
    console.log(`${space.repeat(size - iter)}${star.repeat(iter)}`);
  }
}