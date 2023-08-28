<template>
    <section class="bienvenida">
      <p>❤Bienvenido a Animatch❤<br>
        Encuentra el amor para tu leal compañero<br>
        Regístrate ahora y permite que tus mascotas encuentren el verdadero amor.<br>
        Descubre la magia de Animatch hoy mismo.<br>
        ¡Únete ahora!</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BienvenidaText'
  }
  </script>

<style scoped>
*{
    margin: 0;
}

:root {
    --rojoOscuro: #c82711;
    --rosita: #FFB8AE;
    --azulVinculos: #0075CA;
}
.bienvenida {
    display: flex;
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    padding: 30px;
    margin: 30px;
    margin-left: 60px;
}

/* Estilos para el párrafo */
.bienvenida p {
    text-align: center;
    font-size: 15px; 
    color: #333;
    max-width: 80%; 
    line-height: 1.5;
}
@media (min-width: 768px) {
    .bienvenida {
        padding: 40px 0px 40px 0px; /* Ajusta el padding para la versión web */
        margin-right: 0%;
    }
    .bienvenida p {
        font-size: 20px; 
    }
}
</style>
