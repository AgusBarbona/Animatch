<template>
    <button type="button" class="edit-Data">
        <img :src="imagen.src" :alt="imagen.alt">
        <span>{{ text }}</span>
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        imagen: Object,
        text: String,
    },
});



/*data() {
        return {
            imagenes: [
                {
                    src:'../assets/img/camara-blanco.png',
                    alt: 'Icono de Camara Blanca',
                },

                {
                    src: '../assets/img/camara-negro.png',
                    alt: 'Icono de Camara Negra',
                },

                {
                    src:'../assets/img/camara-fotografica-blanco.png',
                    alt: 'Icono de Camara Blanca',
                },

                {
                    src:'../assets/img/camara-fotografica-negro.png',
                    alt: 'Icono de Camara Negra',
                },

                {
                    src:'../assets/img/edicion-de-fotos-blanco.png',
                    alt: 'Icono de Imagen Blanca',
                },

                {
                    src:'../assets/img/edicion-de-fotos-negro.png',
                    alt: 'Icono de Imagen Negra',
                },

                {
                    src:'../assets/img/editor-de-documentos-blanco.png',
                    alt: 'Icono de editor en blanco',
                },

                {
                    src:'../assets/img/editor-de-documentos-negro.png',
                    alt: 'Icono de editor en negro',
                },
            ],

            text : String,
            mostrar: false,
            imagenActual: null,
        };
    },
    methods: {
        mostrarIcono() {
            this.imagenActual = this.imagenes[indice];
            this.mostrar = true;
        },
    },
     */

</script>

<style>
    .edit-Data{
    display: flex;
    align-items: center;
    justify-items: center;
    border: 1px solid gray;
    background-color: var(--Blanco);
    padding: 2px 5px;
    border-radius: 5px;
    cursor: pointer;
}

.edit-Data img {
    width: 1.5rem;
    height: 1.5rem;
    padding-right: 0.7rem;
}
</style>