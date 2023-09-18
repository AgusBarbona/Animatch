<template>
    <main>
        <section class="userDescription">
            <div class="titleWithIcon Line">
                <div class="info-Distance">
                    <img class="icons" src="../assets/img/IconodeUbicacion.png" alt="Location Icon">
                    <p>700km de distancia</p>
                </div>
                <BtnEdit text = "Editar" :imagen='imagenSeleccionada' class="edit-Data"></BtnEdit>
            </div>
            <h2>Sobre mi...</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio sed vero molestiae fugit, 
                vitae consectetur perspiciatis nemo maiores obcaecati possimus quas. Culpa sequi inventore 
                doloribus a mollitia assumenda ullam quis!</p>
        </section>
        <ImageGallery></ImageGallery>
    </main>
</template>

<script>
    import ImageGallery from './ImageGallery.vue';
    import IconEditt from '../assets/img/editor-de-documentos-negro.png';
    import BtnEdit from './BtnEdit.vue';

    export default{
        name: 'UserProfile',
        components: {
            ImageGallery,
            BtnEdit,
        },
        data() {
            return {
                imagenSeleccionada: {
                        src: IconEditt ,
                        alt: 'Icono de Editar',
                    },
            };
        },
    };
</script>

