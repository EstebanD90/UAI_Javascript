var IMC;

function limpiarResulado() {
    document.getElementById('input_calculadora_resultado').value = "";
}


function calcularIMC() {
    limpiarResulado();
    var estaturaCM = document.getElementById('input_calculadora_estatura').value;
    var estaturaMetros = estaturaCM / 100
    var estatura = estaturaMetros * estaturaMetros; 
    var peso = document.getElementById('input_calculadora_peso').value;
    
    IMC = parseFloat(peso) / parseFloat(estatura);

    if(isNaN(IMC) == true)
    {
        limpiarResulado();
        alert("Por favor, ingrese solo ingrese números");
    }
    else if(peso == 0 || estaturaCM == 0) 
    {
        limpiarResulado();
        alert("No se admite el valor 0");
    }
    else if(estaturaCM <= 9 || estaturaCM >= 273)
    {
        limpiarResulado();
        alert("La estatura debe ser entre 10 y 272 centimetros");
    }
    else if(peso <= 1 || peso >= 546)
    {
        limpiarResulado();
        alert("El peso debe ser entre 2 y 545 kilogramos");
    }
    else if(IMC == Infinity)
    {
        limpiarResulado();
        alert("Infinito. Por favor, corrija algún dato!");
    }
    else {
        limpiarResulado();
        console.log(IMC.toFixed(2));
        document.getElementById('input_calculadora_resultado').value = IMC.toFixed(2);


        var resultadoIMC = document.getElementById('input_calculadora_resultado').value;
		
        document.getElementById("div_tabla_imc").style.display="block";

        if(resultadoIMC < 18.5)
        {
                //document.getElementById("h3_resultado").innerHTML = resultadoIMC;
                mostrarIMC(1);
        }
        else if(resultadoIMC >= 18.5 && resultadoIMC < 25.0) {
                //document.getElementById("h3_resultado").innerHTML = resultadoIMC;
                mostrarIMC(2);
        }
        else if(resultadoIMC >= 25.0 && resultadoIMC < 30.0) {
                //document.getElementById("h3_resultado").innerHTML = resultadoIMC;
                mostrarIMC(3);
        }
        else if(resultadoIMC >= 30.0) {
                //document.getElementById("h3_resultado").innerHTML = resultadoIMC;
                mostrarIMC(4);
        }           

    }

}

function mostrarIMC(nroIMC) {
    let HtmlRowsDetailsIMC = "";

      switch(nroIMC) {
        case 1:
            HtmlRowsDetailsIMC = HtmlRowsDetailsIMC.concat(
                "<tr>",
                "<td>", "Peso inferior al normal", "</td>",
                "<td>", "Menos de 18.5", "</td>",
                "</tr>"
              )
            break;
        case 2:
            HtmlRowsDetailsIMC = HtmlRowsDetailsIMC.concat(
                "<tr>",
                "<td>", "Normal", "</td>",
                "<td>", "18.5 - 24.9", "</td>",
                "</tr>"
              )
            break;
        case 3:
            HtmlRowsDetailsIMC = HtmlRowsDetailsIMC.concat(
                "<tr>",
                "<td>", "Peso superior al normal", "</td>",
                "<td>", "25.0 - 29.9", "</td>",
                "</tr>"
              )
            break;
        case 4:
            HtmlRowsDetailsIMC = HtmlRowsDetailsIMC.concat(
                "<tr>",
                "<td>", "Obesidad", "</td>",
                "<td>", "Más de 30.0", "</td>",
                "</tr>"
              )
            break;					
    
    };

    
    document.querySelector('#div_tabla_imc').innerHTML = `
    <table id="tabla_imc">
      <thead>
       <th>Composición Corporal</th>
       <th>Índice de masa corporal (IMC)</th>
      </thead>
      <tbody>
      `
        + HtmlRowsDetailsIMC +
      `
      </tbody>
    </table>
  `;
}
