// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// Example:

function buyFruit(list) {
  return list.map(item => `${item[0]},`.repeat(item[1]).split(','))
             .reduce((finalArr, arr) => [...finalArr, ...arr], [])
             .filter(element => element.length > 0);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]