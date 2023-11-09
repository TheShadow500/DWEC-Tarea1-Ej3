// Creamos un array con el nombre de las calificaciones
let v_notas = ["Suspenso", "Suspenso", "Suspenso", "Suspenso", "Suspenso", "Aprobado", "Bien", "Notable", "Notable", "Sobresaliente", "Sobresaliente"];

// Solicitamos la nota al usuario y la validamos, no lo pasamos a entero para aceptar decimales. Ya nos encargaremos de coger el entero cuando lo necesitemos
let nota = (prompt("Introduzca la nota"));
while(isNaN(nota) || nota < 0 || nota > 10){
    nota = (prompt("La nota introducida es incorrecta. Introduzca la nota"));
}

// Mostramos el resultado al usuario
window.alert("Un " + nota + " corresponde a la calificación de: " + v_notas[parseInt(nota)]);
