const imageContainer = document.querySelector(".image-container");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

let x = 0;
let timer;
previous.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
})
next.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
})

function updateGallery(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000)
}
updateGallery();