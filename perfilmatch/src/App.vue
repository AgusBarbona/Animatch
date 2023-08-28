

<template>
  <div>
    <h1>Animatch</h1>
    <div class="logo"><img  src="./assets/img/logo animatch.png"></div>
    <div class="nav">hola </div> 
    <div class="swipe-container">
      <div class="swipe-card">
        <img src= "./assets/img/m.jpg">
        <div class="card-overlay">
          <p class="card-text">Lucas 8</p>
          <p class="text">Lucas, un perrito compañero lleno de encanto. Aunque disfruta de momentos tranquilos en casa, su espíritu juguetón se despierta en cada paseo. si estas interesado en ir de paseo con lucas mandanos un mensajito </p>
        </div>
      </div>
      <div class="swipe-card">
        <img src="./assets/img/edgar.jpg">
        <div class="card-overlay">
          <p class="card-text">Edgar 6</p>
          <p class="text">Edgar es una mezcla única de elegancia y curiosidad. no le gusta jugar y se la pasa todo el dia durmiendo, no te dejes llevar por su mirada juzagadora, porque cuando entra en confianza te puede atacar con mucho amor y cariño </p> </div>
      </div>
      <div class="swipe-card">
        <img src="./assets/img/mariano.jpg">
        <div class="card-overlay">
          <p class="card-text">Marian 4</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
      <div class="swipe-card">
        <img src="./assets/img/cat.jpg">
        <div class="card-overlay">
          <p class="card-text">Lolo 2</p>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sint nisi tenetur fuga similique deleniti cumque impedit ratione doloremque, consequatur libero quia reiciendis saepe modi odio asperiores. Cupiditate, ducimus velit?</p>
        </div> 
      </div>
    </div>
  </div>
  <div id="app" >
    <Button />
  </div>


</template>

<script >
import Button from './components/button.vue';
export default {
    components: {
    Button,
  },
};
</script>

