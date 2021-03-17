// Basic variables
let player_score = 0
let computer_score = 0
const out = document.querySelector('.output');
const outcome = document.querySelector('.outcome');
const btns = document.querySelectorAll(".btn");
const p = document.querySelector(".player_scoring")
const c = document.querySelector(".computer_scoring")
let playerChoice = ""
let computerChoice = ""

// Random computer choice
function computerPlay () { 
  let choice = Math.floor(Math.random()*3)
    
  if (choice === 0) {
    return "rock"
  } else if (choice === 1){
    return "paper"
  } else if (choice === 2){
    return "scissors"
  }
};

// Single round logic
function singleRound () {
  if (playerChoice == computerChoice ) {
    out.innerHTML = `Computer chose ${computerChoice}. It's a tie!`
  } else if (computerChoice == "scissors" && playerChoice == "paper" 
  || computerChoice == "rock" && playerChoice == "scissors" 
  || computerChoice == "paper" && playerChoice == "rock") {
      out.innerHTML = `Computer chose ${computerChoice}. You lost a point!`
      computer_score++
  } else {
      out.innerHTML = `Computer chose ${computerChoice}. You got a point!`
      player_score++
      return;
  }

};

// End of game logic - what happens after score = 3
function endOfGame () {
  if (player_score == 3) {
    outcome.innerHTML = "You win! Wait for page to refresh."
    setTimeout(function(){ location.reload(); }, 2000);

    return;
  } else if (computer_score == 3) {
    outcome.innerHTML = "You lose! Wait for page to refresh."
    setTimeout(function(){ location.reload(); }, 2000);

    return;
  } else {
    return ;
  }
}

// Game logic, includes player choice and calls other functions
for (const btn of btns) {
  btn.addEventListener('click', e => {
    playerChoice = e.target.dataset.choice;
    console.log(playerChoice)
    computerChoice = computerPlay();
    singleRound();
    p.innerHTML = player_score
    c.innerHTML = computer_score
    endOfGame ()
  });
}