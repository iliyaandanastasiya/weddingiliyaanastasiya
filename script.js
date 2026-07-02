// Генерация живых звёзд
function createStars() {
  const starField = document.getElementById('starField');
  const count = 150;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 2 + 1; // 1–3 px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;

    const duration = Math.random() * 3 + 2; // 2–5 сек
    star.style.animationDuration = `${duration}s`;

    const delay = Math.random() * 5;
    star.style.animationDelay = `${delay}s`;

    starField.appendChild(star);
  }
}

// Таймер до свадьбы: 30.08.2026 16:00
function startCountdown() {
  const weddingDate = new Date('2026-08-30T16:00
