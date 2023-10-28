function typewriter(text, delay = 100) {
  let index = 0;

  function printChar() {
    process.stdout.write(text[index]);
    index++;

    if (index < text.length) {
      setTimeout(printChar, delay);
    }
  }

  printChar();
}

export default typewriter;
