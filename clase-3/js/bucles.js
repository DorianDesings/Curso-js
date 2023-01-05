/* - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0. */

/* - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */

// const sumArray = array => {
//   let result = 0;
//   for (const number of array) {
//     result = result + number;
//   }
//   console.log(result);
// };

// sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

4 x 0 = 0
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40 */

/* - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

4 x 10 = 40
4 x 9 = 36
4 x 8 = 32
4 x 7 = 28
4 x 6 = 24
4 x 5 = 20
4 x 4 = 16
4 x 3 = 12
4 x 2 = 8
4 x 1 = 4
4 x 0 = 0 */

/* - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

  - "naciste en el año X"
  - "En el año X cumpliste 1 año"
  - "En el año X cumpliste 2 años"
  - "En el año X cumpliste 3 años" */

/* - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12. */

// const evenNumbers = (number1, number2) => {
//   for (let index = number1; index <= number2; index++) {
//     if (index % 2 === 0) {
//       console.log(index);
//     }
//   }
// };

// evenNumbers(1, 20);

/* - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays. */

/* - Crea una función que reciba un número y te diga si es primo o no. */

/* - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

/* - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. */

/* - Crea una función que reciba una frase e imprim el número de veces que se repite cada vocal */

/* - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa" */

/* - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM" */

/* - Crea una función que reciba un número entero e imprima un lista de números impares como ésta:
  Si recibe un 6 imprimirá esta lista.
  1
  3 1
  5 3 1
  7 5 3 1
  9 7 5 3 1
  11 9 7 5 3 1
  
*/

const printList = number => {
  let impares = '';
  for (let i = number; i < number + 1; i++) {
    for (let j = 1; j < number * 2; j += 2) {
      impares += j + ' ';
      console.log(impares + '\n');
    }
  }
};

printList(5);

const printListInverse = number => {
  let impares = '';
  for (let i = number; i < number + 1; i++) {
    for (let j = number * 2; j >= 1; j--) {
      if (j % 2 !== 0) {
        impares += j + ' ';
        console.log(impares + '\n');
      }
    }
  }
};

printListInverse(5);
