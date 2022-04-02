let paragraphElement = document.getElementById("paragraphElement")
let divElement = document.getElementById("divElement")

function cementColor() {
    paragraphElement.textContent = "Background Color: #e0e0e0"
    divElement.style.backgroundColor = "#e0e0e0"
    document.getElementById("cementColor").style.backgroundColor = "#e0e0e0"
    document.getElementById("greenColor").style.backgroundColor = "#ffffff"
    document.getElementById("blueColor").style.backgroundColor = "#ffffff"
    document.getElementById("roseColor").style.backgroundColor = "#ffffff"
}


function greenColor() {
    paragraphElement.textContent = "Background Color: #6fcf97"
    divElement.style.backgroundColor = "#6fcf97"
    document.getElementById("greenColor").style.backgroundColor = "#6fcf97"
    document.getElementById("cementColor").style.backgroundColor = "#ffffff"
    document.getElementById("blueColor").style.backgroundColor = "#ffffff"
    document.getElementById("roseColor").style.backgroundColor = "#ffffff"
}


function blueColor() {
    paragraphElement.textContent = "Background Color: #56ccf2"
    divElement.style.backgroundColor = "#56ccf2"
    document.getElementById("blueColor").style.backgroundColor = "#56ccf2"
    document.getElementById("greenColor").style.backgroundColor = "#ffffff"
    document.getElementById("cementColor").style.backgroundColor = "#ffffff"
    document.getElementById("roseColor").style.backgroundColor = "#ffffff"
}


function roseColor() {
    paragraphElement.textContent = "Background Color: #bb6bd9"
    divElement.style.backgroundColor = "#bb6bd9"
    document.getElementById("roseColor").style.backgroundColor = "#bb6bd9"
    document.getElementById("greenColor").style.backgroundColor = "#ffffff"
    document.getElementById("cementColor").style.backgroundColor = "#ffffff"
    document.getElementById("blueColor").style.backgroundColor = "#ffffff"
}
