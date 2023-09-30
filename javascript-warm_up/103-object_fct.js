#!/usr/bin/node

const util = require('util');

const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

// YOUR CODE HERE
myObject.incr = function incr() {
  this.value++;
};

console.log(util.inspect(myObject, { depth: null }).replace(/Function \(incr\)/g, 'Function'));
myObject.incr();
console.log(util.inspect(myObject, { depth: null }).replace(/Function \(incr\)/g, 'Function'));
myObject.incr();
console.log(util.inspect(myObject, { depth: null }).replace(/Function \(incr\)/g, 'Function'));
