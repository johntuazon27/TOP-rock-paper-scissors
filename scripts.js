const choices = ["ROCK", "PAPER", "SCISSORS"]
let humanScore = 0
let computerScore = 0


function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * choices.length)
    console.log(`COMPUTER CHOSE:${choices[randomIndex]}`)
    return choices[randomIndex]
}



function getHumanChoice() {
    let humanChoice = prompt("PICK ONE BETWEEN: ROCK, PAPER, SCISSORS")
    let isCorrectInput = false
    while (isCorrectInput == false) {
        if (humanChoice.toUpperCase() == "ROCK" || humanChoice.toUpperCase() == "PAPER" || humanChoice.toUpperCase() == "SCISSORS") {
            isCorrectInput = true
        } else {
            console.log("WRONG INPUT. PLEASE TRY AGAIN.")
            humanChoice = prompt("PICK ONE BETWEEN: ROCK, PAPER, SCISSORS")
        }
    } 
    console.log(`YOU CHOSE: ${humanChoice.toUpperCase()}`)
    return humanChoice.toUpperCase()
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice ==  computerChoice) {
        console.log("RESULT: DRAW!")
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore++
        console.log("YOU WIN!") 
    }else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        humanScore++
        console.log("YOU WIN!") 
    }else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore++
        console.log("YOU WIN!") 
    } else {
        computerScore++
        console.log("YOU LOSE!")
    }
    console.log(`CURRENT SCORE\nYOU:${humanScore}\nCOMPUTER:${computerScore}`)
}

function playGame () {
    playRound(getHumanChoice(), getComputerChoice())
    isGameOn = true
    while(isGameOn){
        let keepPlaying = prompt("Continue playing? [Y] for yes and [N] for no.")
        if ( keepPlaying == "") {
            console.log("WRONG INPUT. PLEASE TRY AGAIN.")
        } else if (keepPlaying.toUpperCase() == "N") {
            isGameOn = false
        } else {
            playRound(getHumanChoice(), getComputerChoice())
        }
    }
    console.log("\n\nTHANK YOU FOR PLAYNG!")
}

playGame()