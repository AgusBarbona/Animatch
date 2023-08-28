
<template>
    <div id="button">
        <button><img src="../img/eliminar.png"></button>
        <button><img src="../img/favoritos.png"></button>
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


<style scoped>
#button{
  display: flex;
  margin-left: 50px;
  justify-content: center;
  margin-top: -60px;

}
button img{
  width: 48px;
  height: 50px;
}
button{
  background-color: transparent;  
  border-radius: 100%;
}
</style>