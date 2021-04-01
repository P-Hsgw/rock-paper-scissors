// Basic variables
let player_score = 0;
let computer_score = 0;
const out = document.querySelector(".output"); // Result of a round
const outcome = document.querySelector(".outcome"); // Result of a game
const btns = document.querySelectorAll(".btn");
const p = document.querySelector(".player_scoring"); // Player score span
const c = document.querySelector(".computer_scoring"); // Computer score span
let playerChoice = "";
let computerChoice = "";
let gameEnded = false;

// Random computer choice
function computerPlay() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
}

// Single round logic
function singleRound() {
  if (playerChoice == computerChoice && gameEnded === false) {
    out.innerHTML = `Computer chose ${computerChoice}. It's a tie!`;
  } else if (
    (computerChoice == "scissors" &&
      playerChoice == "paper" &&
      gameEnded === false) ||
    (computerChoice == "rock" &&
      playerChoice == "scissors" &&
      gameEnded === false) ||
    (computerChoice == "paper" && playerChoice == "rock" && gameEnded === false)
  ) {
    out.innerHTML = `Computer chose ${computerChoice}. You lost a point!`;
    computer_score++;
  } else if (gameEnded === false) {
    out.innerHTML = `Computer chose ${computerChoice}. You got a point!`;
    player_score++;
    return;
  } else {
    return;
  }
}

// End of game logic - what happens after score = 3
function endOfGame() {
  if (player_score == 3) {
    gameEnded = true;
    outcome.innerHTML = "You win! Wait for page to refresh.";
    setTimeout(function () {
      location.reload();
    }, 2000);

    return;
  } else if (computer_score == 3) {
    gameEnded = true;
    outcome.innerHTML = "You lose! Wait for page to refresh.";
    setTimeout(function () {
      location.reload();
    }, 2000);

    return;
  } else {
    return;
  }
}

// Game logic, includes player choice and calls other functions
for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    playerChoice = e.target.dataset.choice;
    computerChoice = computerPlay();
    singleRound();
    p.innerHTML = player_score;
    c.innerHTML = computer_score;
    endOfGame();
  });
}
