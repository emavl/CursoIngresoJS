/*
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
// Declaro variables 
     var edad,
     var estadCivil,

// Tomamos por ID 
      
     edad=document.getElementById("txtIdEdad").value;
     estadCivil=document.getElementById("estadoCivil").value;

// Parseamos
    
     edad=parseInt(edad);

// Aplicamos el IF 

    if(edad <18 && estadCivil != "soltero");
	    {
	       alert("Es muy pequeño para NO ser soltero");

	    }


	


}//FIN DE LA FUNCIÓN