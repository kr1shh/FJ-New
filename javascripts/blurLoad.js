
/* For desktop */

function addLoadedClass(image) {
    image.classList.add("loaded");
}

document.addEventListener("DOMContentLoaded", () => {
    const loadImg = document.querySelectorAll(".brand_card img");

    loadImg.forEach((image) => {
        if (image.complete) {
            addLoadedClass(image);
        } else {
            image.addEventListener("load", () => {
                addLoadedClass(image);
            });
        }
    });
});




/* For mobile */



