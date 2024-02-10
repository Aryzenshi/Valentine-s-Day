let intervalId;

document.getElementById('heart-button').addEventListener('click', function() {
  intervalId = setInterval(createHeart, 100);
  showNext();
  setTimeout(stopHeartShower, 216000);
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  document.body.appendChild(heart);

  const startX = Math.random() * window.innerWidth;
  const startY = -50;
  const endY = window.innerHeight + 50;
  const duration = Math.random() * 2 + 1;
  const size = Math.random() * 50 + 1;
  const rotation = Math.random() * 360;

  heart.style.left = startX + 'px';
  heart.style.top = startY + 'px';
  heart.style.animationDuration = duration + 's';
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.transform = 'rotate(' + rotation + 'deg)';

  setTimeout(() => {
    heart.style.top = endY + 'px';
  }, 0);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

function stopHeartShower() {
  clearInterval(intervalId);
}