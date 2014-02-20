//Josh and Aaron
var factorial0 = function(inputNumber) {
  return 1;
};

var factorialLesson = function(inputNumber) {
  var counter = (inputNumber - 1);
  
  while (counter > 0) {  
    inputNumber = (inputNumber * counter);
    counter = counter -= 1;
}
return inputNumber;
};
//modification
