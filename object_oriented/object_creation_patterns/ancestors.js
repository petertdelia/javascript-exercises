// name property added to make objects easier to identify
Object.prototype.ancestors = function() {
  let self = this;
  let objects = [];
  while (Object.getPrototypeOf(self).name) {
    objects.push(Object.getPrototypeOf(self).name);
    self = Object.getPrototypeOf(self);
  }
  objects.push('Object.prototype');
  return objects;
}

let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

