const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let result;

const choices = [
  'rock',
  'paper',
  'scissors',
]


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult () {
  if (computerChoice == userChoice) {
    result = 'its a draw';
  } else if((computerChoice == "rock" && userChoice == "paper") ||
     (computerChoice == "paper" && userChoice == "scissors") ||
     (computerChoice == "scissors" && userChoice == "rock")
  ) {
    result = 'you won!';
  } else {
    result = 'you lost!'
  }
  console.log(computerChoice)
  console.log(userChoice)

  resultDisplay.innerHTML = result;
}