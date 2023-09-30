#!/usr/bin/node

function StudentHogwarts() {
    var privateScore = 0;
    var name = null;
  
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    return {
      setName: function(newName) {
        name = newName;
      },
      rewardStudent: function() {
        changeScoreBy(1);
      },
      penalizeStudent: function() {
        changeScoreBy(-1);
      },
      getScore: function() {
        return privateScore;
      }
    };
  }
  
  var harry = new StudentHogwarts();
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  var draco = new StudentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  console.log('Harry:', harry.getScore());
  console.log('Draco:', draco.getScore());
  