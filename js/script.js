let start = document.querySelector(".start");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let Scissors = document.querySelector(".Scissors");
let heading = document.querySelector("h1");
let btngroup = document.querySelector(".btngroup");

start.addEventListener("click", function () {
  heading.innerHTML = "Choose your One";
  start.style.display = "none";
  btngroup.style.display = "block";
});

const Choices = ["rock", "paper", "Scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * Choices.length);
  return Choices[randomIndex];
}

function determineWinner(playerChoice, ComputerChoice) {
  if (playerChoice === ComputerChoice) {
    return "It's a tie!";
  }
  if (
    (playerChoice === "rock" && ComputerChoice === "Scissors") ||
    (playerChoice === "Scissors" && ComputerChoice === "paper") ||
    (playerChoice === "paper" && ComputerChoice === "rock")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

function playGame(playerChoice) {
  const ComputerChoice = getComputerChoice();

  const winner = determineWinner(playerChoice, ComputerChoice);
  heading.innerHTML = `You picked: ${playerChoice},<br/> computer picked: ${ComputerChoice}.<br/> ${winner}`;
}

rock.addEventListener("click", function () {
  playGame("rock");
});

paper.addEventListener("click", function () {
  playGame("paper");
});

Scissors.addEventListener("click", function () {
  playGame("Scissors");
});
