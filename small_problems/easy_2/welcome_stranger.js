// Create a function that takes 2 arguments, an array and an object. The array
// will contain 2 or more elements that, when combined with adjoining spaces,
// will produce a person's name. The object will contain two keys, "title"
// and "occupation", and the appropriate values. Your function should return
// a greeting that uses the person's full name, and mentions the person's title.

// -create a function that takes 2 arguments, an array and an Object.
// -The array has at least 2 elements that combine with spaces to create a name.
// -The object has two keys, called 'title' and 'occupation', with values.
// -The function should return a greeting that:
//   -uses the person's full name, and
//   -mentions the title.

// inputs:
//   -Array of at least length 2, Object with keys 'title' and 'occupation'
// ouputs:
//   -a returned greeting, presumably a String, that contains the array
//   -concatenated with spaces, along with the object's values at its two keys.


// examples:
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
// console.log(
// greetings(['Pete', 'T.', "D'Elia"], { title: "Mr.", occupation: "Engineer" })
// );
// logs Hello, Pete T. D'Elia! Nice to have a Mr. Engineer around.

// Edge cases:
// what happens if we get faulty input, like an array that only has one element?
//  or just wrong input?
//  What about an object whose values are not convertible to strings?

// Data structures:
//  inputs: array, object.

// algorithm:
//  iterate over the array, adding each element to a string variable, nameFromArray
//  with a space added between each element. For the last element, don't add a space.
//  return a string literal that contains nameFromArray, the object at its two keys,
//  and some filler material.

// pseudocode:
//  greetings(array, object)
//  START
//  INITIALIZE nameFromArray;
//  FOR (i = 0; i < array.length; i++) {
//    IF (i === array.length - 1) {
  //    nameFromArray += array[i];
// } ELSE {
//    nameFromArray += array[i] + ' ';
// }
// }
//  RETURN `Hello, ${nameFromArray}! It's nice to have a ${object.title} ${object.occupation} around here.`

function greetings(array, object) {
  let nameFromArray = "";
  for (let idx = 0; idx < array.length; idx++) {
    if (idx === array.length - 1) {
      nameFromArray += array[idx];
    } else {
      nameFromArray += array[idx] + " ";
    }
  }
  return `Hello, ${nameFromArray}! It's nice to have a ${object.title} ${object.occupation} around here.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
console.log(
greetings(['Pete', 'T.', "D'Elia"], { title: "Mr.", occupation: "Engineer" })
);