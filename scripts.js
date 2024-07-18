const choices = ["ROCK", "PAPER", "SCISSORS"]
let humanScore = 0
let computerScore = 0


function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * choices.length)
    console.log(choices[randomIndex])
    return choices[randomIndex]
}



function getHumanChoice() {
    humanChoice = prompt()
    console.log(humanChoice.toUpperCase())
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

playRound(getHumanChoice(), getComputerChoice())