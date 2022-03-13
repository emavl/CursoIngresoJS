/*
EJERCICIO EXTRA
Nos piden hacer un programa para saber la cantidad de tropas que llevaron al combate
entre rusia y ucrania
Nos piden
// - Nombre del grupo
// - Tanques que llevaron(entre 10 y 50)
// - cantidad de soldados (min 1000)
// - Pais(ucrania, rusia o eeuu)

Debemos informar:
- Qué pais envio mas tanques
- El porcentaje de soldados que posee eeuu
- Mostrar el nombre del grupo con mas soldados de ruso

*/
function mostrar()
{
    // Ingreso de datos:
    var nombre;
    var tanques;
    var soldados;
    var pais;

    // Desarrollo y calculos
    var respuesta;
    var mensaje;
	var	totalSoldados;
	var porcentajeEeuu;
	
	var tanquesEstadou=0;
	var tanquesUcrania=0;
	var tanquesRusia=0;
	var soldadosEstadosu=0;
	var	soldadosRusia=0;
	var	soldadosUcrania=0;
	var	mayorSoldados=0;
	var i=1;
	var flag=0;

    do
    {   
        // - Nombre del grupo
        nombre=prompt("Ingrese Nombre del Grupo N° "+i).toLowerCase();

        // - Tanques que llevaron(entre 10 y 50)
        tanques=parseInt(prompt("Ingrese la cantidad de Tanques"));
        while(isNaN(tanques) || (tanques<10 || tanques>50))
        {
            tanques=parseInt(prompt("ERROR !!!\nIngrese los tanques a llevar\n(Entre 10 y 50)"));
        }
        
        // - cantidad de soldados (min 1000)
        soldados=parseInt(prompt("Ingrese la cantidad de soldados"));
        while(isNaN(soldados) || soldados<1000)
        {
            soldados=parseInt(prompt("ERROR !!!\nIngrese la cantidad de soldados\nsiendo un minimo de 1000 "));
        }

        // - Pais(ucrania, rusia o eeuu)
        pais=prompt("Ingrese el pais correspondiente\n(Ucrania, Rusia o EEUU)").toLowerCase();
        while(pais!="ucrania" && pais!="rusia" && pais!="eeuu")
        {
            pais=prompt("ERROR !!!\nIngrese el pais correspondiente\n(Ucrania, Rusia o EEUU)").toLowerCase();
        }

		// - Qué pais envio mas tanques
		switch(pais)
		{
			case"eeuu":
				tanquesEstadou=tanquesEstadou+tanques;
				soldadosEstadosu=soldadosEstadosu+soldados;
				break;
			case"rusia":
				tanquesRusia=tanquesRusia+tanques;
				soldadosRusia=soldadosRusia+soldados;
				break;
			case"ucrania":
				tanquesUcrania=tanquesUcrania+tanques;
				soldadosUcrania=soldadosUcrania+soldados;
				break;	
		}

		//- Mostrar el nombre del grupo con mas soldados de ruso
		if(pais=="rusia" || (flag=0 && soldados>mayorSoldados))
		{
			mayorSoldados=soldados;
			mayorNombre=nombre;
			flag=1;
		}

		i++;
        respuesta=prompt("Desea ingresar otro dato si/no").toLowerCase();
    }while(respuesta=="si");

	if(tanquesEstadou>tanquesRusia && tanquesEstadou>tanquesUcrania)
	{
		mensaje="eeuu";
	}
	else if(tanquesRusia>tanquesUcrania)
	{
		mensaje="rusia";
	}
	else
	{
		mensaje="Ucrania";
	}

	// Suma de soldados
	totalSoldados=soldadosEstadosu+soldadosRusia+soldadosUcrania;
	// Cantidad de soldados de EEUU / cantidad de soldados en total*100
	porcentajeEeuu=(soldadosEstadosu/totalSoldados)*100

	document.write("<br>El país que envio mas tanques es: "+mensaje); 
	document.write("<br>El % de soldados que poseé eeuu es : %"+porcentajeEeuu.toFixed(1));
	document.write("<br>El nombre del grupo con mas soldados ruso es : "+mayorNombre);


}


/*
Debemos informar:
// - Qué pais envio mas tanques
- El porcentaje de soldados que posee eeuu
- Mostrar el nombre del grupo con mas soldados de ruso

*/

