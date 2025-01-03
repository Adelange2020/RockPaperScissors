
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

game();

function game() {
    let human = "";
    let computer = "";

    do {
        human = getHumanChoice();
        computer = getComputerChoice();
    } while (rounds < 5) 
        
    }

    if (human == computer) {
        console.log("its a draw, please play again");
    } else if ((human == "rock" && computer == "paper")(human == "scissors" && computer == "rock")) {
        rounds++;
        computerScore++;
    }else {
        rounds++;
        humanScore++;
    }

console.log("computer: " + computer + " VS " + human)


function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let choice = prompt("Enter rock, paper or scissors").toLowerCase()
    return choice;

}
