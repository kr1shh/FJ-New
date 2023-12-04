
// Function to start the SVG animation
function startSvgAnimation() {
    // Add a class to start the animation
    const svgPath = document.querySelector("#outline-txt svg path");
    svgPath.classList.add("animate-svg");
  }
  
  // Function to handle the Intersection Observer callback
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startSvgAnimation();
        observer.unobserve(entry.target); // Stop observing once animation starts
      }
    });
  }
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Adjust this threshold as needed
  });
  
  // Target the container element
  const container = document.querySelector(".outline-txt-container");
  
  // Start observing the container
  observer.observe(container);
  
  
  
  
  