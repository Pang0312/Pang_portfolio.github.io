const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('fade-in');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.section-title,.info-card,.skill-card,.project-card,.timeline-item,.contact-box').forEach(el => observer.observe(el));
