/*
Al ingresar una edad menor a 18 años
 y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor,
 mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	var edad;
	var estadCivil;

    edad=document.getElementById("txtIdEdad").value;
    estadCivil=document.getElementById("estadoCivil").value;

    edad=parseInt(edad);

    if(!(edad<18 && estadCivil != "Soltero"))
      {
      	if( "Soltero" == estadCivil && edad >17)
      	{
      		alert("es soltero y no es menor");
      	}
      } 
  


// operadores relacionales
// < > >= <= ,==(comparar) !=(distinto) =(solo para asignar)

 // operadores logicos
// &&,y || o , !no


}//FIN DE LA FUNCIÓN