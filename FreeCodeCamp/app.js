// Get the menu button element
const menuBtn = document.querySelector('.menu-btn');

// Set initial state
let menuOpen = false;

// Add click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle menu state
  menuOpen = !menuOpen;

  // Get the navigation element
  const nav = document.querySelector('.navbar');

  // Change background and font color of the menu button
  if (menuOpen) {
    menuBtn.style.backgroundColor = 'white';
    menuBtn.style.color = 'black';
    nav.style.display = 'block';
  } else {
    menuBtn.style.backgroundColor = '';
    menuBtn.style.color = '';
    nav.style.display = 'none';
  }
});

