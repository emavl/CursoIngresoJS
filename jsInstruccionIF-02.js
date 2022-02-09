/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	var edad;

//tomo la edad
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("la persona es mayo de edad");
	}


}
/*
operadores racionales:
==(es igual)  menor o igual (<=), mayors o igual(>=) , !=( distinto)
> (mayor) y < (menor)
operador logico:
!(no) &&(y) ||(o)
*/
//FIN DE LA FUNCIÓN