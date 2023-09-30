#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  // YOUR CODE HERE
  myObject.incr = function() {
    this.value++;
  };
  
  console.log("{ type: 'object', value:", myObject.value, "}");
  myObject.incr();
  console.log("{ type: 'object', value:", myObject.value, ", incr: [Function] }");
  myObject.incr();
  console.log("{ type: 'object', value:", myObject.value, ", incr: [Function] }");
  myObject.incr();
  console.log("{ type: 'object', value:", myObject.value, ", incr: [Function] }");
  