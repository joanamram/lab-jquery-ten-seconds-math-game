// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operation, limit) {
  this.operation=operation;
  this.limit=limit;


  this.newQuestion= function(){
    var numberOne = generateRandomNumber(limit);
    var numberTwo= generateRandomNumber(limit);
    if(!checkNumber(numberOne, numberTwo, operation)){
      this.newQuestion();
    } else {
      var result;
      console.log(numberOne,operation,numberTwo)
        switch (this.operation){
          case "+":
            result= numberOne+numberTwo;
            break;
          case "-":
            result= numberOne-numberTwo;
            break;
          case "/":
            result= numberOne/numberTwo;
            break;
          case "*":
            result= numberOne*numberTwo;
            break;
          default:
            console.log("Operator doesn´t exit!");
        }
        this.questionAnswer = result;
        var i = 10;
        intervalId = setInterval(function () {
        console.log(i);
        i--;
        if (i < 1) {
          console.log("You lose!");
          clearInterval(intervalId)
        }
        }, 1000);
    }
  };

  this.isCorrectAnswer= function(userResult){
    if (this.questionAnswer === userResult){
      console.log("Great! Next question!");
      clearInterval(intervalId)
      this.newQuestion()
    };
  };

};

var generateRandomNumber = function(limit){
  return Math.floor(Math.random()*limit);

};


var checkNumber= function(numberOne, numberTwo, operator){
  if (numberOne<numberTwo && operator=="-"){
    return false;
  } else {
    return true;
  }

}

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
