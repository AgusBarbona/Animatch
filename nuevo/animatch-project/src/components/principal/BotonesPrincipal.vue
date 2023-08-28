<template>
    <div class="buttons">
      <button class="boton-Registro" href="#">Crear Cuenta</button>
      <button class="boton-Iniciar"  href="#">Iniciar Sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "BotonesPrincipal",
    methods: {
        crearCuenta() {
            // Lógica para crear cuenta
        },
        iniciarSesion() {
            // Lógica para iniciar sesión
        }
    }
  }
  </script>

<!--<template>
    <div class="buttons">
      <router-link to="/register" tag="button" class="boton-Registro">Crear Cuenta</router-link>
      <router-link to="/login" tag="button" class="boton-Iniciar">Iniciar Sesión</router-link>
    </div>
</template>-->

<style scoped>
*{
    margin: 0;
}

:root {
    --rojoOscuro: #c82711;
    --rosita: #FFB8AE;
    --azulVinculos: #0075CA;
}

.buttons {
    text-align: center;
    margin-left: 55px;
}

.boton-Registro,
.boton-Iniciar {
    display: inline-block;
    left: 60px;    
    margin: 10px;
    padding: 9px;
    font-size: 16px;
    color: white;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s; 
    border: 3px solid;
    border-radius: 30px;
    cursor: pointer;
}
.boton-Registro:active,
.boton-Iniciar:active {
    transform: scale(0.95); /* Aplica una transformación de escala en el estado activo */
}

.boton-Registro {
    background-color: var(--rojoOscuro);
    border-color: var(--rosita);
}

.boton-Iniciar {
    background-color: var(--rosita);
    border-color: var(--rojoOscuro);
}

@media (min-width: 768px) {
    .boton-Registro,
    .boton-Iniciar {
        display: inline-block;
        width: auto;
        margin: 50px ; /* Ajusta los márgenes superior e inferior */
        padding: 20px;
    }
}
</style>
