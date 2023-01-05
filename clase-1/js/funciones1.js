/* 
## Funciones 1

- Crea una función llamada sayHello que diga por consola "hola tuNombre" y ejecútala.

## Funciones con parámetros (Todas muestran el resultado por consola)

- Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".

- Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

- Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

- Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

- Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

- Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

- Crea una función totalPrice que reciba un precio y le sume el IVA.

- Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].
*/

function sayHello() {
  console.log('Hola Elvira');
}

sayHello();

function sayHello2(name) {
  console.log('Hola ' + name);
}

sayHello2('Karim');

function calculateSquareArea(side) {
  console.log(side * side);
}

function calculateTriangleArea(b, a) {
  console.log((b * a) / 2);
}

function calculateCircleArea(radio) {
  console.log(radio * radio * 3.14);
}

function celsiusToFahrenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}

function fahrenheitToCelsius(fahrenheit) {
  console.log((fahrenheit - 32) / 1.8);
}

function totalPrice(price) {
  console.log(price + price * 0.21);
}

totalPrice(100);

function writeMessage(name, material, size, note) {
  console.log(
    name +
      ' ha pedido una caja de ' +
      material +
      ' de tamaño ' +
      size +
      '.' +
      note
  );
}
