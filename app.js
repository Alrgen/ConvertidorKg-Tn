let value = prompt("Ingrese el valor númerico de la magnitud"); //Ingreso del valor númerico sin magnitud
let initialMagnitude = prompt("Igrese magnitud: 'T' o 'Kg'"); //Ingreso de la magnitud

let valueToNumb = Number(value); //Transforma el caracter literal de "value" a float

//Esta función comprueba que el valor ingresado en "value" sea de tipo númerico
function InputErrorCheck(){
    if (!isNaN(valueToNumb)){
        CalculateValue();
    } else {
        alert('Caracter no válido'); //Devuelve una alerta en caso de contener simbolos o letras no válidos
    }
}

//Esta función comprueba el tipo de magnitud ingresado y realiza la operación pertinente
function CalculateValue(){
    switch(initialMagnitude){
        case 'T':
            ReturnValue(value * 1000, 'Kg');
            break;
        case 'Kg':
            ReturnValue(value / 1000, 'T');
            break;
        default:
            alert('Error al ingresar algun dato');
            break;
    }
}

//Esta función muestra por pantalla el valor transformado
function ReturnValue(val, magn){
    alert(`${value}${initialMagnitude} es igual a ${val}${magn}`);
}

InputErrorCheck();