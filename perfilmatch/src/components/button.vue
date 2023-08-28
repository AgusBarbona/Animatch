
<template>
    <div id="Button">
        <button><img src="../assets/img/eliminar.png"></button>
        <button><img src= "../assets/img/favoritos.png"></button>
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





