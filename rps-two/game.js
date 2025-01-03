// variables

// functions

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("To play enter Rock, Paper or Scissors");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase;

    if ((choice != "Rock") && (choice != "Paper") && (choice != "Scissors"))
        return alert("Incorrent entry")
    else {
        break
    }
}


console.log(getComputerChoice())
getHumanChoice()