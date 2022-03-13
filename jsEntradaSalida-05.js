/*
Luca Méndez
Ejercicio 2:
una pinturería solicita nuestros servicios para desarrollar el siguiente programa:

tomar 5 pedidos
//cantidad de litros validar (mayor a 0).
//precio por litro validar (no puede ser menor a 4000).
//marca validar (tersuave, colorin, plavicon).

Color.
a) la cantidad de litros que se compró en total. LISTO
b) de la compra más cara, mostrar su color y marca.
c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente
mensaje:” usted es un gran vendedor”.
 */ 

function mostrar()
{
	var pintura;
	var litro;
	var	marca;
	var precio;
	var color;
	
	//Desarrollo y calculos
	var i=1;
	var cantidadLitros=0;
	var flag=0;
	var mayorColor=0;
	var mayorMarca=0;
	var totalImporte=0;
	var mayorprecio=0;

	do
	{	
		pintura=parseInt(prompt("Ingrese los litros de pintura del pedido N°"+i));
		
		//cantidad de litros validar (mayor a 0).
		while(pintura<0) 
		{
			pintura=parseInt(prompt("ERROR !!\nIngrese los litros de pintura acorde"));
		}
	
		precio=parseInt(prompt("Ingrese el precio no debe ser menor a $4000"))
		while(isNaN(precio) || precio<4000) //precio por litro validar (no puede ser menor a 4000).
		{
			precio=parseInt(prompt("ERROR !!!\nIngrese el precio acorde\nrecuerde que no debe ser menor a $4000"));			
		}

		color=prompt("Ingrese el color").toLowerCase();
	    // marca validar (tersuave, colorin, plavicon).
		marca=prompt("Ingres la marca (tersuave, colorin o plavicon).").toLowerCase();
		while(marca!="tersuave" && marca!="colorin" && marca!="plavicon")
		{
			marca=prompt("ERROR !!!\nIngres la marca correcta (tersuave, colorin o plavicon).").toLowerCase();			
		}

		if(flag=0 || precio>mayorprecio)
		{
			mayorprecio=precio;
			mayorColor=color;
			mayorMarca=marca;
			flag=1;
		}

		totalImporte=totalImporte+precio;
		cantidadLitros=cantidadLitros+pintura;
		i++;
	}while(i<6);
	
	if(totalImporte>50000)
	{
		mensaje="” usted es un gran vendedor”";
	}

alert("la cantidad de total de litros que se compró es: "+cantidadLitros+ "\nla compra más cara es : "+mayorColor+ " y " +mayorMarca+" la cantidad total de importe por las ventas es: "+totalImporte+"\n"+mensaje);
}
/*
a) la cantidad de litros que se compró en total. LISTO
b) de la compra más cara, mostrar su color y marca.
c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente
mensaje:” usted es un gran vendedor”.
 */ 


