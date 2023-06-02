1. **Projekteinrichtung**
​
   Ich habe mein Datei als `game.js` gennannt.
​
2. **Die Optionen festlegen**
​
   Als erstes müssen wir die Optionen für unser Spiel in einem Array (als pool gennant) festlegen:
​
   - Schere,
   - Stein und
   - Papier.
​
   ```javascript
   const pool = ["Schere", "Stein", "Papier"];
   ```
​
3. **Die Spieler-Klasse erstellen**
​
   Wir erstellen eine Spieler-Klasse, um unseren Spieler darzustellen.
   Jeder Spieler hat einen `Benutzernamen`, einen `Punktestand` und die `Anzahl` der gespielten Spiele.
​
   ```javascript
   class Player {
     constructor(userName, score = 0, amountOfGames = 0) {
       this.userName = userName;
       this.score = score;
       this.amountOfGames = amountOfGames;
     }
​
     addToScore() {
       this.score++;
     }
​
     incrementGames() {
       this.amountOfGames++;
     }
​
     showScore() {
       return `Du hast bis jetzt ${this.score} Spiele gewonnen...`;
     }
​
     showAmountOfGames() {
       return `Du hast bis jetzt ${this.amountOfGames} Spiele gespielt...mach weiter so!`;
     }
​
     showStatistic() {
       const stat = Math.round((this.score / this.amountOfGames) * 100);
       return `Du hast ${stat}% aller Spiele gewonnen.`;
     }
   }
   ```
​
4. **Spiellogik**
​
   Wir müssen die Regeln des Spiels festlegen. In Schere, Stein, Papier sind die Regeln wie folgt:
​
   - Stein schlägt Schere.
   - Schere schlägt Papier.
   - Papier schlägt Stein.
​
   Das kann mit einer `compare` Funktion gemacht werden.
​
   ```javascript
   function compare(a, b) {
     if (a === b) return 0;
     switch (a) {
       case "Schere":
         return b === "Stein" ? 1 : -1;
       case "Stein":
         return b === "Papier" ? 1 : -1;
       case "Papier":
         return b === "Schere" ? 1 : -1;
     }
   }
   ```
​
5. **Wähle eine zufällige Option**
​
   Unser Spiel wird eine zufällige Wahl für den Computer treffen. Wir können das mit einer Funktion machen, die eine zufällige Zahl generiert und sie als Index verwendet, um ein Element aus dem Pool-Array auszuwählen.
​
   ```javascript
   const chooseRandom = () => pool[Math.floor(Math.random() * 3)];
   ```
​
6. **Ein einzelnes Spiel spielen**
​
   Jetzt können wir unsere `compare` und `chooseRandom` Funktionen nutzen, um ein einzelnes Spiel zu spielen. Wir erstellen eine `singleGame` Funktion, die die Wahl des Spielers als Parameter annimmt, eine zufällige Wahl für den Computer trifft und das Ergebnis des Vergleichs der beiden Wahlen zurückgibt.
​
   ```javascript
   const singleGame = (valA) => {
     let valB = chooseRandom();
     console.log(`${valA} : ${valB}`);
     return compare(valA, valB);
   };
   ```
​
7. **Das Spiel spielen**
​
   Endlich können wir alles zusammenfügen, um das Spiel zu spielen.
​
   - Wir erstellen eine Instanz unserer Spieler-Klasse für unseren Spieler, und
   - wir verwenden das Node.js `readline` Modul, um den Benutzer nach seiner Wahl zu fragen.
​
   ```javascript
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
​
     console.log("\nSpiel beendet");
     console.log(playerOne.showStatistic());
     rl.close();
   };
​
   playGame();