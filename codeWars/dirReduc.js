// Once upon a time, on a way through the old wild mountainous west,…

// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
// How I crossed a mountain desert the smart way.

// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };

// or

// [North, South, South, East, West, North, West]

// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]

// or

// { "WEST" }

// or

// [West]

// Other examples:

// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
// Task

// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

//     The Haskell version takes a list of directions with data Direction = North | East | West | South.
//     The Clojure version returns nil when the path is reduced to nothing.
//     The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

// See more examples in "Sample Tests:"
// Notes

//     Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

//     if you want to translate, please ask before translating.

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //, ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) //, ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) //, [])

console.log(areOpposites('NORTH', 'SOUTH'));
console.log(areOpposites('SOUTH', 'NORTH'));
console.log(areOpposites('WEST', 'SOUTH'));
console.log(areOpposites('NORTH', 'EAST'));
console.log(areOpposites('EAST', 'WEST'));
/*

input:
  - array of strings
output:
  - array of strings or empty array
rules:
  - the output array should reduce the directions from the input array
  - this means if two directions are opposite and adjacent ['north', 'south'], they should both be removed from the output array
  - this process should continue until there are no more directions both opposite and adjacent in the output array
  - the input array should not be mutated

algorithm:

  - initialize a copy of the input array
  - initialize a boolean called hasOpposites
  - do while hasOpposites is true
  - set hasOpposites to false
  - use a for loop
  - look at two adjacent directions; if they are opposites, splice them out of the array and set hasOpposites to true
  - loop through until there are no more opposites
  - return the input copy

function areOpposites
  - initialize a const called OPPOSITES, which is an object whose keys are each direction and whose values are the opposite direction
  - returns true if direction1 is opposite of direction 2, or vice versa
  - false otherwise

*/

function dirReduc(directions) {
  let arrCopy = directions.slice();
  let hasOpposites;

  do {
    hasOpposites = false;
    for (let idx = 0; idx < arrCopy.length; idx += 1) {
      if (areOpposites(arrCopy[idx], arrCopy[idx + 1])) {
        arrCopy.splice(idx, 2);
        hasOpposites = true;
      }
    }
  } while (hasOpposites);

  return arrCopy;
}

function areOpposites(direction1, direction2) {
  const OPPOSITES = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST'
  };
  return OPPOSITES[direction1] === direction2;
}