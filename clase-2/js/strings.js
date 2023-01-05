/* - Crea dos funciones que reciban una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Una función lo resolverá con if y la otra con un operador ternario. */

const getWord = word => {
  if (word.length > 5) {
    return word.toUpperCase();
  } else {
    return word.toLowerCase();
  }
};

console.log(getWord('Perro'));

const getWord2 = word => {};

/* - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

  ar - ar
  ar - er
  ar - ir

  er - ar
  er - er
  er - ir

  ir - ar
  ir - er
  ir - ir */

const verbs = (verb1, verb2) => {};

/* - Crea una función que reciba un sólo parámetro con nombre y apellido separados por un espacio. La función debe separar el nombre y el apellido e imprimirlos por separado en dos console.log. */

const nameAndSurname = nameComplete => {};

/* - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona" */

const generateWord = (word1, word2, word3) => {};

/*  - Crea una función que reciba un email e imprima por separado el nombre y el dominio. "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com". */

const userAndDomain = email => {};

const random = () => {
  const word = 'HOLA';
  const word2 = 'elisa';
  console.log(
    word.charAt(Math.floor(Math.random() * word.length)) +
      word2.charAt(Math.floor(Math.random() * word2.length))
  );
};

random();
