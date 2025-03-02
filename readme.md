# Introduction

This is a game for two players, which the players aim at accumulating a total score of 30. The first player having total score with more than 20 will win the game.

# Rules

Two players take turn to roll the dice, player can choose to roll the dice as many times as they wish to.

- If the dice is `1`, all the current score accumulated will be gone. And the dice will pass to the other player.
- If the dice is not `1`, then it will contribute to the current score.

If a player feels the next round is going to be '1', they can click "HOLD", which will then add the current score to the total score.
(The total score will NOT be resetting to `0` even if you roll a `1`.)

# Updates

## 2025-03-03

- Completed the UI of the whole system
- Added "New Game" button handling to show up whose turn and show the Dice image
- Added "Roll Dice" button handling to roll a dice for the player and update the Dice Image accordingly
- Added handling of updating current score based on dice value of the active player
- Added "Hold" button handling to add current score to total score and switch active player;
- Added handling to switch user if user roll a dice of 1
- Added handling to update whose turn statement when switching player

# To Do

- Add the logic to win the game
