#!/usr/bin/node

const util = require('util');

const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

// YOUR CODE HERE
myObject.incr = function() {
  this.value++;
};

console.log(util.inspect(myObject, { depth: null }));
myObject.incr();
console.log(util.inspect(myObject, { depth: null }));
myObject.incr();
console.log(util.inspect(myObject, { depth: null }));
