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
                <Labels></Labels>
            </div>
        </div>
    </header>
</template>

<script>
    import pepecat from '../assets/img/pepecat.jpg';
    import Labels from '../components/Labels.vue';
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
            Labels,
            BtnEdit,
            BtnEditNoTxt,
        },
    };
</script>

<style scoped>

    .profileBackground{
        display: block;
        position: relative;
        max-width: 100%;
        height: 27rem;
        background: url(../assets/img/FondoDePerfil.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .profile{
        height: 100%;
        padding: 5px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
}

    .profile h1{
        font-size: 1.8rem;
        font-weight: bold;
        color: white;
        padding: 10px 10px;
    }

    .userPhotoProfile{
        width: 13.5rem;
        height: 13.5rem;
        border: 4px solid #FFFFFF;
        background-color: #DFE5F2;
        border-radius: 50%;
        box-shadow: 0 0 12px rgba(0, 0, 0, .2);
        position: absolute;
        top: calc(50% - 150px);
        left: calc(50% - 150);
        z-index: 1;
    }

    .userPhotoProfile img {
        position: relative;
        width: 100%;
        border-radius: 50%;
    }


    .btn-portada{
        display: flex;
        align-items: center;
        position: absolute;
        top: 1rem;
        right: 1rem;
        border: 0;
        border-radius: 8px;
        padding: 12px 20px;
        background-color: var(--Blanco);
        color: black;
        cursor: pointer;
}

.btn-portada img{
    width: 1rem;
    height: 1rem;
    padding-right: 1rem
}

.userPhotoProfile img:hover{
    filter: brightness(0.5);
}

@media (max-width: 720px){
    .profileBackground{
        height: 34rem;
    }

}
</style>