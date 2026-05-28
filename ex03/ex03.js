//  En JavaScript, los tipos de datos se dividen en dos categorías: primitivos y objetos. Los tipos de datos primitivos incluyen:

//  - Number: para números enteros y decimales.
//  - String: para cadenas de texto.
//  - Boolean: para valores verdaderos o falsos.
//  - Null: para representar la ausencia de valor.
//  - Undefined: para variables que no han sido asignadas.
//  - Symbol: para valores únicos e inmutables.

//  Los objetos, por otro lado, son estructuras de datos más complejas que pueden contener múltiples valores y funciones. Algunos ejemplos de objetos en JavaScript incluyen:
//  - Array: para almacenar listas de valores.
//  - Object: para almacenar pares clave-valor.
//  - Function: para definir funciones.
//  Es importante entender los tipos de datos en JavaScript, ya que esto afecta cómo se manipulan y se comportan las variables en el código. Por ejemplo, al realizar operaciones matemáticas, es crucial asegurarse de que los valores sean del tipo Number para evitar errores o resultados inesperados. Además, al trabajar con cadenas de texto, es necesario utilizar el tipo String para garantizar que las operaciones de concatenación y manipulación de texto funcionen correctamente.

let nombre = "The best juan";
let cantidad = 10;
let precio = 19.99;
let esDisponible = true;
let descripcion = null;
console.log("nombre: " + nombre);
console.log("cantidad: " + cantidad);
console.log("precio: " + precio);
console.log("esDisponible: " + esDisponible);
console.log("descripcion: " + descripcion);


document.write("El nombre del producto es: " + nombre + "<br>", cantidad + "<br>", precio + "<br>", esDisponible + "<br>", descripcion);

console.log("El nombre del producto es: " + nombre + "\n", cantidad + "\n", precio + "\n", esDisponible + "\n", descripcion);
