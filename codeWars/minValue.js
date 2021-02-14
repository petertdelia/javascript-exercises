// Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:

//     Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// Input >> Output Examples

console.log(minValue([1, 3, 1])) //  ==> return (13)

// Explanation:

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

console.log(minValue([5, 7, 5, 9, 7]))  // ==> return (579)

// Explanation:

// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

// Explanation:

// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 

/*

input: 

algorithm:
  - create a new sorted array with no duplicates
    - sort the array numerically
    - push each value to a new array if it's not the same as the last value
  - map the array so it contains strings
  join the new array, convert to number and return

  */

  function minValue(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    arr.forEach((num, idx) => {
      if (num !== arr[idx - 1]) {
        newArr.push(num);
      }
    });
    return Number(newArr.map(num => String(num)).join(''));
  }