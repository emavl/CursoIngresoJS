/*
Emanuel vidal Div E
E/S eje3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos variable
	var nombreIngresado;

	//guardamos el nombre tomando el Id del html 
	nombreIngresado = document.getElementById("txtIdNombre").value;
	//nombre ingresado

	//mostrar por alert
	alert("su nombre es "+ nombreIngresado);

}

//txtIdNombre

