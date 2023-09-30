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
  
  function formatObject(obj) {
    const formatted = JSON.stringify(obj, (key, value) => {
      if (typeof value === 'function') {
        return '[Function]';
      }
      return value;
    }, 2);
    console.log(formatted);
  }
  
  formatObject(myObject);
  myObject.incr();
  formatObject(myObject);
  myObject.incr();
  formatObject(myObject);
  