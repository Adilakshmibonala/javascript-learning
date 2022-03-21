let randomNumber = Math.ceil(Math.random() * 100)

function checkGuessedNumber() {
    let guessedNumber = parseInt(document.getElementById("guessedNumber").value)
    let responseMessageElement = document.getElementById("gameResult")
    if (guessedNumber > randomNumber) {
        responseMessageElement.textContent = "Too High! Try Again"
        responseMessageElement.style.backgroundColor = "blue"
    }
    else if (guessedNumber < randomNumber) {
        responseMessageElement.textContent = "Too Low! Try Again"
        responseMessageElement.style.backgroundColor = "blue"
    }
    else if (guessedNumber === randomNumber) {
        responseMessageElement.textContent = "Congratulations! You Got It Right"
        responseMessageElement.style.backgroundColor = "green"
    }
    else {
        responseMessageElement.textContent = "Please Provide A Valid Input"
        responseMessageElement.style.backgroundColor = "red"
    }
}
