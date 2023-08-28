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

<style>

.logo img{
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0px;
  right: 0px;
  
}
h1{
  position: absolute;
  top: 0px;
  left: 65px;
  color: #f2f2f2;
  font-size: 50px;
  margin-left: 5px;
  margin-top: 5px;
  font-family:Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px 5px black;
  }  

</style>