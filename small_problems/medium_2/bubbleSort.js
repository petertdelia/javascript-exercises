// Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.
					
// 6 	2 	7 	1 	4 	Start: compare 6 > 2? Yes
// 2 	6 	7 	1 	4 	Swap
// 2 	6 	7 	1 	4 	6 > 7? No (no swap)
// 2 	6 	7 	1 	4 	7 > 1? Yes
// 2 	6 	1 	7 	4 	Swap
// 2 	6 	1 	7 	4 	7 > 4? Yes
// 2 	6 	1 	4 	7 	Swap
					
// 2 	6 	1 	4 	7 	2 > 6? No
// 2 	6 	1 	4 	7 	6 > 1? Yes
// 2 	1 	6 	4 	7 	Swap
// 2 	1 	6 	4 	7 	6 > 4? Yes
// 2 	1 	4 	6 	7 	Swap
// 2 	1 	4 	6 	7 	6 > 7? No
					
// 2 	1 	4 	6 	7 	2 > 1? Yes
// 1 	2 	4 	6 	7 	Swap
// 1 	2 	4 	6 	7 	2 > 4? No
// 1 	2 	4 	6 	7 	4 > 6? No
// 1 	2 	4 	6 	7 	6 > 7? No
					
// 1 	2 	4 	6 	7 	1 > 2? No
// 1 	2 	4 	6 	7 	2 > 4? No
// 1 	2 	4 	6 	7 	4 > 6? No
// 1 	2 	4 	6 	7 	6 > 7? No
// 1 	2 	4 	6 	7 	No swaps; all done; sorted

// We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

// Examples:

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*

problem: write a function that takes:
input: an array
output: the same array sorted in-place
requirements:
  -implements the bubble sort algorithm
  -compare two consecutive elements
  -if the first is greater, swap the elements
  -iterate until no more swaps are made

data structure/algorithm:
  -declare a flag variable
  -start do/while loop
  -set flag to false;
  -perform for loops within the do/while loop
  -in each iteration of the for loop, compare adjacent elements
    -if (array[idx] > array[idx + 1])
  -if the first is greater than the second, swap them
    -[array[idx + 1], array[idx]] = [array[idx], array[idx + 1]];
  -if a swap is performed, set the flag variable to true
  -condition at the end of the do/while loop should be to continue iterating if flag is true

*/

function bubbleSort(array) {
  let flag;

  do {
    flag = false;

    for (let idx = 0; idx < array.length; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx + 1], array[idx]] = [array[idx], array[idx + 1]];
        flag = true;
      }
    }

  } while (flag);
}