function getValue() {
    let value = +document.getElementById("myInput").value;
    let seconds = value * 60 ;
    
    let result1 = document.getElementById('result')
    result1.innerHTML =`<h2>Result</h2>`+ seconds;
    
  }

  function resetValue(input){
    let value = document.getElementById('myInput');
    let seconds = "";
    let result1 = document.getElementById('result')
     result1.innerHTML =`<h2>Result</h2>`+ seconds;
  }
  
//  let num01 = +document.querySelector('num1');
//  console.log(num01);
function resetInput(input) {
    input.value = "";
  }
  