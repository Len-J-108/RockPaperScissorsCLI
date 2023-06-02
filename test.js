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
// console.log(pool);
//------------------------------------------------------------------------------------
//   player class
class Player {
  constructor(userName, score, amountOfGames) {
    this.userName = userName;
    this.score = score;
    this.amountOfGames = amountOfGames;
  }
  winMsg() {
    return `, you won!`;
  }
  looseMsg() {
    return `, you lost!`;
  }
  evenMsg() {
    return `... even...`;
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
      }
      if (b === 'Paper') {
        res = -1;
        return res;
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

/*a is player and b is radnom Function
when a wins: res is -1
when b wins: res is 1
if their even: res is 0*/

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
const chooseRandom = () => {
  return Math.floor(Math.random() * 3); // between 0 and 2 (indices of pool)
};
// console.log(chooseRandom()); // random test
//------------------------------------------------------------------------------------

// Main Game

// create instance fo Player
const playerOne = new Player('Rudon', 0, 0);

//single Game Function with compare as inner function
const singleGame = (valA) => {
  let valB = pool[chooseRandom()];
  console.log(`${valA} : ${valB}`);
  return compare(valA, valB);
};
// singleGame(pool[0]);

//play function
let play = (a_SingleScore, b_SingleScore) => {
  const game = singleGame(pool[0]);
  if (game === -1) {
    a_SingleScore++;
    console.log(
      playerOne.userName,
      playerOne.winMsg(),
      `score a is: ${a_SingleScore}`
    );
  }
  if (game === 0) {
    console.log(playerOne.evenMsg());
  }
  if (game === 1) {
    b_SingleScore++;
    console.log(
      playerOne.userName,
      playerOne.looseMsg(),
      `score b is: ${b_SingleScore}`
    );
  }
};

//function
let a_SingleScore = 0;
let b_SingleScore = 0;
let a_MetaScore = 0;
let b_MetaScore = 0;
let wholeGame = (a_SingleScore, b_SingleScore, a_MetaScore, b_MetaScore) => {
  for (let i = 1; i <= 20; i++) {
    if (a_MetaScore > 1) {
      console.log(`Player A wins the game`);
      return;
    }
    if (b_MetaScore > 1) {
      console.log(`Player B wins the game`);
      return;
    }
    if (a_SingleScore > 1) {
      a_MetaScore++;
      a_SingleScore = 0;
    }
    if (b_SingleScore > 1) {
      b_MetaScore++;
      b_SingleScore = 0;
    }
    play(a_SingleScore, b_SingleScore);
  }
};
// console.time();
wholeGame(a_SingleScore, b_SingleScore, a_MetaScore, b_MetaScore);
// wholeGame(0, 0, 0, 0);
// console.timeEnd();
