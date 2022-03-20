function onButton() {
    let document_object = document.getElementById("onButtonElement")
    document_object.style.backgroundColor = "green"

    let off_button_doc_obj = document.getElementById("offButtonElement")
    off_button_doc_obj.style.backgroundColor = "white"

    let heading_doc_obj = document.getElementById("headingElement")
    heading_doc_obj.textContent = "Switch On"

    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"

    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
}

function offButton() {
    let document_object = document.getElementById("offButtonElement")
    document_object.style.backgroundColor = "red"

    let on_button_doc_obj = document.getElementById("onButtonElement")
    on_button_doc_obj.style.backgroundColor = "white"

    let heading_doc_obj = document.getElementById("headingElement")
    heading_doc_obj.textContent = "Switch Off"

    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"

    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
}