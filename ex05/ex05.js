let a, b;
let suma, resta, multiplicacion,div, residuio, potencia;

a = parseFloat(prompt("Ingrese el primer número"));
b = parseFloat(prompt("Ingrese el segundo número"));

//resultados de operaciones
suma= a + b;
resta= a - b;
multiplicacion= a * b;
div= a / b;
residuio= a % b;
potencia= a ** b;

//imprimir resultados
document.write("La suma es:", suma, "<br>");
document.write("La resta es:", resta, "<br>");
document.write("La multiplicación es:", multiplicacion, "<br>");
document.write("La división es:", div, "<br>");
document.write("El residuo es:", residuio, "<br>");
document.write("La potencia es:", potencia, "<br>");       