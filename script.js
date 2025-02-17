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
const newGameBtn = document.querySelector(".btn--new");
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

  document.querySelector('.player--0').classList.toggle("player--active");
  document.querySelector('.player--1').classList.toggle("player--active");

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
    totalScore0UI.textContent = totalScore0;
    console.log(`Player ${currentPlayer} has now total ${totalScore0}`);
    currentScore0 = 0
    currentScore0UI.textContent = currentScore0;



  } else if (player === 1) {
    console.log(`Player ${currentPlayer} added ${currentScore1} to total`);
    totalScore1 += currentScore1;
    totalScore1UI.textContent = totalScore1;
    console.log(`Player ${currentPlayer} has now total ${totalScore1}`);
    currentScore1 = 0;
    currentScore1UI.textContent = currentScore1;
  }

  // Check > 20
  setTimeout(() => {
    if (totalScore0 >= 20) alert("Player 1 wins");
    if (totalScore1 >= 20) alert("Player 2 wins");
  }, 100); // Delay by 100ms to allow UI updates


  // Update Current Player
  if (totalScore0 <= 20 && totalScore1 <= 20) updateCurrentPlayer();
}

function newGame() {
  console.log("Staring new game...");
  currentPlayer = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  totalScore0 = 0;
  totalScore1 = 0;
  dice = 0;

  diceImg.style.display = "None";
  document.querySelector('.player--0').classList.add("player--active");
  document.querySelector('.player--1').classList.remove("player--active");
  currentScore0UI.textContent = String(currentScore0);
  currentScore1UI.textContent = String(currentScore1);
  totalScore0UI.textContent = String(totalScore0);
  totalScore1UI.textContent = String(totalScore1);


}

// Fresh Start
console.log("New Game Start...");
console.log(`Let's start from: Player ${currentPlayer}`);
diceImg.style.display = "None";

// Start from 0
totalScore0UI.textContent = totalScore0;
totalScore1UI.textContent = totalScore1;
currentScore0UI.textContent = currentScore0;
currentScore1UI.textContent = currentScore1;



rollDiceBtn.addEventListener("click", function () {
  // console.log(`Player ${currentPlayer} is rolling a dice...`);
  let diceValue = rollDice();
  diceImg.style.display = "Block";
  console.log(`Player ${currentPlayer} rolls a ${diceValue}`);
  addCurrent(diceValue, currentPlayer);
});

holdBtn.addEventListener("click", function () {
  hold(currentPlayer);
});

newGameBtn.addEventListener("click", newGame);