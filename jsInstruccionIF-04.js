/*
Al ingresar una edad debemos informar
 si la persona es adolescente,
  edad entre 13 y 17 años (inclusive) .
*/


function mostrar()
{   
	var edad;

// traemos datos
    edad=document.getElementById("txtIdEdad").value;
    edad=parseInt(edad);
// la edad de la persona la debe tomar siendo mayor a 12 y menor a 18 años para que tome los 13 y 17 años.
    if(edad>12 && edad <18)
	    {
	    	alert("Usted es adolescente");
	    }

	    	

	//tomo la edad  
	alert("ok");
/*
operadores racionales:
==  mayors o igual(<=) menor o igual (>=) !=( distinto)

operador logico:
!(no) &&(y) ||(o)
*/
 }//FIN DE LA FUNCIÓN