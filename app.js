let playerScore = 0
let computerScore = 0



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


// a function that takes the player's input, compares it with the random computer generated value and returs a message

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beat Paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You Win! Scissors beat Paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors'
    }  else {
        return 'It\'s a tie! Try again!'
    } 
  }
  

  //I'll now write a new function called game(), that keeps score

  function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Make your choice!', 'Rock, Paper, Scissors')
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore){
        return 'You win!'
    } else if (playerScore < computerScore){
        return 'Game over! You Lose!'
    } else {
        return 'It\'s a tie!'
    }
  }

  // calling the game() function

  console.log(game());





  






