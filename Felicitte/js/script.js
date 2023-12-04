//======================NavBar animation================//
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the "sticky" class based on scroll position
    function handleStickyHeader() {
      var header = document.querySelector("header");
      if (document.title == "Felicitte | Home") {
        header.classList.toggle("sticky", window.scrollY > 0);
      } else {
        header.classList.add("sticky");
      }
    }
  
    // Call the function when the page loads
    handleStickyHeader();
  
    // Add a scroll event listener to continuously update the "sticky" class
    window.addEventListener("scroll", handleStickyHeader);
  });
  
  

//=========================Cursor animation==============//

// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', (e) => {
//     const circleSize = 20; // Adjust the size of the circle as needed
//     const scrollX = window.scrollX || window.pageXOffset;
//     const scrollY = window.scrollY || window.pageYOffset;

//     // Calculate the adjusted position to center the circle
//     const adjustedX = e.pageX - scrollX - circleSize / 2;
//     const adjustedY = e.pageY - scrollY - circleSize / 2;

//     cursor.style.left = adjustedX + 'px';
//     cursor.style.top = adjustedY + 'px';
// });

//============Cursor Scaling=============

// const links = document.querySelectorAll('.nav-link');
// const logos = document.querySelectorAll('.logo');
// const down_arrow = document.querySelectorAll('.main-arrow')

// Function to increase circle size
// function increaseCircleSize() {
//     cursor.style.transform = 'scale(4)'; // Adjust the scale factor as needed
// }

// Function to reset circle size
// function resetCircleSize() {
//     cursor.style.transform = 'scale(1)';
// }

// Add event listeners for links
// links.forEach(link => {
//     link.addEventListener('mouseenter', increaseCircleSize);
//     link.addEventListener('mouseleave', resetCircleSize);
// });

// Add event listeners for logos (assuming .logo is the class for logos)
// logos.forEach(logo => {
//     logo.addEventListener('mouseenter', increaseCircleSize);
//     logo.addEventListener('mouseleave', resetCircleSize);
// });

// down_arrow.forEach(main_arrow => {
//     main_arrow.addEventListener('mouseenter', increaseCircleSize);
//     main_arrow.addEventListener('mouseleave', resetCircleSize);
// });
