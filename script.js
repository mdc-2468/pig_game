'use strict';

let currentPlayer = "0";
let currentScore1 = 0;
let currentScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let dice = 0;
const diceImg = document.querySelector(".dice")

const rollDiceBtn = document.querySelector(".btn--roll");

function rollDice() {
  dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);
  switch (dice) {
    case 1:
      diceImg.setAttribute("src", "dice-1.png");
      break;
    case 2:
      diceImg.setAttribute("src", "dice-2.png");
      break;
    case 3:
      diceImg.setAttribute("src", "dice-3.png");
      break;
    case 4:
      diceImg.setAttribute("src", "dice-4.png");
      break;
    case 5:
      diceImg.setAttribute("src", "dice-5.png");
      break;
    case 6:
      diceImg.setAttribute("src", "dice-6.png");
      break;
  }
}


rollDiceBtn.addEventListener("click", rollDice);