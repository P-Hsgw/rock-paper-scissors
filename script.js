// Basic variables
let player_score = 0
let computer_score = 0

// Main game function
function game () {
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
    
    // Variables with computer and player choices
    let computer_selection = computerPlay()
    let player_selection = prompt("Enter your choice - rock, paper or scissors:").toLowerCase();

    // Single round function - returning game outcome each round
    function singleRound (computer_selection, player_selection) {
        if (computer_selection === player_selection) {
            return `Computer chose ${computer_selection}. It's a tie.`
        } else if (computer_selection == "scissors" && player_selection == "paper" 
        || computer_selection == "rock" && player_selection == "scissors" 
        || computer_selection == "paper" && player_selection == "rock") {
            return `Computer chose ${computer_selection}. You lose a point.`
        } else {
            return `Computer chose ${computer_selection}. You got a point.`
        }
    };

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

   console.log(singleRound(computer_selection, player_selection))
   scoreCounter(computer_selection, player_selection)
   
};

// Basic game loop - looping until one of the players reaches 5 points
function gameLoop () {
    while (player_score <= 4 && computer_score <= 4) {
        game()
        console.log(`Player score: ${player_score}; Computer score: ${computer_score}`)

        if (player_score == 5) {
            return console.log('Player won');
        } else if (computer_score == 5) {
            return console.log(`Computer won`);
        } else {
            ;
        }
    } 
    
};

gameLoop();
