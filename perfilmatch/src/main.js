import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')




const container = document.querySelector('.swipe-container');
const cards = document.querySelectorAll('.swipe-card');
let isDragging = false;
let startPositionX = 0;
let offsetX = 0;
let currentIndex = 0;

cards.forEach((card, index) => {
card.style.zIndex = cards.length - index;
});

container.addEventListener('mousedown', dragStart);
container.addEventListener('touchstart', dragStart, { passive: true });

container.addEventListener('mousemove', drag);
container.addEventListener('touchmove', drag, { passive: true });

container.addEventListener('mouseup', dragEnd);
container.addEventListener('touchend', dragEnd);

function dragStart(event) {
if (event.type === 'touchstart') {
  startPositionX = event.touches[0].clientX;
} else {
  startPositionX = event.clientX;
  event.preventDefault();
}
isDragging = true;
const card = cards[currentIndex];
card.style.transition = 'none';
}

function drag(event) {
if (!isDragging) return;
const currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
offsetX = currentX - startPositionX;
const card = cards[currentIndex];
card.style.transform = `translateX(${offsetX}px) rotate(${offsetX * 0.05}deg)`;
}

function dragEnd() {
if (!isDragging) return;
const card = cards[currentIndex];
isDragging = false;
card.style.transition = 'transform 0.3s ease-in-out';

if (offsetX > container.clientWidth * 0.25) {
  card.style.transform = `translateX(${container.clientWidth}px) rotate(30deg)`;
  setTimeout(() => {
    card.style.transition = 'none';
    card.style.transform = 'translateX(0) rotate(0)';
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].style.transition = 'transform 0.3s ease-in-out';
    cards[currentIndex].style.zIndex = cards.length;
  }, 300);
} else if (offsetX < -container.clientWidth * 0.25) {
  card.style.transform = `translateX(-${container.clientWidth}px) rotate(-30deg)`;
  setTimeout(() => {
    card.style.transition = 'none';
    card.style.transform = 'translateX(0) rotate(0)';
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].style.transition = 'transform 0.3s ease-in-out';
    cards[currentIndex].style.zIndex = cards.length;
  }, 300);
} else {
  card.style.transform = 'translateX(0) rotate(0)';
}
}

container.addEventListener('mouseleave', dragEnd);



/*const container = document.querySelector('.swipe-container');
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