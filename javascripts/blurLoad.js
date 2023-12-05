
function addLoadedClass(image) {
    image.classList.add("loaded");
}



/* ============================= For Home page =========================== */

document.addEventListener("DOMContentLoaded", () => {
    const loadHeroImg = document.querySelector(".hero_container img");

        if (loadHeroImg.complete) {
            addLoadedClass(loadHeroImg);
        } else {
            loadHeroImg.addEventListener("load", () => {
                addLoadedClass(loadHeroImg);
            });
        }
    });


/* ======================================================== */






/* ============================= For Brand page =========================== */

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

/* ======================================================== */

