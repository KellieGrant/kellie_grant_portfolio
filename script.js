const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const laptop = document.querySelector('.code-laptop');
const aboutLinks = document.querySelectorAll('[data-about-transition]');
const contactLinks = document.querySelectorAll('[data-contact-transition]');

const addLaptopTransition = (links, previewClass, transitionName) => links.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!laptop || reduceMotion.matches || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const destination = link.href;
    const screen = laptop.querySelector('.code-window');
    const screenRect = screen.getBoundingClientRect();
    const scale = Math.max(window.innerWidth / screenRect.width, window.innerHeight / screenRect.height) * 1.08;
    const screenCenterX = screenRect.left + screenRect.width / 2;
    const screenCenterY = screenRect.top + screenRect.height / 2;
    const shiftX = window.innerWidth / 2 - screenCenterX;
    const shiftY = window.innerHeight / 2 - screenCenterY;

    laptop.style.setProperty('--zoom-x', `${shiftX}px`);
    laptop.style.setProperty('--zoom-y', `${shiftY}px`);
    laptop.style.setProperty('--zoom-scale', scale);
    sessionStorage.setItem('page-transition', transitionName);

    laptop.classList.add(previewClass);
    window.setTimeout(() => document.body.classList.add('about-transitioning'), 260);

    window.setTimeout(() => {
      window.location.href = destination;
    }, 1100);
  });
});

addLaptopTransition(aboutLinks, 'laptop-showing-about', 'about');
addLaptopTransition(contactLinks, 'laptop-showing-contact', 'contact');

const arrivingPage = sessionStorage.getItem('page-transition');
if (arrivingPage && document.body.classList.contains(`${arrivingPage}-document`)) {
  sessionStorage.removeItem('page-transition');
  document.body.classList.add('page-arriving');
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => document.body.classList.remove('page-arriving'));
  });
}

console.info(
  '%c☕ You found the source! No bugs here—only undocumented features.',
  'background:#f5f2ec;color:#193229;padding:8px 12px;border:1px solid #193229;border-radius:4px;font-weight:bold;'
);
