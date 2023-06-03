const readline = require("readline");
​
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
   });
​
   const play = async () => {
     return new Promise((resolve) => {
       rl.question(
         "Gebe deine Wahl ein (Schere, Stein, Papier): ",
         async (answer) => {
           const userChoice =
             answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
           if (!pool.includes(userChoice)) {
             console.log(
               "Ungültige Wahl! Bitte wähle Schere, Stein oder Papier."
             );
             resolve(await play());
             return;
           }
​
           const game = singleGame(userChoice);
           if (game === -1) {
             playerOne.addToScore();
             console.log(
               `${playerOne.userName}, du hast gewonnen!`,
               playerOne.showScore()
             );
           }
           if (game === 0) {
             console.log(`... Unentschieden...`);
           }
           if (game === 1) {
             console.log(`${playerOne.userName}, du hast verloren!`);
           }
           playerOne.incrementGames();
           resolve();
         }
       );
     });
   };
​
   const playerOne = new Player("Rudon");
​
   const playGame = async () => {
     // hier kannst du entscheiden, wie viele Runden man spielen soll
     for (let i = 0; i < 3; i++) {
       console.log(`\nRunde ${i + 1}`);
       await play();
     }
     console.log("\nSpiel beendet");
     console.log(playerOne.showStatistic());
     rl.close();
   };
​
   playGame();