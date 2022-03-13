/*
Recuerde que para resolver este parcial puede utilizar el ejercicio 1 de entradas y salidas.
 Cuando se pidan
los datos debe utilizar prompt y para mostrarlos usar document.write o console.log

Ejercicio 1
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos crear un
software para el Hospital Garrahan que nos pide recopilar la información del ingreso de niños en la semana,
 para eso
debemos tomar los siguientes datos:
- El nombre del niño: LISTO
- El turno de ingreso (validar: mañana, tarde y noche). LISTO
- Temperatura corporal con la que ingresa en ºC (validar que este entre 37 a 41 inclusive). LISTO
- Edad (entre 0 y 15 años inclusive). LISTO
Debemos informar:
a) La cantidad total de niños que ingresaron en la semana. LISTO
//b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años
recibió. LISTO
c) El nombre del niño con más temperatura en la semana. LISTO
*/
function mostrar()
{	// datos a ingresar
	var	nombre;
	var turno;
	var	temperatura;
	var edad;
	// calculos y desarrollo
	var respuesta;
	var	flagTemperatura=0;
	var	contadorManiana=0;
	var	contadorTarde=0;
	var	contadorNoche=0;
	var mayorTemperatura=0;
	var i=1;

	do
	{
		nombre=prompt("Ingrese el nombre del niño N° "+i+" por favor").toLocaleLowerCase; // Ingreso Nombre del niño
		// no es necesario validar nombre
		turno=prompt("ingrese la turno acorde").toLowerCase();
        
        while(turno!="mañana" && turno!="tarde" && turno!="noche")
        {
			turno=prompt("ERROR !!!\nIngrese el turno correcto Mañana, tarde y noche").toLocaleLowerCase;            
        } 

		temperatura=parseInt(prompt("Ingrese la temperatura por favor "));
		while(isNaN(temperatura) || !(temperatura>36 && temperatura<42))
		{										
			temperatura=parseInt(prompt("Error ingrese la temperatura correcta entre 37 a 41 inclusive "));
		}

		edad=parseInt(prompt("Ingrese la edad por favor"))
		while(isNaN(edad) || edad<-1 || edad>15) //Edad (entre 0 y 15 años inclusive)
		{
			edad=parseInt(prompt(" ERROR !!! \n   Ingrese la edad entre 0 y 15 años por favor"));		
		}
		if(edad<12) // OJO me había olvidado de colocar el IF 
		{
			switch(turno)//b) De los tres turnos debemos informar cual fue 
						//el turno que mayor cantidad de niños menores de 12 años que recibio.					
			{
				case"mañana":
					contadorManiana++;
					break;
				case"tarde":
					contadorTarde++;
					break;
				case"noche":
					contadorNoche++;
					break;
			}
		}
		//c) El nombre del niño con más temperatura en la semana. LISTO
		if(temperatura>mayorTemperatura || flagTemperatura==0)
        {
			mayorTemperatura=temperatura
            mayorTemperatura=nombre;
            flagTemperatura=1;
        }
		
		respuesta=prompt("Desea ingresar otro dato");	        // pregunto si desea seguir 
		//otra opcion es "Desea ingresar otro dato" (si/no)
		while(!(respuesta =="si"||respuesta=="no"))
		{
			respuesta=prompt("ERROR ! debe ingrese si o no .");	
			respuesta=respuesta.toLowerCase();
		}
		
		i++; // incrementa en 1 la variable "i". 

	}while(respuesta=="si");

	//b) De los tres turnos debemos informar cual fue el turno
	// que mayor cantidad de niños menores de 12 años recibió.
			
	if(contadorManiana> contadorTarde && contadorManiana>contadorNoche)
	{
		mensaje= " El turno mañana recibió mas cantidad de ñiños";
	}
	else if(contadorTarde>contadorNoche ) 
	{
		mensaje=" El turno tarde recibió mas cantidad de ñiños";
	}
	else
	{
		mensaje="El turno Noche recibió mas cantidad de ñiños ";
	}
	
	document.write("<br>La cantidad de niños es: "+i); //cantidad total de niños
	document.write("<br>el turno que mayor cantidad de niños tuvones : "+mensaje);
	document.write("<br>El niño con mayor temperatura es : "+mayorTemperatura);
}
/* turno tarde 
el hospital mi pueblo nos pide realizar un programa para tomar los siguientes datos:
pedir el ingreso de datos hasta que el usuario quiera
vacunas aplicadas validar (0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)
edad (validar que no sea negativo y no puede sobrepasar los 150 años)
doctor (validar su apellido debe ser (perez, lopez,diaz))
nombre del paciente.

a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
b) el menor paciente que tenga 1 dosis o más, su nombre y su edad.
c)el doctor que más pacientes tuvo, sacar el promedio de edades.
*/