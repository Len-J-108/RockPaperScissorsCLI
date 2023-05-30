// pool of choices for the game
const pool = ['Scissor', 'Rock', 'Paper'];

// freeze makes the pool uneditable
Object.freeze(pool);

console.log(pool);

//Formula:  Math.floor(Math.random() * (max - min + 1) + min);

// Compare Function
function compare(a, b) {
  let res;
  if (a === b) {
    res = 0;
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
  }
}
