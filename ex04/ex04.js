let nombre, edad , direccion, movil, correo;

nombre = prompt("Ingrese su nombre");//se pide datos al usuario
edad = prompt("Ingrese su edad"); //se pide dirección al usuario
direccion = prompt("Ingrese su dirección"); //se pide número de móvil al usuario
movil = prompt("Ingrese su número de móvil"); //se pide el número de móvil al usuario
correo = prompt("Ingrese su correo electrónico"); //se pide el correo electrónico al usuario

console.log("tu nombre es: " + nombre); //se muestra el nombre del usuario en la consola
console.log("tu edad es: " + edad); //se muestra la edad del usuario en la consola
console.log("tu dirección es: " + direccion); //se muestra la dirección del usuario en la consola
console.log("tu número de móvil es: " + movil); //se muestra el número de móvil del usuario en la consola
console.log("tu correo electrónico es: " + correo); //se muestra el correo electrónico del usuario en la consola    


document.write("tu nombre es: " + nombre + "<br>"); //se muestra el nombre del usuario en la página web
document.write("tu edad es: " + edad + "<br>");
document.write("tu dirección es: " + direccion + "<br>");
document.write("tu número de móvil es: " + movil + "<br>");
document.write("tu correo electrónico es: " + correo + "<br>");