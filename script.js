// === Navbar scroll behavior ===
const navbar = document.getElementById('nav-bar');
const hero = document.getElementById('welcome-section');

window.addEventListener('scroll', () => {
   const heroBottom = hero.getBoundingClientRect().bottom;

   if (heroBottom <= 0) {
      navbar.classList.remove('hidden');
      navbar.classList.add('visible');
   } else {
      navbar.classList.remove('visible');
      navbar.classList.add('hidden');
   }
});

// === Hamburger toggle for mobile ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
   // Toggle nav visibility
   navLinks.classList.toggle('active');

   // Animate hamburger into "X"
   hamburger.classList.toggle('open');
});

//Number of EQ Bars
const eqWrapper = document.querySelector('eq-wrapper');
let totalBars = 25;

// EQ Bar dance
const portfolioButton = document.querySelector('.portfolio-btn');
const eqBars = document.querySelectorAll('.eq-bar');

let danceInterval;

function eqDance() {
   eqBars.forEach(bar => {
      const randomHeight = Math.random() * 80 + 20;
      bar.style.height = randomHeight + '%';
   });
}

portfolioButton.addEventListener('mouseenter', () => {
   eqDance();
   danceInterval = setInterval(eqDance, 100);
});

portfolioButton.addEventListener('mouseleave', () => {
   clearInterval(danceInterval);

   eqBars.forEach(bar => {
      bar.style.height = '50%';
   });
});
