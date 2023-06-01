let value;

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

const input = async () => {
  rl.setPrompt('Make a choice! \n');
  rl.prompt();
  rl.on('line', (num) => {
    if (num > 0 && num <= 3) {
      rl.close();
      process.exit();
    }
  });

  return value;
};

// as await
// async function outer() {
//   // return value;
//   await input();
//   console.log(`the value is now: ${value}`);
// }
// outer();

// as callback

function outer(callback) {
  callback();
}
outer(input);
console.log(`the value is: ${value}`);
