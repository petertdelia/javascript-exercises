/*

algorithm:
  - declare variable isDuplicateElement, assigned to true.
  - begin while loop
  - set isDuplicateElement to false
  - loop over arr1. Within that loop, loop over arr2. Compare elements; if there is a match, set isDuplicateElement to true, and break out of the inner loop. mutate arr1 and break out of the outer loop.
  - continue looping until isDuplicateElement is false.

*/

let arr1 = [1,2,3];
let arr2 = [1,2];

// mutating function
function arrayDiff(arr1, arr2) {
  let isDuplicateElement = true;

  while (isDuplicateElement) {
    isDuplicateElement = false;
    for (let arr1Idx = 0; arr1Idx < arr1.length; arr1Idx += 1) {
      for (let arr2Idx = 0; arr2Idx < arr2.length; arr2Idx += 1) {
        if (arr1[arr1Idx] === arr2[arr2Idx]) {
          isDuplicateElement = true;
          break;
        }
      }
      if (isDuplicateElement) {
        arr1.splice(arr1Idx,1);
        break;
      }
    }
  }

  return arr1;
}

// non-mutating function

/*
algorithm:
  - filter the first array
  - in the callback, pass each element; call every on the second input array, passing each element to the callback. Compare each element of the second array to the element passed by filter using a not equal to operator. This will return a truthy value if the element from the first input array does not match any of the values from the second input array. Return the result of every to filter.

  */

function arrayDiff(arr1, arr2) {
  return arr1.filter(arr1Elem => arr2.every(arr2Elem => arr1Elem !== arr2Elem));
}

// algorithm: filter a; in the test, return a truthy value only if the call to arr2.indexOf equals -1. 
function arrayDiff(arr1, arr2) {
  return arr1.filter(element => arr2.indexOf(element) === -1);
}