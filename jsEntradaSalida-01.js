/*
Emanuel vidal
ejericicio sabado 5
Se piden tres nombre de producto, y los precios de cada producto ingresado,
sacar el precio bruto(la    bruto de los tres sin impuestos), el promedio de los precios 
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
    var bruto;
    var promedio;
    var precioFinalIva;
    //variable entrada
    var descuento;

    nombre1 = prompt("ingrese nombre del primer producto: ");
    nombre2 = prompt("ingrese nombre del segundo producto: ");
    nombre3 = prompt("ingrese nombre del tercer producto: ");
    precio1 = prompt("ingrese precio del producto "+ nombre1);
    precio2 = prompt("ingrese precio del producto "+ nombre2);
    precio3 = prompt("ingrese precio del producto "+ nombre3);
    
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    bruto=precio1+precio2+precio3;

    promedio  = bruto/3;
    precioFinalIva = bruto*1.21;

//tomo el % por prompt
    porcentaje=prompt("Ingrese % de descuento: ");
    porcentaje=parseInt(porcentaje);

//agrego calculos
    descuento= precioFinalIva * (porcentaje/100);
   
    resultado=precioFinalIva-descuento;
    
    alert("------------------------------------------------------\n"+
    "El primer producto es "+nombre1+" y su precio es de $ "+precio1+"\n"+
    "El segundo producto es "+nombre2+" y su precio es de $ "+precio2+"\n"+
    "El tercer producto es "+nombre3+" y su precio es de $ "+precio3+"\n\n"+
    "El total bruto es: $ "+  bruto + 
          "\nEl precio promedio es: $ " + promedio +  
          "\nEl precio final con el descuento + IVA es: $ " + resultado+"\n"+
          "------------------------------------------------------");


}
    





















// muestra una ventana emergente 
//  alert("Esto funciona de maravilla");