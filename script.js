let tie = 0;
let playerWins = 0;
let computerWins = 0;
let buttons = document.querySelectorAll("button");
let winner = document.querySelector(".winner");

function computerPlay() {
  const arr = ["Paper", "Rock", "Scissors"];
  let selection = arr[Math.floor(Math.random() * arr.length)];
  return selection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Paper" && computerSelection === "Rock") {
    ++playerWins;
    return `Paper Beats Rock! You Win This Round! You've Won ${playerWins} rounds & Lost ${computerWins} rounds!`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    ++playerWins;
    return `Rock Beats Scissorss! You Win This Round! You've Won ${playerWins} rounds & Lost ${computerWins} rounds!`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    ++playerWins;
    return `Scissors Beats Paper! You Win This Round! You've Won ${playerWins} rounds & Lost ${computerWins} rounds!`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    ++computerWins;
    return `Paper Beats Rock! You Lose This Round! You've Won ${playerWins} rounds & Lost ${computerWins} rounds!`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    ++computerWins;
    return `Rock Beats Scissors! You Lose This Round! You've Won ${playerWins} rounds & Lost ${computerWins} rounds!`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    ++computerWins;
    return `Scissors Beats Paper! You Lose This Round! You've Won ${playerWins} rounds & Lost ${computerWins} rounds!`;
  } else if (playerSelection === computerSelection) {
    ++tie;
    return `Tie! You've Won ${playerWins} rounds & Lost ${computerWins} rounds!`;
  } else {
    return `Please enter Paper, Rock or Scissors`;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // for(let i = 0; i < 6; i++) {
    if(playerWins < 5 && computerWins < 5) {
      let playerSelection = button.innerText;
      let computerSelection = computerPlay();
      winner.textContent = playRound(playerSelection,computerSelection);
    }
  });
});