
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const resetButton = document.getElementById("reset");

const message = document.getElementById("message");

const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");

const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");


let playerScore = 0;
let computerScore = 0;
let round = 0;

const totalRounds = 5;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    const randomIndex = Math.floor(
        Math.random() * choices.length
    );
    return choices[randomIndex];
}

function checkwinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    }
    return "computer";
}

function playGame(playerChoice) {

    if(round >= totalRounds){
        return;
    }
    round++;
    const computerChoice = getComputerChoice();
    const winner = checkwinner(playerChoice, computerChoice);

    playerChoiceText.textContent = `You: ${playerChoice}`;
    computerChoiceText.textContent = `Computer: ${computerChoice}`;

    if (winner === "draw") {
        message.textContent = "🤝 This round is a draw!";
    }
    else if (winner === "player") {
        playerScore++;
        message.textContent = "🎉 You won this round!";
    }   
    else {
        computerScore++;
        message.textContent = "😢 Computer won this round!";
    }

    playerScoreText.textContent = `Your Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;

    if(round === totalRounds){
        endGame();
    }
}

function endGame() {

    
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (playerScore > computerScore) {
        message.textContent =
            `🏆 YOU WON THE GAME! ${playerScore} - ${computerScore}`;
    }
    else if (computerScore > playerScore) {
        message.textContent =  
            `🤖 COMPUTER WON THE GAME! ${computerScore} - ${playerScore}`;
    }
    else { 
        message.textContent =
            `🤝 GAME DRAW! ${playerScore} - ${computerScore}`;
}


}

rockButton.addEventListener("click", function () {

    playGame("rock");

});


paperButton.addEventListener("click", function () {

    playGame("paper");

});


scissorsButton.addEventListener("click", function () {

    playGame("scissors");

});


resetButton.addEventListener("click", function () {

    playerScore = 0;
    computerScore = 0;
    round = 0;

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    playerChoiceText.textContent = "You: -";

    computerChoiceText.textContent = "Computer: -";

    playerScoreText.textContent = "Your Score: 0";

    computerScoreText.textContent =
        "Computer Score: 0";

    message.textContent =
        "Round 1 of 5 — Make your choice!";

});