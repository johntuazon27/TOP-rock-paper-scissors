 const choices = ["rock", "paper", "scrissors"]
 const humanScore = 0
 const computerScore = 0
 
 function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
 }

 console.log(getComputerChoice())

 function getHumanChoice() {
    humanChoice = prompt()
    return humanChoice
 }

console.log(getHumanChoice())