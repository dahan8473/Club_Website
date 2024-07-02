//this is Justin's work in progress, a script for enabling scroll detection to activate certain animations for homepage




// Select the element to be animated
const animatedElement = document.querySelector('.animated-element');

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class when element is in viewport
function animateOnScroll() {
  if (isInViewport(animatedElement)) {
    animatedElement.classList.add('animated-element');
    window.removeEventListener('scroll', animateOnScroll); // Remove event listener once animation is triggered
  }
}

// Event listener to trigger animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on page load if element is already in viewport
animateOnScroll();