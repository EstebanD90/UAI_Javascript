var resultadoLong;


function calularLongDimensiones() {
    var dimensiones = document.getElementById('select_dimensiones').value;

    if (dimensiones == 2) {
        calcularLong(1);
    }
    else if (dimensiones == 3) {
        calcularLong(2);
    }

}


function calcularLong(dimensiones) {
    var coord_AX = document.getElementById('inputAX').value;
    var coord_AY = document.getElementById('inputAY').value;
    var coord_BX = document.getElementById('inputBX').value;
    var coord_BY = document.getElementById('inputAX').value;


    switch (dimensiones) {
        case 1:
            if (isNaN(coord_AX) == true || isNaN(coord_AY) == true || isNaN(coord_BX) == true || isNaN(coord_BY) == true) {
                alert('Ingrese valores numéricos');
            }
            else if (coord_AX <= 0 || coord_AY <= 0 || coord_BX <= 0 || coord_BY <= 0) {
                alert('Ingrese valores mayores a 0');
            }
            else {
                var longDosDimensiones = Math.sqrt(Math.pow((coord_AX - coord_BX), 2) + Math.sqrt(Math.pow((coord_AY - coord_BY), 2)))

                resultadoLong = longDosDimensiones;
                document.getElementById('h3_resultado').value = resultadoLong.toFixed(3);

                console.log(resultadoLong);
            }

            break;

        case 2:
            var coord_AZ = document.getElementById('inputAZ').value;
            var coord_BZ = document.getElementById('inputBZ').value;

            if (isNaN(coord_AX) == true || isNaN(coord_AY) == true || isNaN(coord_AZ) == true
                || isNaN(coord_BX) == true || isNaN(coord_BY) == true || isNaN(coord_BZ) == true) {
                alert('Ingrese valores numéricos');
            }
            else if (coord_AX <= 0 || coord_AY <= 0 || coord_AZ <= 0 || coord_BX <= 0 || coord_BY <= 0 || coord_BZ <= 0) {
                alert('Ingrese valores mayores a 0');
            }
            else {
                var longTresDimensiones = Math.sqrt(Math.pow((coord_AX - coord_BX), 2) + Math.sqrt(Math.pow((coord_AY - coord_BY), 2)) + Math.sqrt(Math.pow((coord_AZ - coord_BZ), 2)))

                resultadoLong = longTresDimensiones;

                console.log(resultadoLong);
                document.getElementById('h3_resultado').value = resultadoLong.toFixed(3);
            }

            break;
    }

}

function mostrarXYZ() {
    var dimensiones = document.getElementById('select_dimensiones').value;

    if (dimensiones == 2) {
        mostrarDimensiones(1);
    }
    else if (dimensiones == 3) {
        mostrarDimensiones(2);
    }
}


function mostrarDimensiones(nroDimensiones) {
    let HTMLRowsDetailsDimension = "";

    switch (nroDimensiones) {
        case 1:
            HTMLRowsDetailsDimension = HTMLRowsDetailsDimension.concat(
                "<p>A: (",
                "<input type='number' name=", " id='inputAX'>",
                ",",
                "<input type='number' name=", " id='inputAY'>", ")",
                "</p>",
                "<p>B: (",
                "<input type='number' name=", " id='inputBX'>",
                ",",
                "<input type='number' name=", " id='inputBY'>", ")",
                "</p>"
            )

            break;

        case 2:
            HTMLRowsDetailsDimension = HTMLRowsDetailsDimension.concat(
                "<p>A: (",
                "<input type='number' name=", " id='inputAX'>",
                ",",
                "<input type='number' name=", " id='inputAY'>",
                ",",
                "<input type='number' name=", " id='inputAZ'>", ")",
                "</p>",
                "<p>B: (",
                "<input type='number' name=", " id='inputBX'>",
                ",",
                "<input type='number' name=", " id='inputBY'>",
                ",",
                "<input type='number' name=", " id='inputBZ'>", ")",
                "</p>"
            )
            break;

    }

    document.querySelector('#div_dimensiones').innerHTML = ``
        + HTMLRowsDetailsDimension +
        ` `;


}