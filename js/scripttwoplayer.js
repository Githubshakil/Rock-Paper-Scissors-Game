let start = document.querySelector(".start");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let Scissors = document.querySelector(".Scissors");
let rock2 = document.querySelector(".rock2");
let paper2 = document.querySelector(".paper2");
let Scissors2 = document.querySelector(".Scissors2");
let heading = document.querySelector("h1");
let btngroup = document.querySelector(".btngroup");
let btngroup2 = document.querySelector(".btngroup2");


let playerOneResult = ""

start.addEventListener("click", function () {
  heading.innerHTML = "Player One";
  start.style.display = "none";
  btngroup.style.display = "block";
});

const Choices = ["rock", "paper", "Scissors"];

// function getComputerChoice() {
//   const randomIndex = Math.floor(Math.random() * Choices.length);
//   return Choices[randomIndex];
// }

function determineWinner(playerChoice, playerChoice2) {
  if (playerChoice === playerChoice2) {
    return "It's a tie!";
  }
  if (
    (playerChoice === "rock" && playerChoice2 === "Scissors") ||
    (playerChoice === "Scissors" && playerChoice2 === "paper") ||
    (playerChoice === "paper" && playerChoice2 === "rock")
  ) {
    return "Player1 win!";
  }
  return "Player2 win!";
}

function playGame(playerChoice, playerChoice2){
    // const ComputerChoice = getComputerChoice();
    
    const winner = determineWinner(playerChoice, playerChoice2);
    heading.innerHTML = `You picked: ${playerChoice},<br/> computer picked: ${playerChoice2}.<br/> ${winner}`;
}

rock.addEventListener("click", function () {
    playerOneResult = "rock"
    heading.innerHTML = "Player Two";
    btngroup.style.display = "none";
    btngroup2.style.display = "block";
//   playGame("rock");
});

paper.addEventListener("click", function () {
    playerOneResult = "paper"
    heading.innerHTML = "Player Two";
    btngroup.style.display = "none";
    btngroup2.style.display = "block";
//   playGame("paper");
});

Scissors.addEventListener("click", function () {    
    playerOneResult = "Scissors"
    heading.innerHTML = "Player Two";
    btngroup.style.display = "none";
    btngroup2.style.display = "block";
//   playGame("Scissors");
});

rock2.addEventListener("click", function () {
    playGame(playerOneResult, "rock");
    
});

paper2.addEventListener("click", function () {
    playGame(playerOneResult, "paper");
    
});

Scissors2.addEventListener("click", function () {    
    playGame(playerOneResult, "Scissors");
    
});
