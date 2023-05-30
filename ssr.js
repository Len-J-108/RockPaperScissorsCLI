'use strict';
// pool of choices for the game
const pool = ['Scissor', 'Rock', 'Paper'];

// freeze makes the pool uneditable
Object.freeze(pool);
console.log(pool);

//prompt-sync npm package stuff
const prompt = require('prompt');
prompt.start();
// const prompt = promptSync();

//Formula:  Math.floor(Math.random() * (max - min + 1) + min);

// Compare Function
function compare(a, b) {
  let res;
  if (a === b) {
    res = 0;
    return res;
  }
  switch (a) {
    case 'Scissor':
      if (b === 'Rock') {
        res = 1;
        return res;
        //   break;
      }
      if (b === 'Paper') {
        res = -1;
        return res;
        //   break;
      }
      break;
    case 'Rock':
      if (b === 'Paper') {
        res = 1;
        return res;
      }
      if (b === 'Scissor') {
        res = -1;
        return res;
      }
      break;
    case 'Paper':
      if (b === 'Rock') {
        res = -1;
        return res;
      }
      if (b === 'Scissor') {
        res = 1;
        return res;
      }
      break;
  }
}

//------------------------------------------------------------------------------------
// first testing
// console.log(compare('Scissor', 'Scissor')); // 0
// console.log(compare('Scissor', 'Rock')); // 1
// console.log(compare('Scissor', 'Paper')); // -1

// console.log(compare('Rock', 'Rock')); // 0
// console.log(compare('Rock', 'Scissor')); // -1
// console.log(compare('Rock', 'Paper')); // 1

// console.log(compare('Paper', 'Paper')); // 0
// console.log(compare('Paper', 'Rock')); // -1
// console.log(compare('Paper', 'Scissor')); // 1
//------------------------------------------------------------------------------------
prompt.get('choice');
