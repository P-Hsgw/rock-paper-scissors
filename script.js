const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";


    function computerPlay () {
        let choice = Math.floor(Math.random()*3)
        if (choice === 0) {
            return ROCK;
        } else if (choice === 1) {
            return SCISSORS;
        } else if (choice === 2) {
            return PAPER;
        }
    }

    let player_choice = prompt("Enter your choice.");
    let computer_choice = computerPlay();

    function round (computer_choice, player_choice) {

        if (computer_choice == player_choice) {
            return `Computer chose ${computer_choice}. It's a tie!`; 
        } else if (computer_choice == "scissors" && player_choice == "rock" || computer_choice == "rock" && player_choice == "paper" || computer_choice == "paper" && player_choice == "scissors") {
            return `Computer chose ${computer_choice}. You got a point!` ;
        } else {
            return `Computer chose ${computer_choice}. You lost a point!`;
        }
    }
    console.log(round(computer_choice, player_choice))
/*

function humanPlay () {
    if (player_choice.toLocaleLowerCase() == "scissors") {
        return SCISSORS;
    } else if (player_choice.toLocaleLowerCase() == "rock") {
        return ROCK;
    } else if (player_choice.toLocaleLowerCase() == "paper") {
        return PAPER;
    } else {
        return "Error - please use rock, paper or scissors."
    }
}

console.log(computerPlay())
console.log(humanPlay())
*/