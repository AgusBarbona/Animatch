import { createApp } from 'vue'
import "./PerfilMatch.scss";
import Match from './perfilMatch.vue'

createApp(Match).mount('#app')

/*

const container = document.querySelector('.swipe-container');
const cards = document.querySelectorAll('.swipe-card');
let isDragging = false;
let startPosX = 0;
let currentTranslate = 0;
let currentIndex = 0;

cards.forEach((card, index) => {
  card.style.zIndex = cards.length - index;

  card.addEventListener('mousedown', dragStart);
  card.addEventListener('touchstart', dragStart, { passive: true });

  card.addEventListener('mouseup', dragEnd);
  card.addEventListener('touchend', dragEnd);

  card.addEventListener('mousemove', drag);
  card.addEventListener('touchmove', drag, { passive: true });

  card.addEventListener('mouseleave', dragEnd);
});

function dragStart(e) {
  if (e.type === 'touchstart') {
    startPosX = e.touches[0].clientX;
  } else {
    startPosX = e.clientX;
    e.preventDefault();
  }

  isDragging = true;
  currentIndex = Array.from(cards).indexOf(e.currentTarget);

  cards.forEach(card => card.style.transition = 'none');
}

function drag(e) {
  if (!isDragging) return;

  let currentPosX;

  if (e.type === 'touchmove') {
    currentPosX = e.touches[0].clientX;
  } else {
    currentPosX = e.clientX;
  }

  const deltaX = currentPosX - startPosX;
  currentTranslate = deltaX;

  cards[currentIndex].style.transform = `translateX(${currentTranslate}px)`;
}

function dragEnd() {
  isDragging = false;

  if (Math.abs(currentTranslate) > container.clientWidth * 0.2) {
    cards[currentIndex].style.transition = 'transform 0.3s';
    cards[currentIndex].style.transform = `translateX(${currentTranslate > 0 ? container.clientWidth : -container.clientWidth}px)`;
    createNewCard();
  } else {
    currentTranslate = 0;
    cards[currentIndex].style.transition = 'transform 0.3s';
    cards[currentIndex].style.transform = 'translateX(0)';
  }
}

function createNewCard() {
  const newCard = document.createElement('div');
  newCard.classList.add('swipe-card');
  const nextCardIndex = cards.length + 1;

  if (nextCardIndex <= 8) {
    newCard.innerHTML = `<img src="card${nextCardIndex}.jpg" alt="Card ${nextCardIndex}">`;
    container.appendChild(newCard);

    newCard.addEventListener('mousedown', dragStart);
    newCard.addEventListener('touchstart', dragStart, { passive: true });

    newCard.addEventListener('mouseup', dragEnd);
    newCard.addEventListener('touchend', dragEnd);

    newCard.addEventListener('mousemove', drag);
    newCard.addEventListener('touchmove', drag, { passive: true });

    newCard.addEventListener('mouseleave', dragEnd);

    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
    });

    currentTranslate = 0;
  }
}
*/