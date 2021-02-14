// Sherlock has to find suspects on his latest case. He will use your method, dear Watson. Suspect in this case is a person which has something not allowed in his/her pockets.

// Allowed items are defined by array of numbers.

// Pockets contents are defined by map entries where key is a person and value is one or few things represented by an array of numbers (can be nil or empty array if empty), example:

let pockets = { 
  bob: [1],
  tom: [2, 5],
  jane: [7]
};

// Write method which helps Sherlock to find suspects. If no suspect is found or there are no pockets (pockets == nil), the method should return nil.

console.log(find_suspects(pockets, [1, 2])) // # => [:tom, :jane]
console.log(find_suspects(pockets, [1, 7, 5, 2])) // # => nil
console.log(find_suspects(pockets, [])) //# => [:bob, :tom, :jane]
console.log(find_suspects(pockets, [7]))// # => [:bob, :tom]

/*

input; object, array of numbers
output: array of keys from the input object
rules:
  explicit:
    - the input array represents items that are allowed to be values in the input object
    - if a key's values contains items that are not allowed, that is, not in the input array, then the output array should contain the key at that value.

algorithm:
  - declare variable suspects, assigned to empty array
  - get the keys, values from pockets in a nested array
  - Iterate through this array
  - iterate through each value of the outer array at [1]
  - for each of these values, check if the value is present in the input array
  - if the value is not present, then add the person (outerArr[0]) to suspects
  - for each person in pockets, iterate through their pocket array and check if each value is present in the input array.

*/

function find_suspects(pockets, allowedItems) {
  let suspects = [];
  let keysValues = Object.entries(pockets);

  for (let outerIdx = 0; outerIdx < keysValues.length; outerIdx += 1) {
    for (let innerIdx = 0; innerIdx < keysValues[outerIdx][1].length; innerIdx += 1) {
      if (!allowedItems.includes(keysValues[outerIdx][1][innerIdx])) {
        suspects.push(keysValues[outerIdx][0]);
      }
    }
  }
  return suspects;
}