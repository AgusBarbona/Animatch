<template>
    <section class="userPhotos">
            <div class="titleWithIcon">
                <div class="info-Img">
                    <img class="icons" src="../assets/img/LogodeImagen.png" alt="images icon">
                    <h2>Fotos de Pepe</h2>
                </div>
                <BtnEdit text = "Editar" :imagen='imagenSeleccionada' class="edit-Data"></BtnEdit>
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
import Foto1 from '../assets/img/Foto1.jpg';
import Foto2 from '../assets/img/Foto2.jpg';
import Foto3 from '../assets/img/Foto3.jpg';
import Foto4 from '../assets/img/Foto4.jpg';
import Foto5 from '../assets/img/Foto5.jpg';
import Foto6 from'../assets/img/Foto6.jpg';
import IconEdit from '../assets/img/editor-de-documentos-negro.png';
import BtnEdit from './BtnEdit.vue';

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
            imagenSeleccionada: {
                    src: IconEdit ,
                    alt: 'Icono de Editar',
                },
        };
    },
    components: {
        BtnEdit,
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


