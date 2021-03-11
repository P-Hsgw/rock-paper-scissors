const ROCK = "rock";
const SCISSORS = "scissors";
const PAPER = "paper";

function computerPlay () {
    let choice = Math.floor(Math.random()*3)
    if (choice === 0) {
        return ROCK;
    } else if (choice === 1) {
        return SCISSORS;
    } else {
        return PAPER;
    }
}


let player_choice = prompt("Enter your choice.")

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