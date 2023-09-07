
<template>
    <div id="button">
        <button><img src="../img/eliminar.png" alt="butonelim"></button>
        <button><img src="../img/favoritos.png" alt="butonfav"></button>
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




