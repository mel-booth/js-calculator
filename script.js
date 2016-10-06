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
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicate '.'");
    }
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    updateValue();

  }

  function updateValue(){
    totalString = inputs.join("");
    $("#output").html(totalString);

  }

  function getTotal(){
    totalString = inputs.join("");
    $("#output").html(eval(totalString));

  }

  $("button").on("click", function(){

    if (this.id==="clear"){
      inputs=[""];
      updateValue();
    }
    else if (this.id==="total"){
      getTotal();
    }
    else {
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".")===-1){
        getValue(this.id);
      }
      else{
        getValue(this.id);

      }
    }


  });
});
