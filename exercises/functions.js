/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.*/

var resultado;

function Functions_1() {
    var primerNumero = document.getElementById("input_Functions1").value;
    var segundoNumero = document.getElementById("input_Functions2").value;
    
    resultado = Todo_sigue_igual(primerNumero,segundoNumero);

    /*
    if(isNaN(resultado) == true)
    {
        alert("Para la suma solo ingrese numeros");
    }
    else {
        console.log(resultado);
        document.getElementById("h3_resultado_Functions").innerHTML = resultado;
    }*/
}

/*b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.*/

function Functions_2() {
    var primerNumero = document.getElementById("input_Functions1").value;
    var segundoNumero = document.getElementById("input_Functions2").value;
    
    resultado = parseInt(primerNumero) + parseInt(segundoNumero);

    if(isNaN(resultado) == true)
    {
        alert("NaN: uno de los valores es erroneo");
    }
    else {
        console.log(resultado);
        document.getElementById("h3_resultado_Functions").innerHTML = resultado;
    }
}


/*c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

function Functions_3() {
    var primerNumero = document.getElementById("input_Functions1").value;
    var segundoNumero = document.getElementById("input_Functions2").value;
    
    if(isNaN(primerNumero) == true || isNaN(segundoNumero) == true)
    {
        console.log(resultado);
        document.getElementById("h3_resultado_Functions").innerHTML = true;

        return true;

    }
}



/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).*/

function Functions_4() {
    var primerNumero = document.getElementById("input_Functions1").value;
    var segundoNumero = document.getElementById("input_Functions2").value;
    
    //resultado = parseInt(primerNumero) + parseInt(segundoNumero);

    if(isNaN(primerNumero) == true || isNaN(segundoNumero) == true)
    {
        alert("NaN: uno de los valores es erroneo");
    }
    else {
        if(Number.isInteger(primerNumero) && Number.isInteger(segundoNumero))
        {
            resultado = primerNumero + segundoNumero;
        }
        else{
            resultado = Math.round(primerNumero) + Math.round(segundoNumero); 
        }

        console.log(resultado);
        document.getElementById("h3_resultado_Functions").innerHTML = resultado;
    }
}



/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/

function Todo_sigue_igual(numero1,numero2) {
    var numero1 = document.getElementById("input_Functions1").value;
    var numero2 = document.getElementById("input_Functions2").value;
    
    if(isNaN(numero1) == true || isNaN(numero2) == true)
    {
        alert("NaN: uno de los valores es erroneo");
    }
    else {
        if(Number.isInteger(numero1) && Number.isInteger(numero2))
        {
            resultado = numero1 + numero2;
        }
        else{
            resultado = Math.round(numero1) + Math.round(numero2); 
        }

        console.log(resultado);
        document.getElementById("h3_resultado_Functions").innerHTML = resultado;
    }
}