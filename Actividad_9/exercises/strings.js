/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/
var resultado;

function Strings_1() {
    var primerString = document.getElementById("input_Strings").value;

    if(primerString.length < 10)
    {
        alert("Ingrese al menos 10 caracteres");
    }
    else
    {
        resultado = primerString.toUpperCase();
    
        document.getElementById("h3_resultado_Strings").innerHTML = resultado;
    }
     
}


/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/

function Strings_2() {
    var primerString = document.getElementById("input_Strings").value;
    var subString_5;

    if(primerString.length < 10)
    {
        alert("Ingrese al menos 10 caracteres");
    }
    else
    {
        subString_5 = primerString.substring(0,5);
        document.getElementById("h3_resultado_Strings").innerHTML = "Los primeros 5 caracteres son: " + subString_5;
    }           
}


/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/

function Strings_3() {
    var primerString = document.getElementById("input_Strings").value;
    var subString_3;

    if(primerString.length < 10)
    {
        alert("Ingrese al menos 10 caracteres");
    }
    else
    {
        subString_3 = primerString.substring(primerString.length -3);
        document.getElementById("h3_resultado_Strings").innerHTML = "Los últimos 3 caracteres son: " + subString_3;
    }           
}


/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/

function Strings_4() {
    var primerString = document.getElementById("input_Strings").value;
    var primeraMayuscula = primerString.substring(0,1).toUpperCase();
    var restoMinuscula = primerString.substring(1,primerString.length).toLowerCase();

    if(primerString.length < 10)
    {
        alert("Ingrese al menos 10 caracteres");
    }
    else
    {
        resultado = primeraMayuscula + restoMinuscula;
        document.getElementById("h3_resultado_Strings").innerHTML = resultado;
    }           
}


/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/

function Strings_5() {
    var primerString = document.getElementById("input_Strings").value;
    var espacioBlanco = primerString.indexOf(" ") + 1;

    if(primerString.length < 10)
    {
        alert("Ingrese al menos 10 caracteres y un espacio en blanco");
    }
    else
    {
        //subString_5 = primerString.substring(0,4);
        document.getElementById("h3_resultado_Strings").innerHTML = "El espacio en blanco está en: " + espacioBlanco;
    }           
}


/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).*/

function Strings_6() {
    var fullString = document.getElementById("input_Strings").value;
    var primer_subString = fullString.substring(0, 1).toUpperCase() + fullString.substring(1, fullString.indexOf(' ')).toLowerCase() + '';
    var segundo_subString = fullString.substring(fullString.indexOf(' ') + 1,fullString.indexOf(' ') + 2).toUpperCase() + fullString.substring(fullString.indexOf(' ') + 3, fullString.length).toLowerCase();

    resultado = primer_subString + ' ' +  segundo_subString;

    /*
    resultado = fullString.substring(0, 1).toUpperCase() + fullString.substring(1, fullString.indexOf(' ')).toLowerCase() 
                + '' 
                + fullString.substring(fullString.indexOf(' ') + 1,fullString.indexOf(' ') + 2).toUpperCase()
                + fullString.substring(fullString.indexOf(' ') + 3, fullString.length).toLowerCase();*/

    if(fullString.length < 10)
    {
        alert("Ingrese al menos 10 caracteres y un espacio en blanco");
    }
    else
    {
        document.getElementById("h3_resultado_Strings").innerHTML = resultado;
    }           
}
