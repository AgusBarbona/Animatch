
<template>
    <div id="Button">
        <button><img src="../img/eliminar.png"></button>
        <button><img src="../img/favoritos.png"></button>
    </div>
</template>

<script>

export default { 
    name: 'button',
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


<style>

button img{
  width: 48px;
  height: 48px;
  display: flex;
}
button{
  margin-left: 15%;
  margin-right: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 100%;
  background-color: transparent;
}
</style>





