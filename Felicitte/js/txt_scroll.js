document.addEventListener('DOMContentLoaded', () => {
    let line1 = document.querySelector(".line-1");
    let line2 = document.querySelector(".line-2");
    let line3 = document.querySelector(".line-3");
    let scrollFactor = 0.4;
  
    window.onscroll = () => {
      let pos = (window.scrollY-990) * scrollFactor;

  
      line1.style.left = `${pos}px`;
      line2.style.right = `${pos}px`;
      line3.style.left = `${pos}px`;
    };
  });
  