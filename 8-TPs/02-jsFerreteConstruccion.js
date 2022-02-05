/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//Asigno para consignas a:
	var largo;
	var ancho;
	var radio;
    var perimetro;
    var resultado;

	//Traigo datos
	largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    //radio = parseFloat(radio);
    perimetro = parseFloat(perimetro);

    perimetro =(2*largo + 2*ancho);
    resultado =(perimetro*3);


    alert("la cantidad de alambre para su terreno es de "+ resultado);


	// buscar perimetro del rectangulo "formula"

}
function Circulo () 
{
	var radioterreno
	var resultado
	var alambre
	
	radioterreno = document.getElementById("txtIdRadio").value;
	radioterreno = parseFloat(radioterreno);

	radioterreno =(2*3.14)*radioterreno;
	alambre = radioterreno*3;

	alert(" la cantidad de alambre es de: " + alambre + " metros ");
}
function Materiales () 
{
	var largoterreno
	var anchoterreno
    var AreaTerreno
    
	largoterreno=document.getElementById('txtIdLargo').value;
    anchoterreno=document.getElementById('txtIdAncho').value;

    largoterreno=parseFloat(largoterreno);
    anchoterreno=parseFloat(anchoterreno);

    AreaTerreno=(largoterreno * anchoterreno);
    bolsaCal=(AreaTerreno * 3);
    bolsaCemento=(AreaTerreno * 2);

    alert("la cantidad de bolsas necesarias son : " + bolsaCemento + " y la cantidad de bolsas de Cal son " + bolsaCal);
	
}