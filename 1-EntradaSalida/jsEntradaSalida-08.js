/*
Emanuel vidal Div E
E/S eje8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
 //asigno las variables
 var dividendo;
 var divisor;
 var resto;
 var resultado;

 //entrada de datos
   dividendo=document.getElementById("txtIdNumeroDividendo").value;
   divisor=document.getElementById("txtIdNumeroDivisor").value;
 
 //los transformo a enteros
   dividendo=parseInt(dividendo);
   divisor=parseInt(divisor);

 //resultado =dividendo/divisor;
   resto=dividendo % divisor;

 alert("El resto es: "+resto);
}
