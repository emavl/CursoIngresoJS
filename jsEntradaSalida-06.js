/*
Emanuel vidal Div E
E/S eje6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//asigno variables
	var=numeroUno
	var=numeroDos
    var=resultado

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	 //utilizo parseInt para convertir ese valor en texto
	 //en un valor numerico para que al cocatenar no lo tome como un texto
	 // ej: 5+5= 55 a lo correcto 5+5=10

	 numeroUno=parseInt(numeroUno);
	 numeroDos=parseInt(numeroDos);

	 //muestro el resultado
	 resultado = numeroUno+numeroDos;

	 alert(resultado);
}

