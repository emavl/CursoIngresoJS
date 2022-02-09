/*
 
 Al ingresar una edad debemos informar
 si la persona es mayor de edad,
  sino informar que es un menor de edad.

*/


function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

    if(edad>17)
	    {
	     alert("usted es mayor de edad");
	    }
//   "sino"
	else 
		{
		   alert("Usted es menor de edad");
		}
		 
	//tomo la edad  
	alert("ok");
	
/*
var edad;

	edad=document.getElementById("").value;
	edad=parseInt(edad);

  if(edad>17)
	    {
	    	alert("usted es mayor de edad");
	    }

	 if(edad<18)
		 {
		 	alert("Usted es menor de edad");

		 }
		 
	//tomo la edad  
	alert("ok");
*/

}//FIN DE LA FUNCIÓN