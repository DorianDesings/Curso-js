// - Crea una función que reciba un array de 5 números. Imprime por consola una posición aleatoria del array usando la función que genera un número aleatorio.

// const randomPositionArray = array => {
//   const randomNumber = generateRandomNumber(array.length);

//   console.log(array[randomNumber]);
// };

// randomPositionArray(['a', 'b', 'c', 'd', 'e', 'qwe', 'asd']);

// - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

//   - "La suma de todos los números es:[suma]"
//   - "La media de todos los números es:[media]"
//   - "El mayor es [mayor] y el menor es [menor]"

// const numberArrayPrint = array => {
//   console.log(array[0] + array[1] + array[2]);
//   console.log((array[0] + array[1] + array[2]) / 3);

//   if (array[0] > array[1] && array[0] > array[2]) {
//     if (array[1] > array[2]) {
//       console.log(Math.max(array[0], array[1], array[2]));
//     } else {
//       console.log(Math.max(array[0], array[1], array[2]));
//     }
//   } else if (array[1] > array[0] && array[1] > array[2]) {
//     if (array[0] > array[2]) {
//       console.log(Math.max(array[0], array[1], array[2]));
//     } else {
//       console.log(Math.max(array[0], array[1], array[2]));
//     }
//   } else {
//     if (array[0] > array[1]) {
//       console.log(Math.max(array[0], array[1], array[2]));
//     } else {
//       console.log(Math.max(array[0], array[1], array[2]));
//     }
//   }
// };

// numberArrayPrint([1, 2, 3]);

// - Crea una función que reciba un array con 5 números y un número aleatorio entre 0 y 5. La función deberá decir si el array contiene ese número y en qué posición o si no lo contiene.

const generateRandomNumber = number => {
  return Math.floor(Math.random() * number);
};

const arrayIncludesRandom = (array, randomNumber) => {
  console.log(randomNumber);
  if (array.includes(randomNumber)) {
    console.log(
      'Contiene el número en la posicion ' + array.indexOf(randomNumber)
    );
  } else {
    console.log('No lo contiene');
  }
};

arrayIncludesRandom([0, 1, 2, 3, 4], generateRandomNumber(5));

// - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const fillArrayWithRandomNumbers = array => {
  const random1 = generateRandomNumber(100);
  const random2 = generateRandomNumber(100);
  const random3 = generateRandomNumber(100);
  array.push(random1);
  array.push(random2);
  array.push(random3);
  console.log(array);
  return array;
};

// fillArrayWithRandomNumbers([]);

// - Usando la función anterior, crea otra función que imprima el valor en la posición 0 del array después de haber eliminado la primera y la última posición.

const removeFirstAndLastPosition = array => {
  array.pop();
  array.shift();
  console.log(array[0]);
};

removeFirstAndLastPosition(fillArrayWithRandomNumbers([]));
