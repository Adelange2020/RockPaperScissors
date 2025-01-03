let humanScore = 0;
let computerScore = 0;
let rounds = 0;


function game() {
    let human = "";
    let computer = "";
    do {
        human = getHumanChoice();
        computer = getComputerChoice();
        if (human == computer) {
            alert("Its a draw, please play again");
        }
        else
        {
            if (human == "rock" && computer == "paper")
            {
                computerScore++;
                rounds++;
                console.log("Computer had "+computer+" and has "+computerScore+ " points now.");
                
            }
            if (human == "sissors" && computer == "paper")
            {
                humanScore++;
                rounds++;
                console.log("Human had "+human+"  and has "+humanScore+ " points now.");
            }
            if (human == "paper" && computer == "scissors")
            {
                computerScore++;
                rounds++;
                console.log("Computer had "+computer+" and has "+computerScore+ " points now.");
                
            }
            if (human == "sissors" && computer == "paper")
            {
                humanScore++;
                rounds++;
                console.log("Human had "+human+"  and has "+humanScore+ " points now.");
            }
        }
    } while (rounds < 5)
    console.log("Game over.\nComputer: "+computerScore+ "\nHuman: "+humanScore);
}

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