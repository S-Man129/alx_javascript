#!/usr/bin/node

// Log "Start of the execution queue"
console.log("Start of the execution queue");

// Schedule the final code block using setTimeout with a delay of 0
setTimeout(function() {
  console.log("Final code block to be executed");
}, 0);

// Use a loop to log numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Log "End of the loop printing"
console.log("End of the loop printing");
