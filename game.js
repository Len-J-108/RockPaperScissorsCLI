import { pool, compare, playerModel, chooseRandom, singleGame } from './ssr.js';
import readline from 'readline';
import typewriter from './typeWrite.js';

// Initialize player variable
let player = {};

// Counter variable for game logic
let count = { countA: 0, countB: 0 };

//description manual for player
const infoText = `Make a choice!

press 1 for Scissor
press 2 for Rock
press 3 for Paper
    ...then press enter\n\n`;

//------------------------------------------------------------------------------------
// waiter syntax
const wait = (msec) =>
  new Promise((resolve, _) => {
    setTimeout(resolve, msec);
  });

//------------------------------------------------------------------------------------
// Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askForName = async () => {
  // Get name from readline
  const playerName = await new Promise((resolve) => {
    rl.question('Enter your name! \n\n', (input) => {
      if (input.length <= 20) {
        resolve(input);
      } else {
        console.clear();
        console.log('Name needs to be less than 20 characters!\n\n');
        resolve(askForName());
      }
    });
  });
  // Log playerName
  console.clear();
  console.log(`Welcome ${playerName}`);

  return playerName;
};

const getChoiceFromUser = async () => {
  // Get choice from readline
  const choice = await new Promise((resolve) => {
    rl.question(infoText, (input) => {
      // Check if input is a nmumber between 1-3
      if (/^[1-3]/.test(input)) {
        // Convert input to number
        input = +input;
        // Resolve the promise
        resolve(input);
      } else {
        // If input is anything other than 1-3
        console.clear();
        console.log('Please enter a number between 1 and 3!\n\n');
        // recursive recall of function
        resolve(getChoiceFromUser());
      }
    });
  });
  return choice;
};

const game = async () => {
  // Call for name
  (async () => {
    //  !Everything in IIFE so can use waiter dont delete
    const answer = await askForName();
    // Create PlayerModel with name
    player = playerModel(answer);
    // wait
    await wait(2000);
    console.clear();

    // Rounds & Counter Variables
    let { countA, countB } = count;
    let i = 1;

    // While loop => best out of three wins
    while (countA < 2 && countB < 2) {
      // Show round no.
      console.clear();
      console.log(`ROUND ${i}\n\n`);
      // Wait
      await wait(400);
      // Get gameChoice from User
      const userChoice = await getChoiceFromUser();
      console.clear();

      // Enter game logic
      const res = singleGame(userChoice);

      res === 0 ? console.log(player.evenMsg()) : res < 0 ? countA++ : countB++;
      console.log(`${player.userName}: ${countA} / computer: ${countB}
      
      `);
      // Wait
      await wait(2000);
      i++;
    }
    // Define who won
    if (countA > 1) {
      player.addToScore();
      player.amountOfPlayedGames++;
      console.log(player.userName, player.winMsg());
    }
    if (countB > 1) {
      player.amountOfPlayedGames++;
      console.log(player.userName, player.looseMsg());
    }

    // Wait, then end the programm
    await wait(3000); // wait
    rl.close(); // end readline
  })(); //  !Everything in IIFE so can use waiter dont delete
};

// Call game function
game();
