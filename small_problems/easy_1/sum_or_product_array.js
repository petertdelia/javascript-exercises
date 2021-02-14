const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidEntry(entry) {
  return !['p','s'].includes(entry);
}

function computeSum(array) {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);
}

function computeProduct(array) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return array.reduce(reducer);
}

prompt('Welcome to Sum or Product!');
prompt('Please enter all the integers you would like to compute (careful, there\'s no validation here!):');
let array = Array.from(readline.question());

array = array.map(each => Number(each));

debugger;

prompt('Please enter "s" to compute the sum or "p" to compute the product:');
let sumOrProduct = readline.question();

while (invalidEntry(sumOrProduct)) {
  prompt('Please enter "s" to compute the sum or "p" to compute the product:');
  sumOrProduct = readline.question();
}

let total;
let userValue;
if (sumOrProduct === "s") {
  userValue = "sum";
  total = computeSum(array);
} else {
  userValue = "product";
  total = computeProduct(array);
}

let min = Math.min(...array);
let max = Math.max(...array);

console.log(`The ${userValue} of the integers between ${min} and ${max} is ${total}.`);
