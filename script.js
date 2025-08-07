const container = document.querySelector('.particle-container');

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 4; // 4px to 8px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;

    container.appendChild(particle);
}

  const hamburger = document.getElementById('hamburger');
  const slideMenu = document.getElementById('slideMenu');
  const closeBtn = document.getElementById('closeBtn');
  const overlay = document.getElementById('overlay');

  // Open menu
  hamburger.addEventListener('click', () => {
    slideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  // Close menu
  function closeMenu() {
    slideMenu.classList.remove('active');
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Optional: close menu when any menu link is clicked
  document.querySelectorAll('.slide-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });