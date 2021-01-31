
let playerWins = 0;
let computerWins = 0;
for(let i=0; i<5; i++){
    let playerSelection = prompt(`Round ${i+1}:\n Rock, paper, or scissors?`);
    alert(game(playerSelection) + `\n Player Wins: ${playerWins} Computer Wins: ${computerWins}`);
}

if(playerWins > computerWins) {
    alert("You won :) Congratulations!");
} else if (playerWins < computerWins) {
    alert("You lost :( Sorry!");
} else {
    alert("It's a tie! :o");
}

function computerPlay() { //returns a string
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) { //Takes in 2 Strings, returns a string
    let roundMessage;
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        roundMessage = "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        roundMessage = "You Lose! Paper beats rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundMessage = "You win! Rock beats paper";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        roundMessage = "You win! Paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundMessage = "You Lose! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundMessage = "You Lose! Rock beats scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundMessage = "You win! Scissors beats paper";
    }

    return roundMessage;
}

function game(playerSelection) { //Takes in a string, returns a string
    let roundMessage = playRound(playerSelection, computerPlay());
    if(roundMessage == "You win! Rock beats paper" || roundMessage == "You win! Paper beats rock"
    || roundMessage == "You win! Scissors beats paper") {
        playerWins+=1;
    } else if (roundMessage != "It's a tie!") {
        computerWins+=1;
    }
    return roundMessage;
}



