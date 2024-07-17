 const choices = ["rock", "paper", "scrissors"]
 
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