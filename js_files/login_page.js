function signIn() {
    let enteredUserName = document.getElementById("userNameInput")
    let verifyAccountTextElement = document.getElementById("signInText")
    verifyAccountTextElement.textContent = "Hi " + enteredUserName.value + ", verifying your account."
}