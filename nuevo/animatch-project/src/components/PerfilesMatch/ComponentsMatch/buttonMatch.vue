<template>
  <div id="button">
    <button @click="eliminarTarjeta">
      <img src="../img/eliminar.png" alt="butonelim" />
    </button>
    <button @click="marcarComoFavorito">
      <img src="../img/favoritos.png" alt="butonfav" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonMatch',
  methods: {
    eliminarTarjeta() {
      this.$emit('eliminar-tarjeta');
      console.log('Evento "eliminar-tarjeta" emitido');
    },
    marcarComoFavorito() {
      // Emite un evento personalizado para indicar que se desea marcar la tarjeta como favorita
      this.$emit('marcar-favorito');
      console.log('Evento "marcar-favorito" emitido');
    }
  }
};
</script>