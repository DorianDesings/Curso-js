/* 

## Funciones con parámetros (Todas muestran el resultado por consola fuera de la función)

- Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".

- Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

- Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

- Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

- Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

- Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

- Crea una función totalPrice que reciba un precio y le sume el IVA.

- Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].
*/

function sayHello2(name) {
  return 'hola ' + name;
}

console.log(sayHello2('Dani'));

function calculateSquareArea(side) {
  return side * side;
}

console.log(calculateSquareArea(23));

function calculateTriangleArea(b, a) {
  return (b * a) / 2;
}

function calculateCircleArea(radio) {
  return radio * radio * 3.14;
}

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function totalPrice(price) {
  return price + price * 0.21;
}

totalPrice(100);

function writeMessage(name, material, size, note) {
  return (
    name +
    ' ha pedido una caja de ' +
    material +
    ' de tamaño ' +
    size +
    '.' +
    note
  );
}