/*La aerolínea UTN viajes nos pide generar un software para vender sus packs de viajes,
 la carga de datos pedirá lo siguiente:

- Nombre del piloto. LISTO
- Destino (“Ushuaia”, “Córdoba” o ”Jujuy”). LISTO
- Cantidad de personas en el avión (tiene que ser mayor a 0 y menor 250).LISTO
- Tipo de clase en la que viaja (promocional, turista, ejecutiva). LISTO


Debemos informar:
a) La clase con más pasajeros. LISTO
b) El nombre del piloto que lleva más pasajeros a Ushuaia.
c) El promedio de personas que usan la clase Ejecutiva.


function mostrar()
{
	// Datos a ingresar
	var nombre;
	var destino;
	var pasajeros;
	var tipoClase;

	// Desarroyo y calculos
	var promedio;
	var respuesta;
	var	pilotoUshuaia;
	var mensaje;

	// Contadores.
	var pasajerosPromocional=0;
	var pasajerosTurista=0;
	var	pasajerosEjecutiva=0;
	var viajesEjecutiva=0;
	var	pasajerosUshuaia;
	var i=1;
	var flag=0;



	do
	{
		nombre=prompt("Ingrese el nombre del Piloto N°"+i+" por favor").toLowerCase(); // Ingreso nombre del niño
		// No es necesario validara nombre del piloto.
		destino=prompt("ingrese la destino acorde").toLowerCase();
        // Ingresamos destino.
        while(destino!="ushuaia" && destino!="cordoba" && destino!="jujuy") //(“Ushuaia”, “Córdoba” o ”Jujuy”).
        {
			destino=prompt("ERROR !!!\nIngrese el destino correcto (“Ushuaia”, “Córdoba” o ”Jujuy”)").toLowerCase();
        } 
		// Ingresamos la cantidad de pasajeros.
		pasajeros=parseInt(prompt("Ingrese la cantidad Personas por favor"));
		while(pasajeros<1 || pasajeros>250)
		{
			pasajeros=parseInt(prompt("ERROR !!! \nIngrese la cantidad Personas\nmayor a 0 y menor 250 por favor"));		
		}
		//Ingresamos la clase 
		tipoClase=prompt("ingrese la tipoClase acorde ").toLocaleLowerCase();
        
        while(tipoClase!="promocional" && tipoClase!="turista" && tipoClase!="ejecutiva") //(“Ushuaia”, “Córdoba” o ”Jujuy”).
        {
			tipoClase=prompt("ERROR !!!\nIngrese el tipo de Clase correcto (promocional, turista, ejecutiva)").toLowerCase();        
        } 
		switch(tipoClase) //a) La clase con más pasajeros.
		{
			case "promocional":							  			 // armo un acumulador pasa saber 
				pasajerosPromocional=pasajerosPromocional+pasajeros; // la cantidad de personas que viajan								
				break;						
			case "turista":
				pasajerosTurista=pasajerosTurista+pasajeros;
				break;
			case "ejecutiva":
				pasajerosEjecutiva=pasajerosEjecutiva+pasajeros;
				viajesEjecutiva++;   //contador de viajes en ejecutiva	
				break;
		}

		if(destino="ushuaia") // b) El nombre del piloto que lleva más pasajeros a Ushuaia.
		{
			if(flag=0 || pasajerosUshuaia < pasajeros)
			{
				pilotoUshuaia=nombre;
				pasajerosUshuaia=pasajeros;
				flag=1;
			}
		}

		i++;
			respuesta=prompt("Desea ingresar otro dato").toLowerCase();	  // pregunto si desea seguir 
			
		while(!(respuesta =="si"||respuesta=="no"))
		{
			respuesta=prompt("ERROR ! debe ingrese si o no .").toLocaleLowerCase();	
		}
		
	}while(respuesta=="si");

//a) La clase con más pasajeros
	if(pasajerosPromocional> pasajerosTurista && pasajerosPromocional>pasajerosEjecutiva)
	{
		mensaje= "Promocional";
	}
	else if(pasajerosTurista>pasajerosEjecutiva) 
	{
		mensaje=" Turista";
	}
	else
	{
		mensaje="Ejecutiva";
	}
//para el total de pasajeros seria " totalPasajeros=pasajerosEjecutiva + pasajerosTurista + pasajerosPromocional"          
	promedio=pasajerosEjecutiva/viajesEjecutiva
// para sacar el % ----> promedio=pasajerosEjecutiva/viajesEjecutiva*100 
document.write("La clase con mas pasajeros es: "+mensaje);
document.write("<br>El nombre del piloto que lleva más pasajeros a Ushuaia es: "+nombre);
document.write("<br>El promedio de las personas que usan la clase ejecutiva es: "+promedio);


/*Debemos informar:
a) La clase con más pasajeros. LISTO // si fuera la clase con + viajes seria un contador++ para los viajes
b) El nombre del piloto que lleva más pasajeros a Ushuaia.Listo
c) El promedio de personas que usan la clase Ejecutiva.

}
*/