// Se declara la variable relacionada con el tipo de habitación y se crea un evento para que el usuario pueda interactuar. También se crea una variable partiendo de un precio 0.

var roomtype = document.getElementById("type");
var price = 0;

// Utilizamos switch para realizar un calculo en base al precio de la habitación y su categoría.

function roomType(option) {
    switch (option) {
        case "standard":
            price += 100;
            break;
        case "junior suite":
            price += 120;
            break;
        case "suite":
            price += 150;
            break;
        default:
            price += 100;
            break;
    }
}

// Creamos una función con objeto if para cargar el plus de 20 euros si el usuario selecciona el Spa.

function Spa(spa) {
    if (spa == true) {
        price += 20;
        return price;
    }
}

// Creamos otra función con objeto switch para incrementar o disminuir el precio en un 25% en base a si el usuario selecciona habitación individual o triple.

function roomSize(size) {
    switch (size) {
        case "single":
            price *= 0.75;
            break;
        case "triple":
            price *= 1.25;
            break;
        default:
            break;
    }
}

// Se declara una función con objeto if para cargar 10 euros por noche si el usuario selecciona el uso del parking.

function Parkinglot(parking) {
    if (parking != 0 && parking != "") {
        payParking = parking * 10;
        price += payParking;
    }
    return price;
}

// Declaramos una función con objeto if para determiar el precio final en base a los días que el usuario se hospedará.

function Days(days) {
    if (days != "" && days != 0) {
        price *= days;
        finalPrice();
    } else {
        document.getElementById("total").innerText = "Introduzca los días que va a hospedarse";
    }
}

// Declaramos un evento con el que el usuario podrá saber el precio final a partir de los calculos declarados anteriormente.

function finalPrice() {
    return document.getElementById("total").innerText = "El precio es: " + price + " euros";
}

// Declaramos una nueva función para calcular todo lo que el usuario haya seleccionado.

function calcular() {

    var option = roomtype.options[roomtype.selectedIndex].value;
    var spa = document.getElementById("spa").checked;
    var size = document.getElementById("sizes").value;
    var days = document.getElementById("days").value;
    var parking = document.getElementById("parking").value;

    // Llama a cada una de las operaciones en función de las opciones elegidas
    roomType(option); // Elige el tipo de habitación
    Spa(spa); // Aumenta el precio si el spa está seleccionado
    roomSize(size); // Varía el precio en función del tipo de habitación
    Parkinglot(parking); // Aumenta el precio en función de los días de parking seleccionados
    Days(days); // adapta el precio al número de días seleccionado

    price = 0; // reinicia el valor de la variable price para que no acumule el precio de nuevo
}

// Creamos el evento para que podamos interactuar con el botón.

document.getElementById("calculate").addEventListener("click", calcular);