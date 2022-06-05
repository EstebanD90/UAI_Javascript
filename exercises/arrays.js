/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/

var resultado;

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function Arrays_1() {
    resultado = 'Mes 5: '.concat(meses[4], '- Mes 11: ', meses[10]);
    document.getElementById("h3_resultado_Arrays").innerHTML = resultado;
    console.log(resultado); 
    alert(resultado);
}

/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

function Arrays_2() {
    resultado = meses.sort();
    document.getElementById("h3_resultado_Arrays").innerHTML = resultado;
    console.log(resultado); 
    alert(resultado);
}


/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

function Arrays_3() {
    var elemento1 = document.getElementById("input_Arrays1").value;
    var elemento2 = document.getElementById("input_Arrays2").value;

    meses.push(elemento2);
    meses.unshift(elemento1);
    resultado = meses;

    document.getElementById("h3_resultado_Arrays").innerHTML = resultado;
    console.log(resultado); 
    //alert(resultado);
}


/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

function Arrays_4() {
    meses.shift();
    meses.pop();
    resultado = meses;

    document.getElementById("h3_resultado_Arrays").innerHTML = resultado;
    console.log(resultado);
    //alert(resultado); 
}


/*e. Invertir el orden del array (utilizar reverse).*/

function Arrays_5() {
    resultado = meses;
    resultado.reverse();

    document.getElementById("h3_resultado_Arrays").innerHTML = resultado;
    console.log(resultado); 
    //alert(resultado);
}

/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).*/

function Arrays_6() {

    resultado = meses;
    resultado = resultado.join('-');

    document.getElementById("h3_resultado_Arrays").innerHTML += resultado;
    console.log(resultado); 
    //alert(resultado);
}



/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).*/

function Arrays_7() {
    resultado = meses;
    resultado = resultado.slice(4,11);

    document.getElementById("h3_resultado_Arrays").innerHTML = resultado;
    console.log(resultado); 
    //alert(resultado);
}