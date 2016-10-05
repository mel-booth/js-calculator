$(document).ready(function(){

  //Stores user input to calculate later on
  var inputs = [" "];

  //String to store current input
  var totalString;

  //Operators array - exluding .
  var operators1 = ["+", "-", "/", "*"];

  //Operators array including .
  var operators2 = ["."];

  //Numbers array for validation
  var nums = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input){


  }

  function updateValue(){



  }

  function getTotal(){
    totalString = inputs.join("");
    $("#output").html(eval(totalString));

  }
});
