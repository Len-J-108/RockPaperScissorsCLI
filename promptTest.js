let value;

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

const input = () => {
  rl.setPrompt('Make a choice! \n');
  rl.prompt();
  rl.on('line', (num) => {
    if (num > 0 && num <= 3) {
      // rl.close();
      process.exit();
    }
  });
  return value;
};

async function outer() {
  // return value;
  await input();
  console.log(`the value is now: ${value}`);
}
outer();

// console.log(`the value is: ${value}`);
