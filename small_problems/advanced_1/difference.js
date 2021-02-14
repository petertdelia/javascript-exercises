// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

/*

problem: write a function
input: two arrays;
output: returns an array, the mutated first array
requirements:
  -remove all occurrences in the first input array of the value(s) from the second input array

algorithm:
  - enter a while loop that breaks when valueToMutate = false;
  - enter a for loop that loops through the values of arr2 and checks if the value exists. Save the index of the variable

*/