
var accumulate = 0;
var typeOperation = "";

document.getElementById("add").addEventListener("click", sumar);
document.getElementById("substract").addEventListener("click", restar);
document.getElementById("multiply").addEventListener("click", multiplicar);
document.getElementById("divide").addEventListener("click", dividir);
document.getElementById("result").addEventListener("click", calcular);
document.getElementById("delete").addEventListener("click", reset);


function sumar() {
    if (typeOperation == "add") {
        calcular();
    } else {
        calcular();
        typeOperation = "add";
    }
}

function restar() {
    if (typeOperation == "substract") {
        calcular();
    } else {
        calcular();
        typeOperation = "substract";
    }
}

function multiplicar() {
    if (typeOperation == "multiply") {
        calcular();
    } else {
        calcular();
        typeOperation = "multiply";
    }
}

function dividir() {
    if (typeOperation == "divide") {
        calcular();
    } else {
        calcular();
        typeOperation = "divide";
    }
}


function reset() {
    typeOperation = "";
    accumulate = 0;
    calculate(accumulate)
}


function calcular() {

    if (isNaN(parseInt(document.getElementById("number1").value))) { 
        document.getElementById("total").innerText = "ERROR";
        return;
    }
    switch (typeOperation) { 
        case "add":
            accumulate += parseInt(document.getElementById("number1").value);
            break;
        case "substract":
            accumulate -= parseInt(document.getElementById("number1").value);
            break;
        case "multiply":
            accumulate *= parseInt(document.getElementById("number1").value);
            break;
        case "divide":
            accumulate /= parseInt(document.getElementById("number1").value);
            break;
        default:
            accumulate = parseInt(document.getElementById("number1").value);
            break;
    }

    calculate(accumulate);
}

function calculate(accumulate) {
    document.getElementById("number1").value = "";
    document.getElementById("number1").innerText = "";
    document.getElementById("total").innerText = accumulate;
}