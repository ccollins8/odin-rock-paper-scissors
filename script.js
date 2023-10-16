
let playerScore = 0;
let computerScore = 0;

const body = document.querySelector('body')
const buttons = document.querySelectorAll('button')
const results = document.querySelector('.results');
const score = document.querySelector('.score')



function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    // console.log(number);
    if (number == 0) {
        return "Rock";
    } else if (number == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection,computerSelection = getComputerChoice()) {
    if (playerSelection.toLowerCase() == "rock"
    && computerSelection.toLowerCase() == "scissors") {
        playerScore++;
        results.textContent = "Rock beats scissors! You Won!"
    } else if (playerSelection.toLowerCase() == "rock"
    && computerSelection.toLowerCase() == "paper") {
        computerScore++;
        results.textContent = "Paper beats rock. You Lose!"
    } else if (playerSelection.toLowerCase() == "paper"
    && computerSelection.toLowerCase() == "rock") {
        playerScore++;
        results.textContent = "Paper beats rock! You Won!"
    } else if (playerSelection.toLowerCase() == "paper"
    && computerSelection.toLowerCase() == "scissors") {
        computerScore++;
        results.textContent = "Scissors beats paper. You Lose!"
    } else if (playerSelection.toLowerCase() == "scissors"
    && computerSelection.toLowerCase() == "rock") {
        computerScore++;
        results.textContent = "Rock beats scissors! You Lose!"
    } else if (playerSelection.toLowerCase() == "scissors"
    && computerSelection.toLowerCase() == "paper") {
        playerScore++;
        results.textContent = "Scissors beats paper. You Won!"
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        results.textContent = "Draw!"
    } else {
        results.textContent = "Incorrect input!"
    }

    score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`


    if (playerScore == 5) {
        results.textContent = "You won the game!"
        resetScore()
    } else if (computerScore == 5) {
        results.textContent = "You lost the game!"
        resetScore();
    }

}

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        return playRound(playerSelection)
    })

})

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}








