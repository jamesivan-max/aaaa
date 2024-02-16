document.addEventListener("DOMContentLoaded", function() {
  var polaroids = document.querySelectorAll('.polaroid');

  polaroids.forEach(item => {
    const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6);
    const randomX = Math.floor(Math.random() * (20 - -20 + 1) + -20);
    const randomY = Math.floor(Math.random() * (20 - -20 + 1) + -20);
    
    item.style.transform = `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px)`;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.polaroid__content-image > img');
  const overlay = document.createElement('div');
  overlay.classList.add('zoom-overlay');
  document.body.appendChild(overlay);

  images.forEach(img => {
    img.addEventListener('click', function() {
      overlay.innerHTML = ''; // Clear previous content
      const clonedImg = img.cloneNode();
      overlay.appendChild(clonedImg);
      overlay.style.display = 'flex';
      setTimeout(() => {
        clonedImg.classList.add('zoomed'); // Add zoomed class after a delay
      }, 50);
    });
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
});
