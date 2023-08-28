<template>
    <section class="userPhotos">
            <div class="titleWithIcon">
                <img class="icons" src="../img/LogodeImagen.png" alt="images icon">
                <h2>Fotos de Pepe</h2>
            </div>
            
            <div class="gallery">
                <div class="firstRowImg">
                    <div class="userPhoto" v-for="(photo, index) in firstRowImages" :key="index">
                        <img :src="photo" :alt="'Photo ' + (index + 1)">
                    </div>
                </div>
                <div class="secondRowImg">
                    <div class="userPhoto" v-for="(photo, index) in secondRowImages" :key="index">
                        <img :src="photo" :alt="'Photo ' + (index + 1)">
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import Foto1 from '../img/Foto1.jpg';
import Foto2 from '../img/Foto2.jpg';
import Foto3 from '../img/Foto3.jpg';
import Foto4 from '../img/Foto4.jpg';
import Foto5 from '../img/Foto5.jpg';
import Foto6 from'../img/Foto6.jpg';

export default{
    name: 'ImageGallery',
    data() {
        return {
            photos: [
                Foto1,
                Foto2,
                Foto3,
                Foto4,
                Foto5,
                Foto6
            ],
        };
    },
    computed: {
        firstRowImages() {
            return this.photos.slice(0,3);
        },
        secondRowImages() {
            return this.photos.slice(3,6);
        },
    },
};
</script>


<style scoped>
    .userPhotos{
        width: 45%;
        padding: 30px 30px;
        display: flex;
        background-color: var(--SalmonMedio);
        flex-direction: column;
    }

    .userPhotos h2{
        font-size: 1.5rem;
        font-weight: bold;
    }

    .gallery{
        display: flex;
        flex-direction: column;
        justify-content: center;
}

    .firstRowImg, .secondRowImg{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .userPhoto{
    width: 12vw;
    height: 12vw;
    overflow: hidden;
    padding: 10px;
    }

    .userPhoto img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .userPhoto:hover img{
        filter: brightness(0.4);
    }

    .icons{
    height: 40px;
    padding-right: 25px;
    }

    .titleWithIcon{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-size: 1.1rem;
    padding-bottom: 20px;
    
}
</style>