/*

Realizar el desarrollo de una plataforma web que permita organizar recorridos para 
recoletar aceites en restaurantes.El ingreso sera hasta que el usuario quiera. 

La solución será planteada sobre una arquitectura flexible que permita
a futuro realizar cambios, mejoras y sumar nuevas funcionalidades que 
potencien las plataformas.

se deben realizar  ingresos:
	Zonas(CABA-BuenosAires-GBA) LISTO
	Nombre de Choferes         LISTO
	Edad del chofer(mayor a 18 años) LISTO
	Clientes(McDonals-Rodicio-SigaALaVaca) LISTO
	CantidadDeAceite(entre 800 y 1500 Litros) LISTO
debemos informar:
a)La zona mas visitada LISTO
B)El nombre del chofer mas joven	LISTO
C)La mayor cantidad de aceite recolectada en Rodicio LISTO


function mostrar()
{	//ingreso datos
	var	zonas;    // (CABA-BuenosAires-GBA)
	var	nombreChofer;
	var	Edad;     //  mayor a 18 
	var	cliente; // Mc donnasl - Rodicio - SigaLaVaca
	var	cantidadAceite; // (entre 800 y 1500 litros)
	// desarrollo y calculos	
	var respuesta;
	var	nombreMinimo;
	var	choferJoven;
	var	zonaVisitada;
	var	aceiteMayor;
	var	mensaje;
	var	acumuladorCaba=0;
	var acumuladorBuenosAires=0;
	var	acumuladorGba=0;
	var	FlagAceite=0;
	var flag=0;

	do
	{
		zonas=prompt("ingrese la zona acorde  ");
        zonas=zonas.toLowerCase();
        
        while(zonas!="gba" && zonas!="caba" && zonas!="buenos aires")
        {
			zonas=prompt("ERROR !!!\nIngrese el origen correcto ( Buenos Aires, CABA o GBA)");
            zonas=zonas.toLowerCase();
            
        }                          
		nombreChofer=prompt("Ingrese el nombre del chofer por favor"); // Ingreso Nombre del chofer 
		nombreChofer=nombreChofer.toLocaleLowerCase()	
		while(!isNaN(nombreChofer)) 
		{
			nombreChofer=prompt("ERROR !!!!!\nIngrese el nombre del chofer por favor");
			nombreChofer=nombreChofer.toLowerCase();
		}
		
		Edad=prompt("Ingrese la edad por favor"); // Ingreso la edad mayor a 18
		Edad=Edad.toLowerCase();
		
		while(Edad<18)
		{
			Edad=prompt(" ERROR !!! \n   Ingrese la edad mayor a 18 años por favor");
			Edad=Edad.toLowerCase();
		}

		cliente=prompt(" Ingrese el cliente correspondiente\n  ( Mc donnals - Rodicio - SigaLaVaca)");
		cliente=cliente.toLowerCase();    // Ingresamos Cliente 

		while(cliente!="mc donnals"&& cliente!="rodicio" && cliente!="sigalavaca")
		{
			cliente=prompt("ERROR !!!  Ingrese el cliente correspondiente\n  ( Mc donnasl - Rodicio - SigaLaVaca)");
			cliente=cliente.toLowerCase();
		}      

		cantidadAceite=prompt("Ingrese la cantidad de aceite por favor \n    800 y 1500 litros ")
		while(isNaN(cantidadAceite) || !(cantidadAceite>799 && cantidadAceite<1499))
		{										
			cantidadAceite=prompt("Error ingrese la cantidad correcta ")
			cantidadAceite=cantidadAceite.toLowerCase();  // Ingreso CANTIDAD ACEITE
		}
		switch(zonaVisitada)
		{
			case"caba":
				acumuladorCaba=acumuladorCaba+1;
				break;
			case"gba":
				acumuladorGba=acumuladorGba+1;
				break;
			case"buenosaires":
				acumuladorBuenosAires=acumuladorBuenosAires+1;
				break;
		}
		if(Edad<choferJoven || flag==0)
		{
			choferJoven=Edad;
			nombreMinimo=nombreChofer,
			flag=0;
		}
		if(cantidadAceite>aceiteMayor && cliente=="rodicio"|| FlagAceite==0)
		{
			aceiteMayor=cantidadAceite;
			FlagAceite=1;
		}

			respuesta=prompt("Desea subir otro ingreso");	        // pregunto si desea seguir 
			respuesta=respuesta.toLowerCase(); 
			
		while(!(respuesta =="si"||respuesta=="no"))
		{
			respuesta=prompt("ERROR ! debe ingrese si o no .");	
			respuesta=respuesta.toLowerCase();
		}

	}while(respuesta=="si")
	if(acumuladorCaba> acumuladorBuenosAires && acumuladorCaba>acumuladorGba)
	{
		mensaje= " La zona mas visitada es caba";
	}
	else if(acumuladorGba>acumuladorBuenosAires)
	{
		mensaje="La zona mas visitada es Gran Buenos Aires"
	}
	else
	{
		mensaje="La zona mas visitada es Buenos Aires "
	}
//debemos informar:
//a)La zona mas visitada 
//B)El nombre del chofer mas joven	
//C)La mayor cantidad de aceite recolectada en Rodicio 
	alert(mensaje);
    alert("El chofer mas joven es: "+nombreMinimo);
    alert("La mayor cantidad recolectada en rodicio es: "+aceiteMayor);

}

//txtIdNombre
*/
