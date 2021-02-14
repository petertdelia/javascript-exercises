// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

// Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// restate problem:
//  write a function that takes an array of numbers. It returns an array of numbers, containing the same number of elements as the input array. The value of each element of the returned array should be the running total of the elements up to that point in the input array.

// examples: see above. Assume valid input

// data structures: arrays, iteration

// algorithm: initilize an empty array, runningTotalArr. Initialize a runningTotal variable at 0. Start a for loop that iterates over the input array. In each loop, set the running total to += the value at that index. Push that value to the runningTotalArr. At the end of the loop, return the array.

function runningTotal(array) {
  let runningTotalArr = [];
  let runningTotal = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    runningTotal += array[idx];
    runningTotalArr.push(runningTotal);
  }
  return runningTotalArr;
}

// algorithm using array.protoype.map: map takes three arguments (we will use two): the value of the element (of the new array); the index of the element. 
// initilize a runningTotal variable at 0. Using map, Identify the element with a variable, element. In each iteration, we will set runningtotal += element. Then return runningtotal.

function runningTotal(array) {
  let runningTotal = 0;

  return array.map(element => runningTotal += element);
}