/*a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las
palabras.*/

var resultado;

function For_1() {
    var palabra1 = document.getElementById("input_For1").value;
    var palabra2 = document.getElementById("input_For2").value;
    var palabra3 = document.getElementById("input_For3").value;
    var palabra4 = document.getElementById("input_For4").value;
    var palabra5 = document.getElementById("input_For5").value;
    var array = [palabra1,palabra2,palabra3,palabra4,palabra5];

    resultado = array;

    var lenghtArray = array.length;
    for (let item = 0; item < lenghtArray; item++) {
        alert(array[item]);

    }

    document.getElementById("h3_resultado_For").innerHTML = resultado;
}

/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.*/

function For_2() {
    var palabra1 = document.getElementById("input_For1").value;
    var palabra2 = document.getElementById("input_For2").value;
    var palabra3 = document.getElementById("input_For3").value;
    var palabra4 = document.getElementById("input_For4").value;
    var palabra5 = document.getElementById("input_For5").value;
    var array = [palabra1,palabra2,palabra3,palabra4,palabra5];

    var lenghtArray = array.length;

    for (let item = 0; item < lenghtArray; item++) {
        array[item] = array[item].substring(0, 1).toUpperCase() + array[item].slice(1, array[item].length).toLowerCase();
        alert(array[item]);

    }


}

/*c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

function For_3() {
    var sentence = "";
    var palabra1 = document.getElementById("input_For1").value;
    var palabra2 = document.getElementById("input_For2").value;
    var palabra3 = document.getElementById("input_For3").value;
    var palabra4 = document.getElementById("input_For4").value;
    var palabra5 = document.getElementById("input_For5").value;
    var array = [palabra1,palabra2,palabra3,palabra4,palabra5];

    var lenghtArray = array.length;

    for(let item = 0; item < lenghtArray; item++)
    {
        sentence += array[item]
        alert(sentence)
    }

    document.getElementById("h3_resultado_For").innerHTML = sentence;

}

/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al número
9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

function For_4() {
    var arrayVacio = [];

    for(let item = 0; item < 10; item++)
    {
        arrayVacio[item] = item;
    }    

    document.getElementById("h3_resultado_For").innerHTML = arrayVacio;
    console.log(arrayVacio);
    alert(arrayVacio);
}