/*
Emanuel vidal Div E
E/S eje7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//asigno variable
	var numeroUno
	var numeroDos
	var resultado

function sumar()
{	
	
//  Entrada de datos
	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	//paso texto a numerico con parseInt
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	 //muestro el resultado
	 resultado = numeroUno+numeroDos;

	 alert("la suma es: " + resultado);
}


function restar()
{
	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	//paso texto a numerico con parseInt
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	 //muestro el resultado
	 resultado = numeroUno-numeroDos;

	 alert("la resta es: " +resultado);
}

function multiplicar()
{
	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	//paso texto a numerico con parseInt
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	 //muestro el resultado
	 resultado = numeroUno*numeroDos;

	 alert("la multiplicacion es: "+resultado);
}

function dividir()
{	
	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	//paso texto a numerico con parseInt
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	 //muestro el resultado
	 resultado = numeroUno+numeroDos;

	 alert("la divicion es: "+resultado);
}

