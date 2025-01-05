const containerElement = document.querySelector('.container');

const careers = ["Computer Science Student", "Chemical Engineer", "Nuclear Scientist"]

let careerIndex = 0;
let characterIndex = 0;

updateText();
document.body.addEventListener("click", userClicked);

function userClicked(){
    characterIndex = careers[careerIndex].length;
    containerElement.innerHTML = `<h1>I am a ${careers[careerIndex].substring(0, characterIndex)}</h1>`
}

function updateText(){

    characterIndex++;

    containerElement.innerHTML = `<h1>I am a ${careers[careerIndex].substring(0, characterIndex)}</h1>`;

    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    };

    if(careerIndex === careers.length){
        careerIndex = 0;
    };

    setTimeout(updateText, 70);
}

