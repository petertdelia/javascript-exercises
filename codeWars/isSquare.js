// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task

// Given an integral number, determine if it's a square number:

//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples

isSquare(-1) returns  false
isSquare(0) returns   true
isSquare(3) returns   false
isSquare(4) returns   true
isSquare(25) returns  true  
isSquare(26) returns  false

/*

input: integer
output: boolean
requirements:
  explicit requirements:
    - returns true if the input integer is a perfect square
    - a perfect square is the product of an integer with itself

algorithm:
  - use a math function to find the square root of the input integer
  - see if the result is equal to the floor of that number. Return the truthy value

*/

function isSquare(num) {
  return Math.sqrt(num) === Math.floor(Math.sqrt(num));
}