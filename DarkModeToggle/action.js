const inputElement = document.querySelector(".input");
const bodyElement = document.querySelector("body");

inputElement.checked = JSON.parse(localStorage.getItem("mode"))
updateBody();

function updateBody(){
    if(inputElement.checked){
        bodyElement.style.backgroundColor = "#11212D";
    } else {
        bodyElement.style.backgroundColor = "#9ba8ab";
    }
}

inputElement.addEventListener("click", () => {
    updateBody();
    updateLocalStorage();
});


function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}