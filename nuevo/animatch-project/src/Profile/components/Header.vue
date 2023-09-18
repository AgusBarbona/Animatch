<template>
    <header>
        <div class="profileBackground">
            <BtnEdit text = "Cambiar Fondo" :imagen='imagenSeleccionada' class="btn-portada"></BtnEdit>
            <div class="profile">
                <div class="userPhotoProfile">
                    <img v-bind:src="imageUrl" alt="User Photo">
                    <BtnEditNoTxt :imagen='imagenSeleccionada'></BtnEditNoTxt>
                </div>
                <h1>Pepe Cat</h1><!--<h1>{{ UserName }}</h1>-->
                <LabelCtn></LabelCtn>
            </div>
        </div>
    </header>
</template>

<script>
    import pepecat from '../assets/img/pepecat.jpg';
    import LabelCtn from './LabelContainer.vue';
    import BtnEdit from './BtnEdit.vue';
    import BtnEditNoTxt from './BtnEditNoTxt.vue';
    import imageIconCam from '../assets/img/camara-fotografica-negro.png';

    
    export default{
        name: 'UserProfile',
        data(){
            return {
                imageUrl: pepecat,
                imagenSeleccionada: {
                    src: imageIconCam ,
                    alt: 'Icono de camara Negra',
                },
            };
        },
        components: {
            LabelCtn,
            BtnEdit,
            BtnEditNoTxt,
        },
    };
</script>

