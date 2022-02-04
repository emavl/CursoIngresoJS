/*
Emanuel vidal Div E
E/S eje ferreteria facturacion 
.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ //Asigno variables
	var precioIng1;
	var PrecioIng2;
	var precioIng3;
	var resultado;
	
	// traigo los valores
	precioIng1 = document.getElementById("txtIdPrecioUno").value;
	PrecioIng2 = document.getElementById("txtIdPrecioDos").value;
	precioIng3 = document.getElementById("txtIdPrecioTres").value;

	//parseamos
	precioIng1 = parseFloat(precioIng1);
	PrecioIng2 = parseFloat(PrecioIng2);
	precioIng3 = parseFloat(precioIng3);

	//muestro resultado
	resultado = precioIng1 + PrecioIng2 + precioIng3;

    // Muestro resultado en N°
	alert(resultado)


}
function Promedio () 
{ //Asigno variable
	var precioIng1;
	var PrecioIng2;
	var precioIng3;
	var promedio; 

	// traigo los valores
	precioIng1 = document.getElementById("txtIdPrecioUno").value;
	PrecioIng2 = document.getElementById("txtIdPrecioDos").value;
	precioIng3 = document.getElementById("txtIdPrecioTres").value;

	//parseamos
	precioIng1 = parseFloat(precioIng1);
	PrecioIng2 = parseFloat(PrecioIng2);
	precioIng3 = parseFloat(precioIng3);

	//Muestro promedio
	promedio = (precioIng1 + PrecioIng2 + precioIng3) /3;

	//muestro promedio
	alert(promedio);

	
}
function PrecioFinal () 
{	//Asigno variable
	var precioIng1;
	var PrecioIng2;
	var precioIng3;
	var IVA; 
	var precioFinal;
	var resultado


	// traigo los valores
	precioIng1 = document.getElementById("txtIdPrecioUno").value;
	PrecioIng2 = document.getElementById("txtIdPrecioDos").value;
	precioIng3 = document.getElementById("txtIdPrecioTres").value;

	//parseamos
	precioIng1 = parseFloat(precioIng1);
	PrecioIng2 = parseFloat(PrecioIng2);
	precioIng3 = parseFloat(precioIng3);

    //sumo el precio y agrego el IVA
    precioFinal = (precioIng1+PrecioIng2+precioIng3);
    IVA = (precioFinal*21/100);
    resultado = (precioFinal+IVA);

    alert("El precio final con el IVA incluido es de : " + resultado );


}