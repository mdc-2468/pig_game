'use strict';

let currentPlayer = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let totalScore0 = 0;
let totalScore1 = 0;
let dice = 0;

const diceImg = document.querySelector(".dice")
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const totalScore0UI = document.querySelector("#score--0");
const totalScore1UI = document.querySelector("#score--1");
const currentScore0UI = document.querySelector("#current--0");
const currentScore1UI = document.querySelector("#current--1");




function rollDice() {
  dice = Math.floor(Math.random() * 6 + 1);
  // console.log(dice);
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
  return dice;
}

function updateCurrentPlayer() {
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
  console.log(`Now it's player ${currentPlayer}'s turn`);

}


function addCurrent(diceValue, player) {
  if (diceValue !== 1) {
    if (player === 0) {
      currentScore0 += diceValue;
      currentScore0UI.textContent = currentScore0;

    } else if (player === 1) {
      currentScore1 += diceValue;
      currentScore1UI.textContent = currentScore1;

    }

  } else {
    console.log("Switch User because of dice = 1");
    if (player === 0) {
      currentScore0 = 0;
      currentScore0UI.textContent = currentScore0;

    } else if (player === 1) {
      currentScore1 = 0;
      currentScore1UI.textContent = currentScore1;

    }
    // Update Current Player
    updateCurrentPlayer();
  }
}


function hold(player) {
  console.log(`Player ${player} clicked hold`);

  if (player === 0) {
    console.log(`Player ${currentPlayer} added ${currentScore0} to total`);
    totalScore0 += currentScore0
    currentScore0 = 0
    console.log(`Player ${currentPlayer} has now total ${totalScore0}`);
    totalScore0UI.textContent = totalScore0;
    currentScore0UI.textContent = currentScore0;

  } else if (player === 1) {
    console.log(`Player ${currentPlayer} added ${currentScore1} to total`);
    totalScore1 += currentScore1;
    currentScore1 = 0;
    console.log(`Player ${currentPlayer} has now total ${totalScore1}`);
    totalScore1UI.textContent = totalScore1;
    currentScore1UI.textContent = currentScore1;
  }


  // Update Current Player
  updateCurrentPlayer();
}


// Fresh Start
console.log("New Game Start...");
console.log(`Let's start from: ${currentPlayer}`);

// Start from 0
totalScore0UI.textContent = totalScore0;
totalScore1UI.textContent = totalScore1;
currentScore0UI.textContent = currentScore0;
currentScore1UI.textContent = currentScore1;



rollDiceBtn.addEventListener("click", function () {
  // console.log(`Player ${currentPlayer} is rolling a dice...`);
  let diceValue = rollDice();
  console.log(`Player ${currentPlayer} rolls a ${diceValue}`);
  addCurrent(diceValue, currentPlayer);
});
holdBtn.addEventListener("click", function () {
  hold(currentPlayer);
}); 