/*
Emanuel vidal Div E
E/S eje9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variable
	var sueldo;
	var resultado;
	var aumento;

	// traigo los valores ID
	sueldo = document.getElementById("txtIdSueldo").value;
	
	//parsear el valor
	sueldo = parseFloat(sueldo);

   aumento=10/100;
   resultado=sueldo+ sueldo*aumento;

  //devuelvo resultado
  document.getElementById("txtIdResultado").value=resultado;

// otras opciónes podrían ser

//resultado = sueldo + sueldo * (10/100);
//resultado = sueldo * 1.1;

//aumento = sueldo *0.1;
//resultado = sueldo + aumento;

	
}
