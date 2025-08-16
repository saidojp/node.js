const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tries;
let randomNumber;

function startGame() {
  tries = 3;
  randomNumber = getRandomIntInclusive(1, 10);
  rl.setPrompt("Guess Number! (1-10): ");
  rl.prompt();
}

function askToPlayAgain() {
  rl.question("もう一度遊びますか? (start/exit): ", (answer) => {
    if (answer.toLowerCase() === "start") {
      startGame();
    } else {
      console.log("さよなら!");
      rl.close();
    }
  });
}

rl.on("line", function (answer) {
  tries--;
  game(tries, randomNumber, answer);
  if (tries > 0) {
    rl.prompt();
  }
});

function game(tries, randomNumber, guess) {
  const guessNumber = parseInt(guess, 10);

  if (tries >= 0) {
    if (guessNumber === randomNumber) {
      console.log("おめでとう!");
      askToPlayAgain();
    } else if (tries === 0) {
      console.log("残念! 正解は:", randomNumber);
      askToPlayAgain();
    } else if (isNaN(guessNumber)) {
      console.log("数字ではありません。残りの試行回数: ", tries);
    } else if (guessNumber < randomNumber) {
      console.log("低すぎ。残りの試行回数: ", tries);
    } else if (guessNumber > randomNumber) {
      console.log("高すぎ。残りの試行回数: ", tries);
    }
  }
}

// Start the first game
startGame();
