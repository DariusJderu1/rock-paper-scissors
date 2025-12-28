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

