<template>
  <div id="app">
    <h1>Animatch</h1> 
    <div class="logo"><img  src="./img/logoanimatch.png"></div>
    <MatchCards />
  
  </div>
</template>

<script>

import MatchCards from './ComponentsMatch/cardsMatch.vue';

export default {
  components: {
    MatchCards,
  }
};
</script>

<style lang="scss">
 @import './perfilMatch.scss';
</style>