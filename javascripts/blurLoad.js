
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


/* ============================= For Gallery page =========================== */


document.addEventListener("DOMContentLoaded", () => {
    const loadGalleryImg = document.querySelectorAll(".gallery_img img");

    loadGalleryImg.forEach((image) => {
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

/* ============================= For Blog page =========================== */


document.addEventListener("DOMContentLoaded", () => {
    const loadBlogImg1 = document.querySelectorAll(".blog_cover_1 img");
    const loadBlogImg2 = document.querySelectorAll(".blog_cover_2 img");

    loadBlogImg1.forEach((image) => {
        if (image.complete) {
            addLoadedClass(image);
        } else {
            image.addEventListener("load", () => {
                addLoadedClass(image);
            });
        }
    });


    loadBlogImg2.forEach((image) => {
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




document.addEventListener("DOMContentLoaded", () => {
    const loadAboutImg = document.querySelector(".content_img img");

        if (loadAboutImg.complete) {
            addLoadedClass(loadAboutImg);
        } else {
            loadAboutImg.addEventListener("load", () => {
                addLoadedClass(loadAboutImg);
            });
        }
    });