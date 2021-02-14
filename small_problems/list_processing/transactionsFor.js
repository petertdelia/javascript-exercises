// Write a function that takes two arguments, inventoryItem and transactions, and returns an array containing only the transactions for the specified inventoryItem.

// Example

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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// problem: write a function that takes two arguments, inventoryItem and transactions. The first is an integer, the second is an array of objects. It returns an array that contains all transactions that match the specified inventoryItem. The inventoryItem is a value at key 'id' in transactions.

// input: array of objects
// output: array of objects
//    requirements: filter out those transactions whose 'id' do not match the specified inventoryItem.

// data structure/algorithm: call filter on transactions. Pass obj to the callback function. In the body of the callback, test to see if obj['id'] === inventoryItem. The function should return an array that contains only those elements that return a truthy value. Return the results of the method call.

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(obj => obj['id'] === inventoryItem);
}