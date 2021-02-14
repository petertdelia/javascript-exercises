// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task

// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// Example

  console.log(deleteNth([1,1,1,1],2)) // return [1,1]
  console.log(deleteNth([20,37,20,21],1)) // return [20,37,21]

/*

input: array, integer
output: array
rules:
  - return a new array that contains the elements from the original array, with each element not appearing more than n times, where n is the input integer

algorithm:
  - declare variable results assigned to an empty array
  - declare variable freq assigned to empty object
  - iterate over input array
  - check freq; if array element is not present, initialize it at 1 and push element to results. If it is, check if its value is equal to the input integer. If it is, continue. If not, push the element to results and increment the value
  - after iteration, return results

*/

function deleteNth(arr, int) {
  let results = [];
  let freq = {};

  arr.forEach(elem => {
    if (freq[elem] === undefined) {
      results.push(elem);
      freq[elem] = 1;
    } else if (freq[elem] !== int) {
      results.push(elem);
      freq[elem] += 1;
    }
  });
  return results;
}