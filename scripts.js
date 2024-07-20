const choices = ["ROCK", "PAPER", "SCISSORS"]
let humanScore = 0
let computerScore = 0

// GENERATE RANDOM HAND FOR THE COMPUTER
function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * choices.length)
    console.log(`COMPUTER CHOSE:${choices[randomIndex]}`)
    return choices[randomIndex]
}

function getHumanChoice() {
    let humanChoice = prompt("PICK ONE BETWEEN: ROCK, PAPER, SCISSORS")
    let isCorrectInput = false
    while (isCorrectInput == false) {
        // CHECK FIRST IF THE INPUT IT NULL
        if (humanChoice == null) { 
            console.log("WRONG INPUT. PLEASE TRY AGAIN.")
            humanChoice = prompt("PICK ONE BETWEEN: ROCK, PAPER, SCISSORS")
        // CHECK IF THE USER INPUT IS ROCK, PAPER, SCISSORS
        } else if (humanChoice.toUpperCase() == "ROCK" || humanChoice.toUpperCase() == "PAPER" || humanChoice.toUpperCase() == "SCISSORS") {
            isCorrectInput = true
        }else {
            console.log("WRONG INPUT. PLEASE TRY AGAIN.")
            humanChoice = prompt("PICK ONE BETWEEN: ROCK, PAPER, SCISSORS")
        }
    } 
    console.log(`YOU CHOSE: ${humanChoice.toUpperCase()}`)
    return humanChoice.toUpperCase()
}

// THE MAIN MIND BEHIND THE GAME
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

// PUT THE GAME ON LOOP TO KEEP ON PLAYING
function playGame () {
    // CALL THE playRound FUNCTION
    playRound(getHumanChoice(), getComputerChoice())
    isGameOn = true
    while(isGameOn){
        // ASK USER IF WANT TO CONTINUE PLAYING
        let keepPlaying = prompt("Continue playing? [Y] for yes and [N] for no.")
        // VALIDATE THE INPUT OF THE USER IF ITS NULL OR WRONG INPUT
        if ( keepPlaying == null || (keepPlaying.toUpperCase() != "N" && keepPlaying.toUpperCase() != "Y")) {
            console.log("WRONG INPUT. PLEASE TRY AGAIN.")
        } else if (keepPlaying.toUpperCase() == "N") {
            isGameOn = false
        } else {
            // IT INPUT IS Y, CALL THEN playRound AGAIN TO CONTINUE PLAYING
            playRound(getHumanChoice(), getComputerChoice())
        }
    }
    // EXIT THE PROGRAM WHEN THE USER ENTERS N
    console.log("\n\nTHANK YOU FOR PLAYNG!")
}

// CALL THE playGame FUNCTION TO START THE GAME
playGame()