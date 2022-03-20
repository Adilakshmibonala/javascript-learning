let paragraphElement = document.getElementById("paragraphElement")


function onIncrement() {
    let previousCounterValue = paragraphElement.textContent
    let updatedCounterValue;
    updatedCounterValue = parseInt(previousCounterValue) + 1;
    paragraphElement.textContent = updatedCounterValue
    updateCounterColor(updatedCounterValue)
}

function onDecrement() {
    let previousCounterValue = paragraphElement.textContent
    let updatedCounterValue;
    updatedCounterValue = previousCounterValue - 1;
    paragraphElement.textContent = updatedCounterValue
    updateCounterColor(updatedCounterValue)
}

function onReset() {
    paragraphElement.textContent = 0
    paragraphElement.style.color = "black"
}


function updateCounterColor(updatedCounterValue) {
    if (updatedCounterValue > 0) {
        paragraphElement.style.color = "green"
    }
    else if (updatedCounterValue < 0) {
        paragraphElement.style.color = "red"
    }
    else {
        paragraphElement.style.color = "black"
    }
}