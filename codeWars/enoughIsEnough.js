// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task

// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// Example

  console.log(deleteNth([1,1,1,1],2)); // return [1,1]

  console.log(deleteNth([20,37,20,21],1)); // return [20,37,21]

/*

input: 
  - array of numbers
  - number
output: array
rules:
  - return a new array
  - every element in the output array may occur at most n times, where n is the second function argument. 
  - If any element occurs more than n times, it must not be included in the output array.
  - delete any occurrences of an element that occurs more than n times.

algorithm:
  - create an empty object
  - create an empty array
  - iterate through the input array
  - check how many times the element has occured
  - if it is less than n, push it to the output array
  - else, skip it
  - increment its key in the object by 1
  - return output

*/

function deleteNth(array, num) {
  let numCount = {};
  let output = [];

  array.forEach(elem => {
    if (numCount[elem] === undefined || numCount[elem] < num) {
      output.push(elem);
    }
    numCount[elem] = numCount[elem] + 1 || 1;
  });

  return output;
}