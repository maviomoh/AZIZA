// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-out hero text when scrolling
window.addEventListener('scroll', () => {
  const heroText = document.querySelector('.hero-content');
  if (!heroText) return;
  const opacity = Math.max(0, 1 - window.scrollY / 800);
  heroText.style.opacity = opacity;
});

// Background sound toggle
const soundBtn = document.getElementById('sound-toggle');
const bgSound = document.getElementById('bg-sound');
let isPlaying = false;

soundBtn.addEventListener('click', () => {
  if (!isPlaying) {
    bgSound.play();
    soundBtn.textContent = '🔈';
  } else {
    bgSound.pause();
    soundBtn.textContent = '🔊';
  }
  isPlaying = !isPlaying;
});

