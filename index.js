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

function winOrLoseCheck() {

    if(humanScore === 5) {

        alert("You won!");

        winOrLoseHeader.textContent = "Choose your weapon";
        roundDescriptionHeader.textContent = "First to score 5 points wins";

        warriorParagraph.textContent = "Warrior: ";
        dragonParagraph.textContent = "Dragon: ";

        humanScore = 0;
        computerScore = 0;
    }

    else if(computerScore === 5) {

        alert("You lost!");

        winOrLoseHeader.textContent = "Choose your weapon";
        roundDescriptionHeader.textContent = "First to score 5 points wins";

        warriorParagraph.textContent = "Warrior: ";
        dragonParagraph.textContent = "Dragon: ";

        humanScore = 0;
        computerScore = 0;
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

        const paragraphText = "Warrior: " + humanScore.toString();
        const h2Text = "You win!";
        const h3Text = "Rock beats Scissors";

        warriorParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

    else if(playerRound === "lose") {

        const paragraphText = "Dragon: " + computerScore.toString();
        const h2Text = "You lose!";
        const h3Text = "Paper beats Rock";

        dragonParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

    else {

        const h2Text = "Draw!";
        const h3Text = "Rock ties with Rock";

        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

});


paperImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "paper";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const paragraphText = "Warrior: " + humanScore.toString();
        const h2Text = "You win!";
        const h3Text = "Paper beats Rock";

        warriorParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

    else if(playerRound === "lose") {

        const paragraphText = "Dragon: " + computerScore.toString();
        const h2Text = "You lose!";
        const h3Text = "Scissors beats Paper";

        dragonParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

    else {

        const h2Text = "Draw!";
        const h3Text = "Paper ties with Paper";

        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

});


scissorsImage.addEventListener("click", () => {

    const computerChoice = getComputerChoice();
    const humanChoice = "scissors";
    const playerRound = playRound(humanChoice, computerChoice);

    if(playerRound === "win") {

        const paragraphText = "Warrior: " + humanScore.toString();
        const h2Text = "You win!";
        const h3Text = "Scissors beats Paper";

        warriorParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

    else if(playerRound === "lose") {

        const paragraphText = "Dragon: " + computerScore.toString();
        const h2Text = "You lose!";
        const h3Text = "Rock beats Scissors";

        dragonParagraph.textContent = paragraphText;
        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

    else {

        const h2Text = "Draw!";
        const h3Text = "Scissors ties with Scissors";

        winOrLoseHeader.textContent = h2Text;
        roundDescriptionHeader.textContent = h3Text;

        winOrLoseCheck();
    }

});

