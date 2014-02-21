var recursion = function(number) {
  number = parseFloat(number);
  if (number === 0) {
    return 1;
  } else if (number < 0) {
    alert('You need a positive number to compute factorials');
    return
  } else {
    return (number) * (recursion(number - 1));
  }
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    number = $("input#inputNumber").val();
    
    var result = recursion(number);
    $("#result").text(result);
    event.preventDefault();
  });
});
