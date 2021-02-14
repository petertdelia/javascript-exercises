// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// Examples:

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

// problem: write a function that takes two arguments: inventoryItem and transactions, and returns a boolean. The function should return true when the quantity for a given item id is greater than zero. Use the movement value ('in' for +, 'out' for -) to add or subtract each quantity from the total quantity for a given id. Use the transactionsFor function from the previous exercise.

// input: integer, array of objects.
// output: boolean.
//    requirements: calculate a total quantity for the given item id. Use this quantity to determine whether to return true or false (if quantity > 0, return true. Else, return false.)
//    Use the transactionsFor function from the previous exercise. That function takes the same two parameters and returns a filtered list of the given inventoryItem.

// data structure/algorithm: Use transactionsFor to create a list of the correct items to tally. Call reduce on the result. In the callback, pass quantity, obj; in the body of the callback, use a ternary operator to check if obj['movement'] === 'in'; if it is, add obj['quantity'] to the sum; else, subtract quantity from the sum; include a second argument to reduce after the callback, 0, which will serve as the starting value for the function. Check if the result of the reduce method call is > 0. Return the boolean result.

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(obj => obj['id'] === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let quantity = transactionsFor(inventoryItem, transactions)
    .reduce((sum, obj) => {
      return obj.movement === 'in' ? sum + obj.quantity : sum - obj.quantity;
    }, 0);
    return quantity > 0;
}