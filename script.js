// console.log("test");

// Pseude code:
// The computer has to make a choice
// There are three opties: rock paper or scissors
// The choice is completely random
// The user is prompted to input their choice.
// The program compares choices and output a the result 
// there is no GUI, everything happens in console

let computersays = Math.floor(Math.random() * 3);

console.log(computersays)

let computerresult;
    if (computersays == 0) {
        computerresult = "Rock";
    } else if (computersays == 1) {
        computerresult = "Paper";
    } else if (computersays == 2) {
        computerresult = "Scissors";
    }

let userresult = prompt("Rock Paper Scirrors?")

console.log("the computer chose " + computerresult + " and the player chose " + userresult )
