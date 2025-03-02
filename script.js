'use strict';

let activePlayer = 0;
let counterPlayer = 1;
let currentScores = [0, 0];
let totalScores = [0, 0];

const diceUI = document.querySelector("#diceUI");
const diceImg = document.querySelector("#diceImg");
const whoseTurnUI = document.querySelector("#whoseTurnUI");
const whoseTurn = document.querySelector("#whoseTurn");
const playerCards = [document.querySelector("#player0"), document.querySelector("#player1")];
const rollBtns = [document.querySelector("#roll0"), document.querySelector("#roll1")]
const holdBtns = [document.querySelector("#hold0"), document.querySelector("#hold1")]
const currentUI = [document.querySelector("#current0"), document.querySelector("#current1")]
const totalUI = [document.querySelector("#total0"), document.querySelector("#total1")]


document.querySelector("#newGame").addEventListener("click", triggerNewGame);

for (let i = 0; i < rollBtns.length; i++) {
  rollBtns[i].addEventListener("click", () => { rollDice(activePlayer) });
}
for (let i = 0; i < holdBtns.length; i++) {
  holdBtns[i].addEventListener("click", () => { hold(activePlayer, currentScores[activePlayer]) });
}

function triggerNewGame() {
  console.log('Activating New Game...');
  activePlayer = 0;
  rollBtns[counterPlayer].disabled = true;
  holdBtns[counterPlayer].disabled = true;
  rollBtns[activePlayer].disabled = false;
  holdBtns[activePlayer].disabled = false;
  currentScores = [0, 0];
  totalScores = [0, 0];
  for (let i = 0; i < 2; i++) {
    currentUI[i].innerText = currentScores[i];
    totalUI[i].innerText = totalScores[i];
  }
  diceUI.classList.remove("hidden");
  whoseTurnUI.classList.remove("hidden");
  playerCards[0].classList.add("activePlayer");
}

function rollDice(activePlayer) {
  const diceValue = Math.floor(Math.random() * 6 + 1);
  console.log(`Player ${activePlayer} roll a dice of ${diceValue}`);
  const diceImgSrc = 'dice-' + diceValue + '.png';
  diceImg.src = diceImgSrc;
  updateCurrent(activePlayer, diceValue);
}

function updateCurrent(activePlayer, diceValue) {
  if (diceValue === 1) {
    currentScores[activePlayer] = 0;
    currentUI[activePlayer].innerText = currentScores[activePlayer];
    switchPlayer();
  } else {
    currentScores[activePlayer] += diceValue;
    currentUI[activePlayer].innerText = currentScores[activePlayer];
  }
  console.log(`Updating Current Score of player ${activePlayer} to ${currentScores[activePlayer]}`);
  console.log(`Current Scores: ${currentScores}; Total Scores: ${totalScores}; Active Player: ${activePlayer}`);
}

function hold(activePlayer, currentScore) {
  console.log(`Player ${activePlayer} clicked hold, and is adding ${currentScore} to total.`);
  totalScores[activePlayer] += currentScores[activePlayer];
  totalUI[activePlayer].innerText = totalScores[activePlayer];
  currentScores[activePlayer] = 0;
  currentUI[activePlayer].innerText = currentScores[activePlayer];
  switchPlayer();

}

function switchPlayer() {
  console.log('Switching Player...');
  playerCards[0].classList.toggle("activePlayer");
  playerCards[1].classList.toggle("activePlayer");
  activePlayer = 1 - activePlayer;
  counterPlayer = 1 - counterPlayer;
  rollBtns[counterPlayer].disabled = true;
  holdBtns[counterPlayer].disabled = true;
  rollBtns[activePlayer].disabled = false;
  holdBtns[activePlayer].disabled = false;
  whoseTurn.innerText = `Player ${activePlayer + 1}'s turn`;
  console.log(`Current Scores: ${currentScores}; Total Scores: ${totalScores}; Active Player: ${activePlayer}`);
}