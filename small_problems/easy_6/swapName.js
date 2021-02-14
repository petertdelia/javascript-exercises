// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// Examples:

swapName('Joe Roberts');    // "Roberts, Joe"

// problem: write a function that takes a string that contains a first name, a space, and a last name. It returns a new string that contains the last name, comma, space, first name

// input: string
// output: new string
// requirements:
//    assume valid input
//    return a new string

// data structure/algorithm:
//    split the string on the space, reverse it, and join it with a comma and a space. Return it.

// second algorithm:
//    use indexOf to find the occurrance of the space. Use slice to get copies of the first name and the last name, saved to variables. Use concatenation to create a new string with the comma and space and return.

function swapName(name) {
  return name.split(" ").reverse().join(", ");
}

function swapName(name) {
  let space = name.indexOf(" ");
  let firstName = name.slice(0, space);
  let lastName = name.slice(space + 1);
  return `${lastName}, ${firstName}`;
}

// What if the person has one or more middle names? Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name:

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"

// algorithm:
//    find the index of the last space in the name. Use that index to make a slice of the last name and of the rest of the name. Concatenate them together.

function swapName(name) {
  let space = name.lastIndexOf(" ");
  let restOfName = name.slice(0, space);
  let lastName = name.slice(space + 1);
  return `${lastName}, ${restOfName}`;
}

// algorithm:
//    split the name into an array. Pop and then unshift the last element to order the array correctly. Use slice to return the last name, then join it that leaves out the last name, then join that into a string using a space and use an array literal to create an array out of it. Join it 

function swapName(name) {
  name = name.split(' ')
  let lastName = name.pop()
  name.unshift(lastName);
  return name.slice(0,1) + ', ' + name.slice(1).join(' ');
}
