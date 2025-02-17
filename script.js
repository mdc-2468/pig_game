'use strict';

let currentPlayer = 0;
let currentScores = [0, 0];
let totalScores = [0, 0];
let dice = 0;

const diceImg = document.querySelector(".dice")
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
const totalScoresUI = [document.querySelector("#score--0"), document.querySelector("#score--1")];
const currentScoresUI = [document.querySelector("#current--0"), document.querySelector("#current--1")];


function rollDice() {
  dice = Math.floor(Math.random() * 6 + 1);

  diceImg.src = `dice-${dice}.png`;
  diceImg.style.display = "Block";

  console.log(`Player ${currentPlayer} rolls a ${dice}`);
  return dice;

}

function updateCurrentPlayer() {
  currentPlayer = 1 - currentPlayer;

  document.querySelector('.player--0').classList.toggle("player--active");
  document.querySelector('.player--1').classList.toggle("player--active");

  console.log(`Now it's player ${currentPlayer}'s turn`);

}


function addCurrent(diceValue, player) {
  if (diceValue !== 1) {
    currentScores[player] += diceValue;
    currentScoresUI[player].textContent = currentScores[player];

  } else {
    console.log("Switch User because of dice = 1");
    currentScores[player] = 0;
    currentScoresUI[player].textContent = currentScores[player];

    // Update Current Player
    updateCurrentPlayer();
  }
}

function hold(player) {
  console.log(`Player ${player} clicked hold`);

  totalScores[player] += currentScores[player];
  totalScoresUI[player].textContent = totalScores[player];
  console.log(`Player ${player} has added ${currentScores[player]}, the total is now ${totalScores[player]}`);
  currentScores[player] = 0;
  currentScoresUI[player].textContent = currentScores[player];

  // Check > 20
  setTimeout(() => {
    if (totalScores[0] >= 20) alert("Player 1 wins");
    if (totalScores[1] >= 20) alert("Player 2 wins");
  }, 200); // Delay by 200ms to allow UI updates

  // Update Current Player
  if (totalScores[player] <= 20) updateCurrentPlayer();
}

function newGame() {
  console.log("Staring new game...");
  currentPlayer = 0;
  currentScores = [0, 0];
  totalScores = [0, 0];
  dice = 0;

  diceImg.style.display = "None";
  document.querySelector('.player--0').classList.add("player--active");
  document.querySelector('.player--1').classList.remove("player--active");

  for (let i = 0; i < 2; i++) {
    currentScoresUI[i].textContent = currentScores[i];
    totalScoresUI[i].textContent = totalScores[i];
  }
}

// Fresh Start
console.log("New Game Start...");
console.log(`Let's start from: Player ${currentPlayer}`);
diceImg.style.display = "None";

// Start from 0
for (let i = 0; i < 2; i++) {
  currentScoresUI[i].textContent = currentScores[i];
  totalScoresUI[i].textContent = totalScores[i];
}

rollDiceBtn.addEventListener("click", function () {
  let diceValue = rollDice()
  addCurrent(diceValue, currentPlayer);
});

holdBtn.addEventListener("click", function () {
  hold(currentPlayer);
});

newGameBtn.addEventListener("click", newGame);