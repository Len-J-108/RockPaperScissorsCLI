const typewriter = (text, delay = 50) => {
  return new Promise((resolve) => {
    // function typewriter(text, delay = 100) {
    let index = 0;

    function printChar() {
      process.stdout.write(text[index]);
      index++;

      if (index < text.length) {
        setTimeout(printChar, delay);
      } else resolve();
    }

    printChar();
  });
};


export default typewriter;
