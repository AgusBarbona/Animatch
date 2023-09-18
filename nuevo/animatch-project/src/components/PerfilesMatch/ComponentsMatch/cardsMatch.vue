<template>
  <div class="Cards">
    <api :Cart="cart" @set-current-card-element="setCurrentCardElement" />
  </div>
  <ButtonMatch @eliminar-tarjeta="eliminarTarjeta" @marcar-favorito="marcarComoFavorito" />
</template>

<script>
import api from './cardApi.vue';
import ButtonMatch from './buttonMatch.vue';

export default {
  name: 'CardsMatch',
  components: {
    api,
    ButtonMatch
  },
  data() {
    return {
      cart: [],
      currentCardElement: null
    };
  },
  created() {
    this.getPerfiles();
  },
  methods: {
    getPerfiles: async function () {
      try {
        const setting = {
          method: 'GET',
        };
        const url = 'https://my-json-server.typicode.com/Arleth-cordero20/hhhh/perfil';
        const data = await fetch(url, setting);
        const json = await data.json();
        this.cart = json;
      } catch (error) {
        console.log(error);
      }
    },
    setCurrentCardElement(element) {
      this.currentCardElement = element;
    },
    eliminarTarjeta() {
      if (this.currentCardElement) {
        this.currentCardElement.style.transform = 'translateX(-100%) rotate(-30deg)';
        setTimeout(() => {
          this.currentCardElement.style.display = 'none';
  //this.$forceUpdate(); 
}, 300);
      }
    },
    marcarComoFavorito() {
      if (this.currentCardElement) {
        this.currentCardElement.style.transform = 'translateX(100%) rotate(30deg)';
        setTimeout(() => {
          this.currentCardElement.style.display = 'none';
          //this.$forceUpdate(); 
        }, 300);
      }
    }
}
};
</script>
