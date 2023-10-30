'use strict';

import chalk from 'chalk';

// pool of choices for the game
export const pool = ['Scissor', 'Rock', 'Paper'];

// freeze makes the pool uneditable
Object.freeze(pool);
//------------------------------------------------------------------------------------
//   player class
class Player {
  constructor(userName) {
    this.userName = userName;
  }
  winMsg() {
    return `, you won!`;
  }
  looseMsg() {
    return `, you lost!`;
  }
  evenMsg() {
    return `\nEven...`;
  }
}
//------------------------------------------------------------------------------------
// create instance fo Player
export const playerModel = (name) => {
  return new Player(name, 0, 0);
};
//------------------------------------------------------------------------------------

// Game Logic

//  Scissor beats Paper
//  Rock beats Scissor
//  Paper beats Rock

// Compare Function

/*  a is player and b is radnom Function
    when a wins: res is -1
    when b wins: res is 1
    if their even: res is 0*/

export function compare(a, b) {
  if (a === b) {
    return 0;
  }
  switch (a) {
    case 'Scissor':
      return b === 'Rock' ? 1 : -1;
    case 'Rock':
      return b === 'Paper' ? 1 : -1;
    case 'Paper':
      return b === 'Scissor' ? 1 : -1;
  }
}

//------------------------------------------------------------------------------------
// testing game Logic
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

// randon Function ----> Math.floor(Math.random() * (max - min + 1) + min) <----

export const chooseRandom = () => {
  return Math.floor(Math.random() * 3); // between 0 and 2 (indices of pool)
};

// console.log(chooseRandom()); // random test
//------------------------------------------------------------------------------------

// Main Game

//single Game Function with compare as inner function
export const singleGame = (valA, valB = pool[chooseRandom()]) => {
  // Get corresponding name from pool array
  valA = pool[valA - 1];
  console.log(
    chalk.bgWhite.black(`${valA}`) + ' : ',
    chalk.bgBlack.white(`${valB}`)
  );
  return compare(valA, valB);
};
