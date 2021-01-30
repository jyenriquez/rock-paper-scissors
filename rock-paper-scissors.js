function computerPlay() {
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

function playRound(playerSelection, computerSelection) {
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

let playerSelection = prompt("Rock, paper, or scissors?");
alert(playRound(playerSelection, computerPlay()));


