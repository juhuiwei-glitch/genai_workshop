// Flash card app logic
let currentIndex = 0;
let showFront = true;
let shuffled = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function renderCard() {
  const cardFront = document.querySelector('.card-front');
  const cardBack = document.querySelector('.card-back');
  const card = document.getElementById('flash-card');
  const vocab = shuffled[currentIndex];
  if (!vocab) return;
  showFront = Math.random() < 0.5;
  card.classList.remove('flipped');
  cardFront.innerHTML = `<div>${vocab.kanji}</div><div style='font-size:0.7em;'>${vocab.kana_hira || vocab.kana_kata || ''}</div>`;
  cardBack.innerHTML = `<div>${vocab.english}</div>`;
  setTimeout(() => {
    if (!showFront) card.classList.add('flipped');
  }, 10);
}

function flipCard() {
  const card = document.getElementById('flash-card');
  card.classList.toggle('flipped');
  showFront = !showFront;
}

document.getElementById('flash-card').addEventListener('click', flipCard);
document.getElementById('flash-card').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') flipCard();
});
document.getElementById('prev-btn').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + shuffled.length) % shuffled.length;
  renderCard();
});
document.getElementById('next-btn').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % shuffled.length;
  renderCard();
});

window.addEventListener('DOMContentLoaded', function() {
  if (typeof vocabulary !== 'undefined') {
    shuffled = shuffle([...vocabulary]);
    currentIndex = 0;
    renderCard();
  }
});
