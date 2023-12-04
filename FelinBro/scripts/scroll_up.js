
/* ========================================scroll up btn==================================== */

document.addEventListener("DOMContentLoaded", function () {
  const scrollUpButton = document.getElementById("scroll-up-button");
  let scrollProgress = document.querySelector(".scroll-pro");

  function toggleScrollButton() {
      if (window.scrollY > 100) {
          scrollUpButton.style.opacity = "1"; 
          scrollUpButton.style.pointerEvents = "auto";
          scrollUpButton.style.cursor = "pointer";
      } else {
          scrollUpButton.style.opacity = "0"; 
      }
      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - 
          document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      scrollProgress.style.background = `conic-gradient( #D04C00 ${scrollValue}%,  #ffffff ${scrollValue}%)`;
  }

  window.addEventListener("scroll", toggleScrollButton);

  scrollUpButton.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
  toggleScrollButton();
});


/* ==================================Logo scroll up========================== */

document.addEventListener("DOMContentLoaded", function() {
    var linkUp = document.getElementById("link-up");
  
    linkUp.addEventListener("click", function(event) {
      event.preventDefault();
  
      if (isHomePage()) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        window.location.href = "index.html"; 
      }
    });
    function isHomePage() {
      return document.body.id === "home-page";
    }
  });
  