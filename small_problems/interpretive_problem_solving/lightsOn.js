// You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.

// Examples:

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/*

problem: write a function that:
input: a number, count
output: an array of values that represent switches that are on:
  requirements: count represents a number of switches. A switch consists of a number and a boolean value, on or off (true or false). The number of switches, represented by count, begins at 1 and ends at count, inclusive.
  -the switches are all off at the beginning.
  -the function should iterate over the switches count times. In each iteration, it toggles the switches. 
  -Each pass it toggles the switches that evaluate to true when (switchNumber % count === 0).
  
data structure/algorithm:
  -create a bank of count switches (as an object called switches), with keys from 1 to count, and values set to false
    -let switches = {};
    -for (let number = 1; number <= count; number += 1) {
      switches[number] = false;
    }

  -iterate over switches using variable outerCount; iterate again over switches using variable innerCount. In the inner loop, check if switches[innCount] % outerCount === 0; if this evaluates to true, toggle switch.
    -for (let outerCount = 1; outerCount <= count; outerCount += 1) {
      for (let innerCount = 1; innerCount <= count; innerCount += 1) {
        if (switches[innerCount] % outerCount === 0) {
          switches[innerCount] = !switches[innerCount]
        }
      }
    }

  -after iteration ends, create an array of switches whose values are true; return this array.
    return Object.entries(switches).filter(entry => entry[1]).map(entry => Number(entry[0]));

*/

function lightsOn(count) {
  let switches = {};
  for (let number = 1; number <= count; number += 1) {
    switches[number] = false;
  }

  for (let outerCount = 1; outerCount <= count; outerCount += 1) {
    for (let innerCount = 1; innerCount <= count; innerCount += 1) {
      if (innerCount % outerCount === 0) {
        switches[innerCount] = !switches[innerCount]
      }
    }
  }

  return Object.entries(switches).filter(entry => entry[1]).map(entry => Number(entry[0]));
}