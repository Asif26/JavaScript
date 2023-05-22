function ReVerse(){
    let num1 = document.getElementById('InPut').value;
    let rev = [];
    rev = num1 ;
    let OuReverse = rev.split("").reverse().join("");
    let result = document.getElementById('outPut');
    result.innerHTML = `<h2>Result</h2>`+OuReverse;
}