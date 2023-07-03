let playerScore = 0
let compScore = 0

// all of my querySelectors
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');


// a function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'


function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)

    if (random === 0) {
    return 'rock'
} else if (random === 1){
    return 'paper'
} else if (random === 2){
    return 'scissors'
}
}


// a function that takes the player's input, compares it with the random computer generated value and returns a message

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        compScore++;
        const p = document.createElement('p');
        p.innerText = `You Lose! You picked ${playerSelection}!`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = `You Win! You picked ${playerSelection}!`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = `You Win! You picked ${playerSelection}!`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        compScore++;
        const p = document.createElement('p');
        p.innerText = `You Lose! You picked ${playerSelection}!`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = `You Win! You picked ${playerSelection}!`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        compScore++;
        const p = document.createElement('p');
        p.innerText = `You Lose! You picked ${playerSelection}!`;
        outcomeDiv.appendChild(p);
    }  else {
        const p = document.createElement('p');
        p.innerText = `It's a tie! You picked ${playerSelection}! Try again!`;
        outcomeDiv.appendChild(p);
    } 
  }
  

  //I'll now write a new function called game(), that keeps score

 // function game(){
 //   for (let i = 0; i < 5; i++){
 //       const playerSelection = prompt('Make your choice!', 'Rock, Paper, Scissors')
 //       const computerSelection = getComputerChoice();
 //       console.log(playRound(playerSelection, computerSelection));
 //   }

 //   if (playerScore > computerScore){
 //       return 'You win!'
 //   } else if (playerScore < computerScore){
 //       return 'Game over! You Lose!'
 //   } else {
 //       return 'It\'s a tie!' 
 //   }
 // }

  // calling the game() function

 // console.log(game());


// a function that checks for the winner of the game
 const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `Congratulations, you won ${playerScore} to ${computerScore}!`;
        outcomeDiv.appendChild(h2);

        
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `Snap, you lost ${playerScore} to ${computerScore}. Better luck next time!`;
        outcomeDiv.appendChild(h2);
        
    }
};

// a function that updates the score

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
 };


// three Event Listener blocks (one for each button)


rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection); 
    checkForWinner(playerScore, compScore);
    updateScores(playerScore, compScore); 
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore); 
    updateScores(playerScore, compScore);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection); 
    checkForWinner(playerScore, compScore);
    updateScores(playerScore, compScore); 
});