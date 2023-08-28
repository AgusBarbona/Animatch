<template>
    <div>
      <semiCircle />
       <regisTer />
    </div>  
  </template>
  
  <script>
  
  import semiCircle from './componentes/semiCircle.vue'
  import regisTer from './componentes/regisTer.vue'

  export default {
    components: {
      semiCircle,
      regisTer,
  }
  }
  </script>
  
  <style>
  
  :root {
      --rojoOscuro: #c82711;
      --rosita: #FFB8AE;
      --azulVinculos: #0075CA;
  }
  </style>
  