// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // should return true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // should return false
console.log(isValidWalk(['w'])) // should return false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // should return false

/*

input: an array of one-letter strings
output: boolean
rules:
  - returns true if the input array takes 'ten minutes', meaning it has ten elements, and if the input array takes you back to the starting point, meaning it has equal numbers of 'n's and 's's, 'e's and 'w's
  - the input array will always be valid, never empty

algo:
  - return false if the length of the array is not 10
  - declare sum variable, assigned to 0
  - iterate through array
  - if 'n', add 1
  - if 's', subtract 1
  - if 'e', add 2
  - if 'w', subtact 2
  - after iterating, return true if sum is 0. False otherwise

*/

function isValidWalk(steps) {
  if (steps.length !== 10) return false;

  let sum = 0;
  steps.forEach(step => {
    switch (step) {
      case 'n':
        sum += 1;
        break;
      case 's':
        sum -= 1;
        break;
      case 'e':
        sum += 2;
        break;
      case 'w':
        sum -= 2;
        break;
    }
  });
  
  return sum === 0;
}