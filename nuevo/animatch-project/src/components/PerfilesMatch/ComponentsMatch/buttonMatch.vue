
<template>
    <div id="button">
      <button @click="moverIzquierda"><img src="../img/eliminar.png"></button>
      <button @click="moverDerecha"><img src="../img/favoritos.png"></button>
    </div>
  </template>
  
  <script>

export default { 
    name: 'MatchButton',
    data () {
        return{
            imagenes: [
                {src: 'eliminar'},
                {src: 'favoritos'},
            ]
        }
    }
}; 
</script>

<style lang="scss">
 @import '../perfilMatch.scss';
</style>
