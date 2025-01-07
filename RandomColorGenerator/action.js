const containerElement = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
    const colorContainElement = document.createElement("div");
    colorContainElement.classList.add("color-container");
    containerElement.appendChild(colorContainElement);
}


function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor((Math.random() * chars.length));
        colorCode += chars[randomNumber];
    }
    return colorCode;
}

const colorContainElements = document.querySelectorAll(".color-container");



function generateColors() {
    colorContainElements.forEach((colorContainElement) =>{
        const newColorCode = randomColor();
        colorContainElement.style.backgroundColor = "#" + newColorCode;
        colorContainElement.innerHTML = "#" + newColorCode;
    })
}


generateColors();