/* 
Emanuel vidal Div E
E/S eje4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Declaro la variable
	var nombreIngresado;

	//guardo el dato en la ventana emergente con prompt
	nombreIngresado=prompt("ingrese su nombre");

	//asigno nombre a la caja de texto
	//txtIdnombre.value = nombreIngresado;
	document.getElementById("txtIdNombre").value=nombreIngresado;
}
