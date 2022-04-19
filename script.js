let tie = 0;
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
  const arr = ["Paper", "Rock", "Scissors"];
  let selection = arr[Math.floor(Math.random() * arr.length)];
  return selection;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === "PAPER" && computerSelection === "ROCK") {
    ++playerWins;
    return `You Win! Paper beats Rock`;
    
  }
  else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    ++playerWins;
    return `You Win! Rock beats Scissorss`;
  }
   else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    ++playerWins;
    return `You Win! Scissors beats Paper`;
  }
   else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
    ++computerWins;
    return `You Lose! Paper beats Rock`;
  }
   else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    ++computerWins;
    return `You Lose! Rock beats Scissors`;
  }
   else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    ++computerWins;
    return `You Lose! Scissors beats Paper`;
  }
  else if(playerSelection === computerSelection) {
    ++tie;
    return `Tie`;
  }
  else {
    return `Please enter Paper, Rock or Scissors`;
  }
}

function game() {
  for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors");
    let computerSelection = computerPlay();
    console.log(`Player selects ${playerSelection}`);
    console.log(`Computer selects ${computerSelection}`);
    console.log(playRound(playerSelection.toUpperCase(),         computerSelection.toUpperCase()));
  }
  console.log(`Player won ${playerWins} rounds & Computer won ${computerWins} rounds`)
  if(playerWins > computerWins) {
    console.log(`Player Wins!`);
  }
  else if(playerWins < computerWins) {
    console.log(`Computer Wins!`);
  }
  else {
    console.log(`Tie!`);
  }
}

game();