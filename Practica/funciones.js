console.log('Flama');

/* Formas de declarar una funcion */

// La de siempre
function pulgadasACM(pulgadas) {
  return pulgadas * 2.54;
}

// Funcion anonima (con expresiones regualres)
const pulgadasACM2 = function(pulgadas) {
  return pulgadas * 2.54;
};

// Funcion corta
const pulgadasACMCorta = pulgadas => pulgadas * 2.54;

// Declarando metodos

/*eslint-disable*/
const Persona = {
  name: `Franco`,
  lastname: `Fourmantin`,
  edad: `21`,

  saludar : function() {
    console.log('Que onda que onda');
  },
};
/* eslint-enable */

const age = 200;

function go() {
  const age = 100;
  console.log(age);
}

go(); // Este va  mostrar 100

console.log(age); // Este va a mostrar 200

const name2 = 'franco';

function testScope() {
  console.log(name2);
}

/** Closoureee */
function game(nameGame) {
  let score = 0;
  return function() {
    score++;
    return `${nameGame} ${score}`;
  };
}

const soccer = game('futbol');
