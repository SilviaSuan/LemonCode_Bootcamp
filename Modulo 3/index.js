const product = { count: 3, price: 12.55, type: "alimentación" };

var getTotal;

if (product.count == 0){
    getTotal= 0;
} else if (product.count > 0) {
    getTotal = product.count*product.price;
}

console.log(getTotal);

var getIva;


switch (product.type) {
   
    case "alimentación":
        getIva = 0.1;
        break;
    case "libros":
        getIva = 0.04;
        break;

    default:
        getIva = 0.21;
        break;
}

console.log(getIva);

var getTotalIva = getTotal + getTotal * getIva ;

console.log(getTotalIva);


const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 12
  }

  var getSalary;


if (empleado.bruto < 12000) {
    getSalary = empleado.bruto;
} else if (empleado.bruto < 24000) {
    getSalary = empleado.bruto - empleado.bruto*0.08;
} else if (empleado.bruto < 34000) {
    getSalary= empleado.bruto - empleado.bruto*0.16;
}else if (empleado.bruto > 34000) {
    getSalary = empleado.bruto - empleado.bruto*0.30;
};

console.log(getSalary);

if (empleado.hijos > 0){
   getSalary = getSalary + getSalary*0.02;
}

console.log(getSalary);

getSalaryMonthly = getSalary / empleado.pagas;

console.log(getSalaryMonthly);