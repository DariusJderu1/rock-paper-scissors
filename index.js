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
                return "draw";
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

//descriptions
const winOrLoseHeader = document.querySelector("#win-or-lose");
const roundDescriptionHeader = document.querySelector("#round-description");

rockImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "rock";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const paragraphText = "Warrior " + humanScore.toString();
        const h2Text = "You win!";
        const h3Text = "Rock beats Scissors";

        warriorParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

    if(playerRound === "lose") {

        const paragraphText = "Dragon: " + computerScore.toString();
        const h2Text = "You lose!";
        const h3Text = "Paper beats Rock";

        dragonParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

    if(playerRound === "draw") {

        const h2Text = "Draw!";
        const h3Text = "Rock ties Rock";

        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

});


paperImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "paper";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const paragraphText = "Warrior " + humanScore.toString();
        const h2Text = "You win!";
        const h3Text = "Paper beats Rock";

        warriorParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

    if(playerRound === "lose") {

        const paragraphText = "Dragon: " + computerScore.toString();
        const h2Text = "You lose!";
        const h3Text = "Scissors beats Paper";

        dragonParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

    if(playerRound === "draw") {

        const h2Text = "Draw!";
        const h3Text = "Paper ties Paper";

        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

});


scissorsImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "scissors";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const paragraphText = "Warrior " + humanScore.toString();
        const h2Text = "You win!";
        const h3Text = "Scissors beats Paper";

        warriorParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

    if(playerRound === "lose") {

        const paragraphText = "Dragon: " + computerScore.toString();
        const h2Text = "You lose!";
        const h3Text = "Rock beats Scissors";

        dragonParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

    if(playerRound === "draw") {

        const h2Text = "Draw!";
        const h3Text = "Scissors ties Scissors";

        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;
    }

});

