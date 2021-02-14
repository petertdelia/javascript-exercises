// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 

/*

input: two objects, recipe and available ingredients
output: integer, maximum number of cakes
rules:
  explicit:
    - there are no ingredient units (everything is the same)
    - ingredients that are not present can be considered 0
  implicit:
    - the values at each of the keys in the first object must be present in at least as much in the second object

algorithm:
  - declare an empty array, amounts.
  - get the keys and values from the first object, recipeArr
    - recipeArr = Object.entries(recipeArr)
  - get keys and values from the second object, ingredientsArr
  - declare variable isIngredientAvailable, assigned to true
  - begin Nested loop
    - iterate over recipeArr
      - if isIngredientAvailable === false, return 0; 
      - reassign isIngredientAvailable to false
    - iterate over ingredientsArr.
    - compare each inner array at element 0
      - if they are equal,
      - isIngredientAvailable = true;
      - divide ingredientsArray[idx][1] by recipeArr[idx][1], push the result to variable amounts
  - Sort the array
  - return the floor of the lowest value.

*/

function cakes(recipe, ingredients) {
  let amounts = [];
  let recipeArr = Object.entries(recipe);
  let ingredientsArr = Object.entries(ingredients);
  let isIngredientAvailable = true;

  for (let recipeIdx = 0; recipeIdx < recipeArr.length; recipeIdx += 1) {
    if (!isIngredientAvailable) return 0;
    isIngredientAvailable = false;
    for (let ingIdx = 0; ingIdx < ingredientsArr.length; ingIdx += 1) {
      if (recipeArr[recipeIdx][0] === ingredientsArr[ingIdx][0]) {
        isIngredientAvailable = true;
        amounts.push(ingredientsArr[ingIdx][1] / recipeArr[recipeIdx][1]);
      }
    }
  }

  return Math.floor(amounts.sort((a, b) => a - b)[0]);
}

/*

notes on my performance solving this problem:
  pros:
    - i solved it
    - i tested it while I was solving it
    - I figured out an algorithm before i coded
  cons:
    - it took a really long time
    - my algorithm is very long and complex
    - my brain hurts
  How I would like to be better next time
    - figure out a way to break the problem into smaller components that I can solve individually
  
  TODO:
    - redo this, figure out how to solve it at a high level
    - break into steps that I can solve.

alternative algorithm:
  - get the keys from the first object in an array
  - declare variable amounts assigned to []
  - iterate over that array
    - check to see if the value from the array exists as a key in the second object
      - if it does not, return 0
      - if it does, divide the value at that key from the value at the same key in the first object. push the result to an array.
  - sort the array, return the floor of the value at element 0.

*/

function cakes(recipe, ingredients) {
  let recipeKeys = Object.keys(recipe);
  let amounts = [];

  for (let key of recipeKeys) {
    if (!ingredients[key]) return 0;
    amounts.push(Math.floor(ingredients[key] / recipe[key]));
  }

  return amounts.sort((a, b) => a - b)[0];
  // or return Math.min(...amounts);
}