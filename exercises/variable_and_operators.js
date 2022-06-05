/*Variables y Operadores*/
/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable.*/

var resultado = "";

function Var_and_Ope_1() {
    var primerNumero = document.getElementById("input_Var_and_Ope_1").value;
    var segundoNumero = document.getElementById("input_Var_and_Ope_2").value;
    
    resultado = parseInt(primerNumero) + parseInt(segundoNumero);

    if(isNaN(resultado) == true)
    {
        alert("Para la suma solo ingrese numeros");
    }
    else {
        document.getElementById("h5_Var_and_Ope_1").innerHTML = resultado;
    }
      
}


/*b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una
3er variable.*/

function Var_and_Ope_2() {
    var primerString = document.getElementById("input_Var_and_Ope_1").value;
    var segundoString = document.getElementById("input_Var_and_Ope_2").value;
        
    resultado = primerString + segundoString;  
    
    document.getElementById("h5_Var_and_Ope_1").innerHTML = resultado;
}


/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de
letras del string) guardando el resultado de la suma en una 3er variable (utilizar
length).*/

function Var_and_Ope_3() {
    var primerString = document.getElementById("input_Var_and_Ope_1").value;
    var segundoString = document.getElementById("input_Var_and_Ope_2").value;

    resultado = primerString.length + segundoString.length;

    document.getElementById("h5_Var_and_Ope_1").innerHTML = resultado;
}
