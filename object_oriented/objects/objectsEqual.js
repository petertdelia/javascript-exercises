// In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates to true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo'}, {a: 'foo', b: 'bar'}));            // false

/*

for every key in obj1, check that it exists in obj2. If not, return false. If it does, check that the values are the same. If they are, return true; if not return false. After iterating, return true

*/

function objectsEqual(obj1, obj2) {

  let [shortObj, longObj] = [obj1, obj2].sort((a, b) => {
    return Object.keys(a).length - Object.keys(b).length;
  });

  for (let key in longObj) {
    if (longObj.hasOwnProperty(key)) {
      if (shortObj.hasOwnProperty(key)) {
        if (longObj[key] !== shortObj[key]) return false;
      } else return false;
    }
  }

  return true;
}