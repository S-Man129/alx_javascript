#!/usr/bin/node

function welcomeMessage(fullName) {
    return function() {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create variables with calls to welcomeMessage
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');
    