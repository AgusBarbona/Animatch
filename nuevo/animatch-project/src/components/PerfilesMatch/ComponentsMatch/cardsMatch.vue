
<template>
  <div class="Cards">
    <div class="swipe-container">
      <div class="swipe-card">
        <img src= "../img/m.jpg">
        <div class="card-overlay">
          <p class="card-text">Lucas 8</p>
          <p class="text">Lucas, un perrito compañero lleno de encanto. Aunque disfruta de momentos tranquilos en casa, su espíritu juguetón se despierta en cada paseo. si estas interesado en ir de paseo con lucas mandanos un mensajito </p>
        </div>
      </div>
      <div class="swipe-card">
        <img src="../img/edgar.jpg">
        <div class="card-overlay">
          <p class="card-text">Edgar 6</p>
          <p class="text">Edgar es una mezcla única de elegancia y curiosidad. no le gusta jugar y se la pasa todo el dia durmiendo, no te dejes llevar por su mirada juzagadora, porque cuando entra en confianza te puede atacar con mucho amor y cariño </p> </div>
      </div>
      <div class="swipe-card">
        <img src="../img/mariano.jpg">
        <div class="card-overlay">
          <p class="card-text">Marian 4</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="../img/cat.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="../img/animal.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="../img/dog.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="../img/cat.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="../img/cat.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="../img/cat.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="../img/cat.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  mounted() {
    this.initSwipe();
  },
  methods: {
    initSwipe() {
      const container = this.$el.querySelector('.swipe-container');
      const cards = this.$el.querySelectorAll('.swipe-card');
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
    },
  },
};
</script>
<style scoped>


.Cards{
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(0deg,#e00e0e, #f79385 );
}

  
.swipe-container {  
 
  position: relative;
  width: 260px;
  height: 490px;
  overflow: hidden;
  box-shadow: 10px 15px 90px rgb(0, 0, 0);
  border-radius: 10px;
  margin-left: 80px;
  margin-top: -10px;
  z-index: 1;
  }
  .swipe-card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  cursor: grab;
  transform: translateX(0);
  transition: transform 0.2s ease-in-out;
  }
  
  .swipe-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  }
  
  .card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.377);
  color: white;
  
  }
  
  .card-text {
  font-size: 40px;
  text-align: left;
  margin: px;
  }
  .text{
  margin: 10px;
  }
  
  
  @media screen and (min-width: 780px){  
  
 
  .swipe-container {
    position: relative;
    width: 290px;
    height: 550px;

  }
  
  }

  
</style>
