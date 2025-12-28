function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {

        case 0:
            return "rock";

        case 1:
            return "paper";

        default:
            return "scissors";
    }
}

function getHumanChoice() {

    return prompt("Please enter one of these 3 values: rock, paper, scissors");
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice) {

        case "rock":

            if(computerChoice === "rock")
                console.log("Draw!");
            
            else if(computerChoice === "paper") {

                computerScore++;
                console.log("You lose! Paper beats Rock.");
            }

            else {

                humanScore++;
                console.log("You win! Rock beats scissors.");
            }

            break;


        case "paper":

            if(computerChoice === "rock") {

                humanScore++;
                console.log("You win! Paper beats rock.");
            }
            
            else if(computerChoice === "paper") 
                console.log("Draw!");
            
            else {

                computerScore++;
                console.log("You lose! Scissors beats Paper.");
            }

            break;


        default:

            if(computerChoice === "rock") {

                computerScore++;
                console.log("You lose! Rock beats Scissors.");
            }
            
            else if(computerChoice === "paper") {

                humanScore++;
                console.log("You win! Scissors beats paper.");
            }

            else 
                console.log("Draw!");
    }
}

let humanScore = 0, computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

