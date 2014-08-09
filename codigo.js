//FUNCIÓN
//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

//VARIABLES.
var piedra = 0;
var papel = 1;
var tijeras = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

//PREGUNTA INICIAL
opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);
//DESPLIEGA LAS OPCIONES
alert("Elegiste " + opciones[opcionUsuario]);
alert("JavaScript eligió " + opciones[opcionMaquina]);

//CONDICIONES
// A.- Si son iguales
if((opcionUsuario == piedra && opcionMaquina == piedra) || (opcionUsuario == papel && opcionMaquina == papel) || (opcionUsuario == tijeras && opcionMaquina == tijeras) || (opcionUsuario == lagarto && opcionMaquina == lagarto) || (opcionUsuario == spock && opcionMaquina == spock))
  {
  	alert("¡Empate! XD");
  }
// B.- Usuario escoge PIEDRA y computadora algo distinto
else if(opcionUsuario == piedra)
  {
  	if(opcionMaquina == tijeras || opcionMaquina == lagarto)
  	{
  	 alert("¡¡¡Ganaste!!!");
  	}
  	else if(opcionMaquina == papel || opcionMaquina == spock)
  	{
  	 alert("Perdiste :(");
  	}

  }
// C.- Usuario escoge PAPEL y computadora algo distinto
 else if(opcionUsuario == papel)
  {
  	if(opcionMaquina == piedra || opcionMaquina == spock)
  	{
  	 alert("¡¡¡Ganaste!!!");
  	}
  	else if(opcionMaquina == tijeras || opcionMaquina == lagarto)
  	{
  	 alert("Perdiste :(");
  	}

  }
// D.- Usuario escoge TIJERAS y computadora algo distinto
 else if(opcionUsuario == tijeras)
  {
  	if(opcionMaquina == papel || opcionMaquina == lagarto)
  	{
  	 alert("¡¡¡Ganaste!!!");
  	}
  	else if(opcionMaquina == piedra || opcionMaquina == spock)
  	{
  	 alert("Perdiste :(");
  	}

  }
// E.- Usuario escoge LAGARTO y computadora algo distinto
 else if(opcionUsuario == lagarto)
  {
  	if(opcionMaquina == papel || opcionMaquina == spock)
  	{
  	 alert("¡¡¡Ganaste!!!");
  	}
  	else if(opcionMaquina == piedra || opcionMaquina == tijeras)
  	{
  	 alert("Perdiste :(");
  	}

  }
// F.- Usuario escoge SPOCK y computadora algo distinto
 else if(opcionUsuario == spock)
  {
  	if(opcionMaquina == piedra || opcionMaquina == tijeras)
  	{
  	 alert("¡¡¡Ganaste!!!");
  	}
  	else if(opcionMaquina == papel || opcionMaquina == lagarto)
  	{
  	 alert("Perdiste :(");
  	}

  }
  else
  {
  	alert("Opción inválida");
  }
