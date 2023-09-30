#!/usr/bin/node

console.log("Start of the execution queue");

setTimeout(function() {
  console.log("Final code block to be executed");
}, 0);

// Use a loop to log numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");
