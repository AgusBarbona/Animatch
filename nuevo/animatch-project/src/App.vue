<template>
  <div id="app">
    <NavDesplegable />
    <router-view />
    <FooterCopy />
  </div>
</template>

<script>
import NavDesplegable from './components/principal/NavDesplegable.vue'
import FooterCopy from './components/principal/FooterCopy.vue'

export default {
  components: {
    NavDesplegable,
    FooterCopy,
  }
}


</script>

<style>
*{
    margin: 0;
}

:root {
    --rojoOscuro: #c82711;
    --rosita: #FFB8AE;
    --azulVinculos: #0075CA;
}
</style>
