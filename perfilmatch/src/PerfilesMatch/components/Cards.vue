
<template>
  <div>
      <h1>Animatch</h1>
    <div class="logo"><img  src="../img/logo animatch.png"></div>
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

<script >

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(0deg,#e00e0e, #f79385 );
}

body {
font-family: Arial, sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0;

background-color: #f2f2f2;
}
h1{
position: absolute;
top: 0px;
left: 0;
color: #f2f2f2;
font-size: 50px;
margin-left: 5px;
margin-top: 5px;
font-family:Arial, Helvetica, sans-serif;
text-shadow: 2px 2px 5px black;
}

.logo img{
width: 70px;
height: 70px;
position: absolute;
top: 0px;
right: 0px;

}

.swipe-container {
position: relative;

width: 260px;
height: 490px;
overflow: hidden;
box-shadow: 10px 15px 90px rgb(0, 0, 0);
border-radius: 10px;
}
.swipe-card {
position: absolute;
width: 100%;
height: 100%;
background-color: white;
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

h1 {
  display: none;
}
.swipe-container {
  position: relative;
  width: 290px;
  height: 550px;
  margin-top: 80px;
}

.nav{
  background-color: #fc897a;
  width: 100%;
  height: 8%;
  position: absolute;
  top: 0;
  
  }
  .logo img{
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
  }
}


.nav{
  background-color: #fc897a;
  width: 100%;
  height: 8%;
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>
