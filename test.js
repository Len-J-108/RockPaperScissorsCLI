import readline from 'readline';

function typewriterWithRL(text, delay, callback) {
  return new Promise((resolve) => {
    let index = 0;

    function printChar() {
      process.stdout.write(text[index]);
      index++;

      if (index < text.length) {
        setTimeout(printChar, delay);
      } else {
        resolve();
      }
    }

    printChar();
  }).then(() => {
    if (callback) {
      callback();
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = "What's your name? ";
const delay = 100; // delay in milliseconds




typewriterWithRL(question, delay, () => {
  rl.question('', (input) => {
    console.log(`Hello, ${input}!`);
    // rl.close();
  });
});