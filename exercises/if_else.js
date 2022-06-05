/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

var resultado;

function IfElse_1() {
    var nroAleatorio = Math.random();

    if(nroAleatorio >= 0.5)
    {
        document.getElementById("h3_resultado_IfElse").innerHTML = nroAleatorio;
        alert("Mayor que 0,5");
    }
    else {
        document.getElementById("h3_resultado_IfElse").innerHTML = nroAleatorio;
        alert("Menor que 0,5");
    }
}


/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años.*/

function IfElse_2() {
    //var nroAleatorio = Math.random();
    var edad = document.getElementById("input_IfElse").value;

    var Age = edad;

    if (Age < 2) 
    { 
        alert("Bebé"); 
    }
    else if (Age <= 12) 
    { 
        alert("Niño"); 
    }
    else if (Age <= 19) 
    { 
        alert("Adolescente"); 
    }
    else if (Age <= 30) 
    { 
        alert("Joven"); 
    }
    else if (Age <= 60) 
    { 
        alert("Adulto"); 
    }
    else if (Age <= 75) 
    { 
        alert("Adulto mayor"); 
    }
    else 
    { 
        alert("Anciano"); 
    }
}