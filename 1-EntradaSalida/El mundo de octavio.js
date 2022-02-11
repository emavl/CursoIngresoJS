Emanuel vidal
ejericicio sabado 6
el mundo de octavio
AB = Diámetro mayor
DC = diámetro menor
BD y BC = lados menores
AD y AC = lados mayores
Todos los datos se ingresan por prompt. Pueden usar el mismo html del ejercicio 01 de E/S
Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico
 y los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.
El cometa estará construido con papel de alta resistencia. La cola del mismo se construirá con
el mismo papel que el cuerpo
y representará un 10% adicional del necesario para el cuerpo.
Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel 
son necesarios para la construcción en masa de 10 cometas.
Tener en cuenta que los valores de entrada están expresados en Cms.
Ahora necesitamos saber cuánto papel de cada color necesitamos. Las entradas son las mismas.
*/

function mostrar()
{ 
// asigno variable AB = y DC = x
      var x;
      var y;
      var totalVarillas;
      var totalPapel;
 
      y=prompt("Ingrese diametro mayor y (cm): ");
      x=prompt("Ingrese diametro menor x (cm): ");

      y=parseInt(y);
      x=parseInt(x);

// calculo varillas, para esto, calculo el area del cometa (x*y)/2 + x + y:
     totalVarillas = (((x*y)/2)+x+y)/1000;
     alert ("El total de Mts de varillas es: "+totalVarillas+" mts.");
  
// calculo papel
     totalPapel = (((x*y)/2)*1.10)/1000;
     alert ("El total de Mts de papel más el 10% para la cola es: "+totalPapel+" mts.");