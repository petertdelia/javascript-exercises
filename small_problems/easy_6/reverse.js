// Write a function that takes an Array as an argument, and reverses its elements in place; that is, mutate the Array passed into this method. The return value should be the same Array object.

// You may not use Array.prototype.reverse().

// Examples:

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

// algorithm: initialize an empty array placeholder
//  enter a for loop that starts with idx = inputArr.length - 1
//  and terminates at 0
//  In each iteration, push the element from the corresponding index of the input array to the empty array
//  Perform forEach on the input array. For each iteration, set inputArray[idx] = placeholder[idx]. Return inputArray.

function reverse(array) {
  let placeholder = [];

  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    placeholder.push(array[idx]);
  }

  array.forEach((_, idx) => array[idx] = placeholder[idx]);

  return array;
}