/*
Emanuel vidal
ejericicio sabado 5
Se piden tres nombre de producto, y los precios de cada producto ingresado,
sacar el precio bruto(la suma de los tres sin impuestos), el promedio de los precios 
y el precio final total más iva(21%), pedir un porcentaje de descuento y aplicarlo al precio final
, mostrar todos los datos calculados e ingresados por alerta. (solo una alerta en el código). 
Los datos se piden por prompt.*/
function mostrar()
{   //declaro variable

//variables de entrada
    var nombre1;
    var nombre2;
    var nombre3;
	var precio1;
    var precio2;
    var precio3;
    var descuento
 //Variables de salida 
    var suma
    var promedio
    var precioFinal  
//tomo los datos por Prompt
	nombre1 = prompt("ingrese el nombre del primer producto ");
	nombre2 = prompt("ingrese el nombre del segundo producto ");
    nombre3 = prompt("ingrese el nombre del tercer producto ");
    precio1 = prompt("ingrese el precio del producto "+ nombre1);
    precio2 = prompt("ingrese el precio del producto "+ nombre2);
    precio3 = prompt("ingrese el precio del producto "+ nombre3);
//parseo
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
 //claculos
    suma=(precio1+precio2+precio3);

    promedio=suma/3;
    precioFinal=suma+21/100;

//tomo el % por prompt
    porcentaje=prompt("Que descuento desea aplicar");
    porcentaje=parseInt(porcentaje);
//agrego calculos
    descuento= precioFinal * porcentaje/100;
    resultado=precioFinal+descuento;

    alert("Los productos ingresados son: " + nombre1 + " con un valor de $" + precio1 + ", " + nombre2 + " con un valor de $" + precio2 + ", " + nombre3 + " con un valor de $" + precio3 + ", donde el precio bruto es de: $"+suma +", " + "con un promedio de : $" + promedio + ", y su Precio final +IVA es de: $" + precioFinal ); 

	
}
	





















// muestra una ventana emergente 
//	alert("Esto funciona de maravilla");