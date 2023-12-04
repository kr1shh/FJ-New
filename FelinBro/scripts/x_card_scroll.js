

const stickySections = [...document.querySelectorAll('.x-card-container')];




window.addEventListener("scroll", (e) => {
  if (window.innerWidth <= 768) {
    return;
  }
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});


function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.x-card-scroll');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100 ;
    percentage = percentage < 0 ? 0 : percentage > 64 ? 64 : percentage ;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}