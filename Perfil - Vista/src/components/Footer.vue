<template>
    <footer>
        <!-- Pie de Pagina-->
        <div class="footerLogo" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt">
        </div>
        <nav class="navInferior">
        <ul>
            <li>Mi cuenta</li>
            <li>Favoritos</li>
            <li>Chats</li>
            <li>Busqueda</li>
            <li>Soporte</li>
        </ul>
        </nav>
        <a href="#">© 2023 Animatch S.A. Todos los derechos reservados.</a>
    </footer>
</template>

<script>

//import IconoGithub from '../assets/img/IconoGithub.png';
import FigmaLogo from '../assets/img/figmacolor.png';
import TrelloLogo from '../assets/img/trellocolor.png';

export default {
    name: 'Footer',
    data() {
        return {
        images: [
            { src: '../assets/img/IconoGithub.png', alt: 'Logo Github' },
            { src: FigmaLogo, alt: 'Logo Figma' },
            { src: TrelloLogo, alt: 'Logo Trello' },
        ],
        };
    },
};
</script>

<style scoped>
    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
    }
    ul li a{
        padding: 15px;
        color: var(--Blanco);
    }

    .footerLogo img{
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        padding: 5px;
        margin-right: 22px;
    }

    .navInferior ul li{
        display: flex;
        color: black;
        flex-direction: row;
        font-weight: 580;
        padding-right: 20px;
    }

    footer a {
        padding-bottom: 50px;
        color: var(--Azul);
    }
</style>