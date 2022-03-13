
/*
Ejercicio 3
Una agencia de autos usados nos contrata para desarrollarle un software que permita la venta de sus autos, sin límite
de cargas, debemos pedir los siguientes datos:

- Marca (Fiat, Ford, Renault).
- El color del auto (gris, azul, rojo).
- Nombre del vendedor.
- Validar que el kilometraje este entre (10.000 y 100000 kilómetros).

Debemos informar:
a) El nombre del vendedor que vendió el auto con más kilometraje.
b) El porcentaje de autos azules que se vendieron.
c) La marca del auto rojo con menos kilometraje.
*/

function mostrar()
{
    //Ingreso de datos
    var marca;
    var color;
    var nombre;
    var kilometraje;
    var respuesta;

    //Desarrollo y calculos
    var flag=0;
    var mayorKilometraje=0;
    var menosKilometraje=0;
    var mayorNombre=0;
    var porcentaje;
    var contadorAzul=0;
    var contadorAutos=1;
    var menorMarca=0;
    var contadorRojo=0;
    var contadorGris=0;
    var totalAutos;
    var i=1;

      do
      {  
            marca=prompt("ingrese la marca del auto N° "+contadorAutos+" por favor");
            marca=marca.toLowerCase();

            while(marca!="fiat" && marca!="ford" && marca!="renault")
            {
                  marca=prompt("ERROR !!! ingrese la marca acorde (ford, fiat o renault por favor").toLowerCase();
            }

            color=prompt("Ingrese el color dependiendo de si es gris, azul o rojo por favor" ).toLowerCase();
            
            while(color!="azul" && color!="rojo" && color!="gris")
            {
                  color=prompt("ERROR !!!\nIngrese el color dependiendo de si es gris, azul o rojo por favor" ).toLowerCase();
            }

            nombre=prompt("ingrese el nombre por favor")

            kilometraje=parseInt(prompt("ingrese el kilometraje que este entre los 10 mil y 100 mil kilometros por favor"));
            while(kilometraje<10000 || kilometraje>100000)
            {
                  kilometraje=parseInt(prompt("ERROR !!!\ningrese el kilometraje que este entre los 10 mil y 100 mil kilometros por favor"));
            }

            switch(color)
            {
                  case"azul":
                        contadorAzul++;
                        break;
                  case"rojo":
                         if(flagColor=0 || kilometraje<menosKilometraje)
                         {
                              menosKilometraje=kilometraje;
                              menorMarca=marca;
                              flagColor=1;
                         }
                        contadorRojo++; 
                         break;
                  case"gris":
                        contadorGris++;                      
            }
            if(flag=0 || kilometraje>mayorKilometraje)
            {
                  mayorKilometraje=kilometraje;
                  mayorNombre=nombre;
                  flag=1;
            }
           
      

            i++;
            respuesta=prompt("desea ingresar otro dato  si/no");
            while(!(respuesta=="si" || respuesta=="no"))
		{
			respuesta=prompt("Error ingrese (si o no )");
			respuesta=respuesta.toLowerCase();			
		}
      }while(respuesta=="si");

      totalAutos=contadorRojo+contadorAzul+contadorGris;
      porcentaje=(totalAutos/contadorAzul)*100;

    document.write("El nombre del vendedor que vendió el auto con más kilometraje es: "+mayorNombre);
    document.write("<br>El porcentaje de autos azules que se vendieron es:"+porcentaje);
    document.write("<br>La marca del auto rojo con menos kilometraje es: "+menorMarca);

}