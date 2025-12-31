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
function playRound(humanChoice, computerChoice) {

    switch(humanChoice) {

        case "rock":

            if(computerChoice === "rock")
                return "draw";
                
            else if(computerChoice === "paper") {

                computerScore++;
                return "lose";
            }

            else {

                humanScore++;
                return "win";
            }

            break;


        case "paper":

            if(computerChoice === "rock") {

                humanScore++;
                return "win";
            }
                
            else if(computerChoice === "paper") 
                return "draw";
                
            else {

                computerScore++;
                return "lose";
            }

            break;


        default:

            if(computerChoice === "rock") {

                computerScore++;
                return "lose";
            }
                
            else if(computerChoice === "paper") {

                humanScore++;
                return "win";
            }

            else 
                return "draw!";
        }
}

let humanScore = 0, computerScore = 0;

//rps options
const rockImage = document.querySelector("#rock");
const paperImage = document.querySelector("#paper");
const scissorsImage = document.querySelector("#scissors");

//scores
const warriorParagraph = document.querySelector("#warriorPara");
const dragonParagraph = document.querySelector("#dragonPara");

rockImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "rock";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const text = "Warrior " + humanScore.toString();

        warriorParagraph.textContent = text;
    }

    if(playerRound === "lose") {

        const text = "Dragon: " + computerScore.toString();

        dragonParagraph.textContent = text;
    }

});

paperImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "paper";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const text = "Warrior " + humanScore.toString();

        warriorParagraph.textContent = text;
    }

    if(playerRound === "lose") {

        const text = "Dragon: " + computerScore.toString();

        dragonParagraph.textContent = text;
    }
    
});

scissorsImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "scissors";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const text = "Warrior " + humanScore.toString();

        warriorParagraph.textContent = text;
    }

    if(playerRound === "lose") {

        const text = "Dragon: " + computerScore.toString();

        dragonParagraph.textContent = text;
    }
    
});



