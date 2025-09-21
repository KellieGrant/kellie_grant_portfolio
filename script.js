//Number of EQ Bars
const eqWrapper = document.querySelector('eq-wrapper');
let totalBars;

if (window.innerWidth < 480) {
  totalBars = 15;
} else if (window.innerWidth < 769) {
  totalBars = 20;
} else {
  totalBars = 25;
}

for (let i = 0; i < totalBars; i++) {
  const bar = document.createElement('div');
  bar.classList.add('eq-bar');
  eqWrapper.appendChild(bar);
}



// EQ Bar dance
const portfolioButton = document.querySelector('.portfolio-btn');
const eqBars = document.querySelectorAll('.eq-bar');

let danceInterval;

function eqDance() {
  eqBars.forEach((bar) => {
    const randomHeight = Math.random() * 80 + 20;
    bar.style.height = randomHeight + '%';
  })
}

portfolioButton.addEventListener('mouseenter', () => {
  eqDance();
  danceInterval = setInterval(eqDance, 100);
});

portfolioButton.addEventListener('mouseleave', () => {
  clearInterval(danceInterval);

  eqBars.forEach((bar) => {
    bar.style.height = '50%';
  })
})
