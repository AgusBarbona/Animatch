<template>
    <div class="swipe-container">
      <div
        class="swipe-card"
        v-for="(perfil, index) in Cart"
        :key="perfil.id"
        @mousedown="dragStart(index, $event)"
        @touchstart="dragStart(index, $event)"
        @mousemove="drag(index, $event)"
        @touchmove="drag(index, $event)"
        @mouseup="dragEnd(index)"
        @touchend="dragEnd(index)"
        ref="cards" :style="{ zIndex: Cart.length - index }"
        
      >
        <img :src="perfil.img" />
        <div class="card-overlay">
          <p class="card-text">{{ perfil.name }}</p>
          <p class="text">{{ perfil.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: [ 'Cart'],
    data() {
      return {
        isDragging: false,
        startPositionX: 0,
        offsetX: 0,
        currentIndex: 0,
      };
    },
    methods: {
      dragStart(index, event) { 
        
        if (event.type === 'touchstart') {
          this.startPositionX = event.touches[0].clientX;
        } else {
          this.startPositionX = event.clientX;
          event.preventDefault();
        }
        this.$emit('set-current-card-element', this.$refs.cards[index]);
        this.isDragging = true;
        const card = this.$refs.cards[index];
        card.style.transition = 'none';
      },
      drag(index, event) {
        if (!this.isDragging) return;
        const currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        this.offsetX = currentX - this.startPositionX;
        const card = this.$refs.cards[index];
        card.style.transform = `translateX(${this.offsetX}px) rotate(${this.offsetX * 0.05}deg)`;
      },
      dragEnd(index) {
        if (!this.isDragging) return;
        const card = this.$refs.cards[index];
        this.isDragging = false;
        card.style.transition = 'transform 0.3s ease-in-out';
  
        if (this.offsetX > this.$el.clientWidth * 0.25) {
          card.style.transform = `translateX(${this.$el.clientWidth}px) rotate(30deg)`;
          setTimeout(() => {
            card.style.transition = 'none';
            card.style.transform = 'translateX(0) rotate(0)';
            this.currentIndex = (index + 1) % this.Cart.length;
            this.$refs.cards[this.currentIndex].style.transition = 'transform 0.3s ease-in-out';
            this.$refs.cards[this.currentIndex].style.zIndex = this.Cart.length;
          }, 300);
        } else if (this.offsetX < -this.$el.clientWidth * 0.25) {
          card.style.transform = `translateX(-${this.$el.clientWidth}px) rotate(-30deg)`;
          setTimeout(() => {
            card.style.transition = 'none';
            card.style.transform = 'translateX(0) rotate(0)';
            this.currentIndex = (index + 1) % this.Cart.length;
            this.$refs.cards[this.currentIndex].style.transition = 'transform 0.3s ease-in-out';
            this.$refs.cards[this.currentIndex].style.zIndex = this.Cart.length;
          }, 300);
        } else {
          card.style.transform = 'translateX(0) rotate(0)';
        }
      },
    },
  };
  </script>
  