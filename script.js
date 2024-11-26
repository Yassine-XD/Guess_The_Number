"use strict";
// console.log("here we go again");
// console.log(document.querySelector(".message").textContent);

// //prepare variables, 1- number
// let number = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// let highScore = 0;

// document.querySelector(".message").textContent = "Hello Madafaka 🃏";

// document.querySelector(".check").addEventListener("click", () => {
//   const guess = document.querySelector(".guess").valueAsNumber;

//   //when there is no input
//   if (!guess) {
//     document.querySelector(".message").textContent = "🔴 No Number!";
//   }

//   //when player trying
//   if (score > 1) {
//     //when guess is too low
//     if (guess < number) {
//       document.querySelector(".message").textContent = "Your are low 📉";
//       trying();
//     }

//     //when guess is too low
//     else if (guess > number) {
//       document.querySelector(".message").textContent = "Your are far 📈 ";
//       trying();
//     }

//     //when guess true
//     else if (guess === number) {
//       document.querySelector(".message").textContent = "You are right 🥬 ";
//       win(guess);
//     }
//   }

//   //when player lose
//   else if (score > 0) {
//     lose();
//   }
// });

// document.querySelector(".again").addEventListener("click", () => {
//   again();
// });

// const win = () => {
//   highScore += score;
//   score = 20;
//   document.querySelector(".number").textContent = number;
//   document.querySelector(".highscore").textContent = highScore;
//   document.querySelector("body").style.backgroundColor = "#60b347";
//   document.querySelector(".number").style.width = "30rem";
//   document.querySelector(".check").disabled = true;
// };

// const trying = () => {
//   score--;
//   document.querySelector(".score").textContent = score;
// };

// const lose = () => {
//   score--;
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".message").textContent = "💣 You lost The game";
// };

// const again = () => {
//   score = 20;
//   number = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector(".number").textContent = "?";

//   document.querySelector(".guess").value = "";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".check").disabled = false;
//   document.querySelector("body").style.backgroundColor = "#222222";
//   document.querySelector(".number").style.width = "15rem";
// };

//cache Dom Elements
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessNumberEl = document.querySelector(".guess");

//Initialize variables
let secretNumber = generateRandomNumber();
let score = 20;
let highScore = 0;

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

//display message
function displayMessage(message) {
  messageEl.textContent = message;
}

checkButton.addEventListener("click", () => {
  let guess = guessNumberEl.valueAsNumber;

  if (!guess) {
    displayMessage("🔴 No Number!");
  } else if (guess < 1 || guess > 20) {
    displayMessage("🚫 Guess must be between 1 and 20!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct! You win!");
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    numberEl.style.width = "30rem";
    checkButton.disabled = true;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "📉 Too low!" : "📈 Too high!");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreEl.textContent = 0;
      checkBtn.disabled = true;
    }
  }
});

// Reset game
againButton.addEventListener("click", () => {
  score = 20;
  secretNumber = generateRandomNumber();
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessNumberEl.value = "";
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
  checkButton.disabled = false;
});
