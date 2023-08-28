<template>
    <header>
        <div class="profileBackground">
            <div class="profile">
                <div class="userPhotoProfile">
                    <img v-bind:src="imageUrl" alt="User Photo">
                </div>
                <h1>Pepe Cat</h1><!--<h1>{{ UserName }}</h1>-->
                <Labels></Labels>
            </div>
        </div>
    </header>
</template>

<script>
    import pepecat from '../img/pepecat.jpg';
    import Labels from '../components/LabelsHeader.vue';
    
    export default{
        name: 'UserProfile',
        data(){
            return {
                imageUrl: pepecat
            };
        },
        components: {
            Labels
        },
    };
</script>

<style>
    .profile h1{
        font-size: 1.8rem;
        font-weight: bold;
        color: white;
        padding-top: 20px;
    }

    .profileBackground{
        max-width: 100%;
        max-height: 100%;
        background: url(../img/FondoDePerfil.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .profile{
        height: 70%;
        padding-top: 30px;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
}

    .userPhotoProfile{
        max-width: 22vw;
        max-height: 22vw;
        border-radius: 50%;
        overflow: hidden;
    }

    .userPhotoProfile img {
        position: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .userPhotoProfile:hover{
        filter: brightness(0.6);
    }
</style>