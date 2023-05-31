'use strict';
// pool of choices for the game
const pool = ['Scissor', 'Rock', 'Paper'];

// possible scores of the Game
const scoreLines = [
  '0 : 0',
  '1 : 0',
  '0 : 1',
  '1 : 1',
  '2 : 1',
  '1 : 2',
  '2 : 0',
  '0 : 2',
];

// freeze makes the pool uneditable
Object.freeze(pool);
console.log(pool);
//------------------------------------------------------------------------------------
//   player class
class Player {
  constructor(userName, score, amountOfGames) {
    this.userName = userName;
    this.score = score;
    this.amountOfGames = amountOfGames;
  }
  winMsg() {
    return `Strike!!`;
  }
  looseMsg() {
    return `Looser!!`;
  }
  addToScore() {
    this.score++;
  }
  showScore() {
    return `Ỳou have won ${this.score} games so far...`;
  }
  showAmountOfGames() {
    return `You have played ${this.amountOfGames} so far...carry on!`;
  }
  showStatistic() {
    const stat = (this.score / this.amountOfGames) * 100;
    return `You have won ${stat}% of all games.`;
  }
}
//------------------------------------------------------------------------------------

// Game Logic

// Compare Function

/*a is player and b is radnom Function
when a wins: res is -1
when b wins: res is 1
if their even: res is 0*/

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

// randon Function

const choose = () => {
  return Math.floor(Math.random() * 3);
};

// console.log(choose()); // random test
//------------------------------------------------------------------------------------
