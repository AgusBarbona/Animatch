<template>
  <div id="app">
    <h1>Animatch</h1> 
    <div class="logo"><img  src="./img/logoanimatch.png"></div>
    <MatchCards />
    <MatchButton />
  </div>
</template>

<script>

import MatchCards from './ComponentsMatch/cardsMatch.vue';
import MatchButton from './ComponentsMatch/buttonMatch.vue';

export default {
  components: {
    MatchCards,
    MatchButton
  }
};
</script>

<style lang="scss">
 @import './perfilMatch.scss';
</style>