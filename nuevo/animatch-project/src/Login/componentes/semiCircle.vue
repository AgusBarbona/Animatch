<template>
    <section>
      <div class="semicircle1"></div>
      <div class="circle-image"></div>
      <p class="name">Iniciar Sesion</p>
    </section>  
  </template> 
  
  <style scoped>
 
  :root {
      --rojoOscuro: #c82711;
      --rosita: #FFB8AE;
      --azulVinculos: #0075CA;
  }
  .semicircle1 {
      position: relative;
      background: linear-gradient(to bottom, var(--rosita), var(--rojoOscuro));
      height: 30vh;
      width: 100%;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
      border-bottom-left-radius: 70% 70%;
      border-bottom-right-radius: 65% 40%;
  }
  .circle-image {
      width: 100px;
      height: 100px;
      margin-top: 20px;
      background-image: url('../../assets/principalResouse/logo_animatch.png');
      background-size: cover;
      background-color: var(--rosita);
      background-position: center;
      border-radius: 50%;
      position: absolute;
      top: 25px;
      left: 55%;
      transform: translateX(-50%);
  }
  .name {
      font-family: 'Merienda One', cursive;
      font-size: large;
      color: aliceblue;
      text-shadow: 2px 2px 4px rgba(0, 0, 0.5, 0.5);
      position: absolute;
      top: 160px;
      left: 55%;
      transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    .semicircle1 {
      position: relative;
      background: linear-gradient(to bottom, var(--rosita), var(--rojoOscuro));
      height: 30vh;
      width: 100%;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    }
    .name, .circle-image {
      left: 51%;
    }
  }
  </style>