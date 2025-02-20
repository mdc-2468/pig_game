'use strict';

const diceImg = document.querySelector(".dice")
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
const totalScoresUI = [document.querySelector("#score--0"), document.querySelector("#score--1")];
const currentScoresUI = [document.querySelector("#current--0"), document.querySelector("#current--1")];

let currentPlayer, currentScores, totalScores, dice;

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

function addCurrent(diceValue) {
  if (diceValue !== 1) {
    currentScores[currentPlayer] += diceValue;
    currentScoresUI[currentPlayer].textContent = currentScores[currentPlayer];

  } else {
    console.log("Switch User because of dice = 1");
    currentScores[currentPlayer] = 0;
    currentScoresUI[currentPlayer].textContent = currentScores[currentPlayer];

    // Update Current Player
    updateCurrentPlayer();
  }
}

function hold() {
  console.log(`Player ${currentPlayer} clicked hold`);

  totalScores[currentPlayer] += currentScores[currentPlayer];
  totalScoresUI[currentPlayer].textContent = totalScores[currentPlayer];
  console.log(`Player ${currentPlayer} has added ${currentScores[currentPlayer]}, the total is now ${totalScores[currentPlayer]}`);
  currentScores[currentPlayer] = 0;
  currentScoresUI[currentPlayer].textContent = currentScores[currentPlayer];

  if (totalScores[currentPlayer] >= 30) {
    diceImg.style.display = "None";
    holdBtn.style.display = "None";
    rollDiceBtn.style.display = "None";
    setTimeout(() => {
      alert(`Player ${currentPlayer + 1} wins`);
    }, 200); // Delay by 200ms to allow UI updates

  } else {
    // Update Current Player
    updateCurrentPlayer();
  }
}

function newGame() {
  console.log("Staring new game...");
  console.log(`Let's start from: Player ${currentPlayer}`);

  currentPlayer = 0;
  currentScores = [0, 0];
  totalScores = [0, 0];
  dice = 0;

  diceImg.style.display = "None";
  holdBtn.style.display = "Block";
  rollDiceBtn.style.display = "Block";
  document.querySelector('.player--0').classList.add("player--active");
  document.querySelector('.player--1').classList.remove("player--active");

  for (let i = 0; i < 2; i++) {
    currentScoresUI[i].textContent = currentScores[i];
    totalScoresUI[i].textContent = totalScores[i];
  }
}

// Fresh Start
newGame();

rollDiceBtn.addEventListener("click", function () {
  let diceValue = rollDice()
  addCurrent(diceValue);
});

holdBtn.addEventListener("click", function () {
  hold();
});

newGameBtn.addEventListener("click", newGame);