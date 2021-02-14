// Write a function that rotates the first count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the beginning and shift the remaining digits to the right.

// Examples:

rotateLeftmostDigits(735291, 1);      // 735291
rotateLeftmostDigits(735291, 2);      // 375291
rotateLeftmostDigits(735291, 3);      // 573291
rotateLeftmostDigits(735291, 4);      // 273591
rotateLeftmostDigits(735291, 5);      // 973521
rotateLeftmostDigits(735291, 6);      // 173529

/*

problem: write a function
input: two integers
output: integer
requirements:
  -rotate the first integer, using the second integer as the count
  -Using the second number as a 1-based index, place the digit at that index of the first number, at the beginning of the first number, and move all other numbers to the right.

data structure/algorithm:
  -convert the first input number to an array of digits
  -cut the correct digit out of the first input number, using splice
  -append it to the beginning
  -return the number
