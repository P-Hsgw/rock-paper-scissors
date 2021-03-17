// Basic variables
let player_score = 0
let computer_score = 0



// Main game function

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



const out = document.querySelector('.result');
const btns = document.querySelectorAll(".btn");


let playerChoice = ""

let computerChoice = ""


function singleRound () {
  if (playerChoice == computerChoice ) {
    console.log ("It's a tie!")
  } else if (computerChoice == "scissors" && playerChoice == "paper" 
  || computerChoice == "rock" && playerChoice == "scissors" 
  || computerChoice == "paper" && playerChoice == "rock") {
      console.log("It's a loss")
  } else {
      console.log("It's a win!")
  }

}

for (const btn of btns) {
  btn.addEventListener('click', e => {
    playerChoice = e.target.dataset.choice;
    console.log(playerChoice)
    computerChoice = computerPlay();
    console.log(computerChoice)
    singleRound();
  });

  
}



/*

    // Simple score counter, incrementing scores for single round winner
    function scoreCounter (computer_selection, player_selection) {
        if (computer_selection === player_selection) {
            ;
        } else if (computer_selection == "scissors" && player_selection == "paper" 
        || computer_selection == "rock" && player_selection == "scissors" 
        || computer_selection == "paper" && player_selection == "rock") {
            return computer_score++;
        } else {
            return player_score++;
        }
        
    };
/*
   console.log(singleRound(computer_selection, player_selection))
   scoreCounter(computer_selection, player_selection)
   
*/
