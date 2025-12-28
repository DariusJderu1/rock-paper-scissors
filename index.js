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

console.log(getHumanChoice());

