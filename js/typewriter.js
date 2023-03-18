const typewriterElement = document.getElementById("typewriter");

const phrases = ["Olga", "cat lover", "coffeeholic"];

let sleepTime = 100;

let currentIndex = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const writeLoop = async () => {
  while (true) {
    let currentWord = phrases[currentIndex];

    for (let i = 0; i < currentWord.length; i++) {
      typewriterElement.innerText = currentWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = currentWord.length; i > 0; i--) {
      typewriterElement.innerText = currentWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (currentIndex === phrases.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }
};

writeLoop();
