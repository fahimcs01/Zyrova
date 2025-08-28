 // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', () => nav.classList.toggle('active'));
    nav.addEventListener('click', e => { if(e.target.tagName === 'A') nav.classList.remove('active'); });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });

    // Fade in on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    // Card Slider JS
    document.addEventListener("DOMContentLoaded", () => {
      const wrapper = document.querySelector('.card-slider-wrapper');
      const cards = document.querySelectorAll('.card');
      const nextBtn = document.getElementById('next-btn');
      const prevBtn = document.getElementById('prev-btn');

      const gap = 16;
      let cardWidth = cards[0].offsetWidth + gap;

      nextBtn.addEventListener('click', () => wrapper.scrollBy({ left: cardWidth, behavior: 'smooth' }));
      prevBtn.addEventListener('click', () => wrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' }));

      window.addEventListener('resize', () => cardWidth = cards[0].offsetWidth + gap);
    });

    // Card Slider Next/Prev buttons
const wrapper = document.querySelector('.card-slider-wrapper');
const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const gap = 16; // same as your CSS gap
let cardWidth = cards[0].offsetWidth + gap;

nextBtn.addEventListener('click', () => wrapper.scrollBy({ left: cardWidth, behavior: 'smooth' }));
prevBtn.addEventListener('click', () => wrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' }));

window.addEventListener('resize', () => cardWidth = cards[0].offsetWidth + gap);

// Hover-to-play videos
document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('video');
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
