/*3
Emanuel vidal Div E
TP 3 ferrete pinturas.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ // formula °C=(°F*- 32) *5/9
  var temperatura
  var resultado

  temperatura=document.getElementById("txtIdTemperatura").value;  

  temperatura=parseFloat(temperatura);

  resultado =(temperatura - 32 ) * 5/9;

  alert(" la temperatura en centigrados es: " + resultado);

	
}

function CentigradosFahrenheit () 
{ //formula °F=(°C* 1.8)+32  
	var temperatura
	var resultado

	temperatura=document.getElementById("txtIdTemperatura").value;
	
	temperatura=parseFloat(temperatura);

	resultado =(temperatura * 9/5 ) +32;

   alert(" la temperatura en Fahrenheit es: " + resultado);


}
