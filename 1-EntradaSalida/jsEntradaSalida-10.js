/*
Emanuel vidal Div E
E/S eje10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//delcaro las variables
	var importe;
	var resultado;
	var descuento;

	//traigo valores
	importe = document.getElementById("txtIdImporte").value;

	//parsear el valor
	importe = parseFloat(importe);

	descuento = importe *(25/100);
	resultado = importe-descuento;

    //devuelvo resultado
    document.getElementById("txtIdResultado").value = resultado; 
}

