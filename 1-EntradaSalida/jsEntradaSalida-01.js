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
    //Variables de salida 
    var suma
    var promedio
    var precioFinal
    //variable entrada
    var descuento

	nombre1 = prompt("ingrese nombre del producto uno");
	nombre2 = prompt("ingrese nombre del producto dos");
    nombre3 = prompt("ingrese nombre del producto tres");
    precio1 = prompt("ingrese precio del producto  "+ nombre1);
    precio2 = prompt("ingrese precio del producto  "+ nombre2);
    precio3 = prompt("ingrese precio del producto  "+ nombre3);
    
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    suma=(precio1+precio2+precio3);

    promedio=suma/3;
    precioFinal=suma+21/100;

//tomo el % por prompt
    porcentaje=prompt("Ingrese descuento");
    porcentaje=parseInt(porcentaje);
//agrego calculos
    descuento= precioFinal * porcentaje/100;
    resultado=precioFinal+descuento;

    alert("precio bruto: "+ suma + 
          "promedio: " + promedio +  
          "Precio final +IVA:" + precioFinal);

	
}
	





















// muestra una ventana emergente 
//	alert("Esto funciona de maravilla");