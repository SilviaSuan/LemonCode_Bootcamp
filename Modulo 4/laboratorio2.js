var number1 = () => parseInt(document.getElementById("input-number1").value);
var number2 = () => parseInt(document.getElementById("input-number2").value);

var add = () => number1() + number2();
var substract = () => number1() - number2();
var multiply = () => number1() * number2();
var divide = () => number1() / number2();

var resultAdd = () => document.getElementById("input-result").innerText = add();
var resultSubstract = () => document.getElementById("input-result").innerText = substract();
var resultMultiply = () => document.getElementById("input-result").innerText = multiply();
var resultDivide = () => document.getElementById("input-result").innerText = divide();

document.getElementById("add").addEventListener("click", resultAdd);
document.getElementById("substract").addEventListener("click", resultSubstract);
document.getElementById("multiply").addEventListener("click", resultMultiply);
document.getElementById("divide").addEventListener("click", resultDivide);


if (!number1 || !number2) {
    console.log("Error!");
}






