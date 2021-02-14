// A triangle is classified as follows:

//     Equilateral: All three sides are of equal length.
//     Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

/*

problem:

write a function that takes 
input: three numbers, representing lengths of three sides of a triangle
output: string, representing the classification of the triangle
  requirements: classify the input numbers according to the following rules: -Invalid: check if the largest input number is less than the sum of the other two input numbers, and that every side is > 0. If it is not, it is invalid.
  -equilateral; check if all numbers are equal
  -isosceles: check if two numbers are equal
  -scalene: no numbers are equal

data structure/algorithm: check first if the triangle is valid.
=> use math to determine longest side
- 

Then check if all sides are of equal length, if so return equilateral. Then check if two sides are equal, if so return isosceles. Finally, return scalene if none of the above hold

more formally,
DEFINE function triangle(side1, side2, side3)
define sideArr = [side1, side2, side3].sort((a, b) => a - b);
if (sideArr[0] < 0 || sideArr[0] + sideArr[1] < sideArr[2])
  return 'invalid'
else if (Math.max(sideArr) === Math.min(sideArr))
  return 'equilateral'
else if (sideArr[0] !== sideArr[1] &&
          sideArr[1] !== sideArr[2] &&
          sideArr[0] !== sideArr[2])
  return 'scalene'
else 
  return 'isosceles'
*/

function triangle(side1, side2, side3) {
  let [shortest, middle, longest] = [side1, side2, side3].sort((a, b) => a - b);

  if (shortest < 0 || shortest + middle <= longest) return 'invalid';
  if (longest === shortest) return 'equilateral';
  if (shortest === middle || middle === longest) return 'isosceles';

  return 'scalene';
}

// Part II
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

// Examples:

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

/*

problem: write a function that:
input: takes three integers
output: returns a string indicating the category of triangle represented by the three integers
requirements:
  -there are four categories of triangle
    -invalid: three angles don't add up to 180 OR any of the angles is <= 0
    -right: one angle = 90
    -acute: no angles are >= 90
    -obtuse: one angle is > 90
  -assume that all angles are integers
  -assume the arguments are in degrees

data structure/algorithm:
  -concatenate the three arguments into an array
  -sort the array from smallest to largest
  -assign the array to variables small, middle, large
  -(subfunction for invalid, below?)
  -check that small is > 0 and that small + middle + large === 180
    -if not true, return invalid
  -check that long = 90
    if true, return right
  -check that long > 90
    if true, return obtuse
  otherwise, return acute

  more formally,

  define function triangle(angle1, angle2, angle3)
  [small, middle, large] = [angle1, angle2, angle3].sort((a, b) => a - b)
  if !(small > 0 && small + middle + large === 180)
    return 'invalid'
  if (long) = 90
    return 'right'
  if (long > 90) 
    return 'obtuse'
    return 'acute'

*/

// study syntax of NOT operator with parentheses--best practices for readability?

function triangle(angle1, angle2, angle3) {
  [small, middle, large] = [angle1, angle2, angle3].sort((a, b) => a - b);

  if (!(small > 0 && small + middle + large === 180)) return 'invalid';

  if (large === 90) {
    return 'right';
  } else if (large > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

/*

structure of function for declarative-type function:

data structure/algorithm:
-if (triangleIsValid(angles))
  -return getTriangleType(angles)
-else return 'invalid'

-getTriangleType(angles)

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (triangleIsValid(angles)) {
    return getTriangleType(angles);
  }; else {
    return 'invalid';
  }

  function triangleIsValid(angles) {
    let isGreaterThanZero = angles.every(angle => angle > 0);
    let sumTo180 = 180 === angles.reduce((accum, value) => accum + value);

    return isGreaterThanZero && sumTo180;
  }

  function getTriangleType(angles){
    if (angles.some(angle => angle === 90)) {
      return 'right';
    } else if (angles.some(angle => angle > 90) {
      return 'obtuse';
    } else return 'acute';
  }
}

*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (triangleIsValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }

  function triangleIsValid(angles) {
    let isGreaterThanZero = angles.every(angle => angle > 0);
    let sumTo180 = 180 === angles.reduce((accum, value) => accum + value);

    return isGreaterThanZero && sumTo180;
  }

  function getTriangleType(angles) {
    if (angles.some(angle => angle === 90)) {
      return 'right';
    } else if (angles.some(angle => angle > 90)) {
      return 'obtuse';
    } else {
      return 'acute';
    }
  }
}