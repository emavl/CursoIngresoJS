
/*Ejercicio 3
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
    var masKilometraje=0;
    var menosKilometraje=0;
    var mayorNombre=0;
    var porcentaje;
    var contadorAzul=0;
    var contadorAutos=1;
    var menorMarca=0;

    do
    {  
        marca=prompt("ingrese la marca del auto N° "+contadorAutos+" por favor").toLowerCase();

        while(marca!="fiat" && marca!="ford" && marca!=renault)
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

        if(flag=0 || kilometraje>masKilometraje)
        {
            masKilometraje=kilometraje;
            mayorNombre=nombre;
            flag=1;
        }
        if(color=="azul")
        {
            contadorAzul++;
        }
        if(flagColor=0 || kilometraje<menosKilometraje)
        {
            menosKilometraje=kilometraje;
            menorMarca=marca;
        }



        contadorAutos++;

        respuesta=prompt("Desea ingresar otro dato  si/no").toLowerCase();
    }while(respuesta="si");

    porcentaje=(contadorAutos/contadorAzul)*100

    document.write("El nombre del vendedor que vendió el auto con más kilometraje es: "+mayorNombre);
    document.write("<br>El porcentaje de autos azules que se vendieron es:"+porcentaje);
    document.write("<br>La marca del auto rojo con menos kilometraje es: "+menorMarca);



//    Debemos informar:
//a) El nombre del vendedor que vendió el auto con más kilometraje.
//b) El porcentaje de autos azules que se vendieron.
//c) La marca del auto rojo con menos kilometraje.



