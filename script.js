const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

console.info(
  '%c☕ You found the source! No bugs here—only undocumented features.',
  'background:#f5f2ec;color:#193229;padding:8px 12px;border:1px solid #193229;border-radius:4px;font-weight:bold;'
);
