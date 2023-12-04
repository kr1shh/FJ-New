


window.addEventListener("load", function() {
    setTimeout(function() {
        var loadContainer = document.querySelector(".load-container");
        var websiteContent = document.querySelector(".website-content");
        loadContainer.classList.add("fade-out");
        setTimeout(function() {
            loadContainer.style.display = "none";
            websiteContent.style.display = "block";
            document.body.style.overflow = "auto";
        document.removeEventListener("scroll", preventScroll);
        }, 500); 
    }, 1600);
    function preventScroll(e) {
                e.preventDefault();
            }
            document.addEventListener("scroll", preventScroll);
});
