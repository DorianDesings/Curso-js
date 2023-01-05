/* 

## Funciones de flecha (Todas retornan el resultado y la impresión en consola se hace fuera de la función)

- Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".

- Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

- Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

- Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

- Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

- Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

- Crea una función totalPrice que reciba un precio y le sume el IVA.

- Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note]. 

*/

const sayHello2 = name => 'hola' + name;

console.log(sayHello2('Karim'));

const calculateSquareArea = side => side * side;

console.log(calculateSquareArea(23));

const calculateTriangleArea = (b, a) => (b * a) / 2;

const calculateCircleArea = radio => radio * radio * 3.14;

const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

const totalPrice = price => price + price * 0.21;

totalPrice(100);

const writeMessage = (name, material, size, note) =>
  name +
  ' ha pedido una caja de ' +
  material +
  ' de tamaño ' +
  size +
  '.' +
  note;
