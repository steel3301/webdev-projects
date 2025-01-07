const textareaElement = document.getElementById("textarea");
const totalCharElement = document.getElementById("total-counter");
const remainCharElement = document.getElementById("remaining-counter");


textareaElement.addEventListener("keyup", () => {
    updateCounter();
})

function updateCounter(){
    totalCharElement.innerHTML = textareaElement.value.length;

    remainCharElement.innerHTML = textareaElement.getAttribute("maxlength") - textareaElement.value.length;
}