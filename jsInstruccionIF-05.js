/*
Al ingresar una edad solo debemos informar
 si la persona NO es adolescente.
*/

function mostrar()
{    let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edad);
//  
	if(  !  (( >12 && edad <18))
		{
			alert("Usted NO es adolescente");
		}	
/*
otra opcion es utilizando el "o" || if(edadIngresada<13 || edadIngresada>18)
quiere decir que al ingresar la edad menor a 13 o mayor a 18 
esta alerta que NO es adolescente 
*/ 

}//FIN DE LA FUNCIÓN