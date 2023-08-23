<template>
  <div id="app">
    <NavDesplegable />
    <AnimatchHeader />
    <BienvenidaText />
    <BotonesPrincipal />
    <FooterCopy />
  </div>
</template>

<script>
import NavDesplegable from './components/principal/NavDesplegable.vue'
import AnimatchHeader from './components/principal/AnimatchHeader.vue'
import BienvenidaText from './components/principal/BienvenidaText.vue'
import BotonesPrincipal from './components/principal/BotonesPrincipal.vue'
import FooterCopy from './components/principal/FooterCopy.vue'

export default {
  components: {
    NavDesplegable,
    AnimatchHeader,
    BienvenidaText,
    BotonesPrincipal,
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
