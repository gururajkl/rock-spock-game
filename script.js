import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissor");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");
const resultText = document.getElementById("ResultText");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

//To remove the selected class from .far
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
}

//Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "it's Tie";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = "You Won!";
      playerScoreNumber += 1;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "Computer Wins!";
      computerScoreNumber += 1;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

//calls the fn and finds which turn it is...
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

//reset everything
function resetAll() {
  resultText.textContent = "Result goes here";
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resetSelected();
}

window.resetAll = resetAll;

//detect the cs choice and update the ui
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = ` --- ${computerChoice.toUpperCase()}`;
      break;

    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = ` --- ${computerChoice.toUpperCase()}`;
      break;

    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = ` --- ${computerChoice.toUpperCase()}`;
      break;

    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = ` --- ${computerChoice.toUpperCase()}`;
      break;

    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = ` --- ${computerChoice.toUpperCase()}`;
      break;

    default:
      break;
  }
}

//Passing player choice value and styling the icons
function select(playerChoice) {
  checkResult(playerChoice);
  //add selected class to the respected choice and update the choice text too
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = ` --- ${playerChoice.toUpperCase()}`;
      break;

    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = ` --- ${playerChoice.toUpperCase()}`;
      break;

    case "scissors":
      playerScissor.classList.add("selected");
      playerChoiceEl.textContent = ` --- ${playerChoice.toUpperCase()}`;
      break;

    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = ` --- ${playerChoice.toUpperCase()}`;
      break;

    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = ` --- ${playerChoice.toUpperCase()}`;
      break;

    default:
      break;
  }
}

//to make it as globally available, bcz i used module type in html
window.select = select;

//onloading the page
resetAll();
