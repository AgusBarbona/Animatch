<template>
    <div>
      <semiCircle />
      <LogIn/>
    </div>  
  </template>
  
  <script>
  
  import semiCircle from './componentes/semiCircle.vue'
  import LogIn from './componentes/LogIn.vue' 
  
  export default {
    components: {
    semiCircle,
    LogIn,
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