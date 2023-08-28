<template>
    <div class="sidebar">
        <div class="menu-section">
            <div class="menu-toggle" @click="toggleMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <span class="brand-name">Animatch</span>
        </div>
        
        <router-link to="/home" class="detailed-menu-item">
            <img :src="logoAnimatch" alt="Inicio" class="icon-img">
            <span class="section-name">Inicio</span>
        </router-link>
        <router-link to="/matchs" class="detailed-menu-item">
            <img :src="favoritos" alt="matchs" class="icon-img">
            <span class="section-name">Matchs</span>
        </router-link>
        <router-link to="/chats" class="detailed-menu-item">
            <img :src="chat" alt="Chats" class="icon-img">
            <span class="section-name">Chats</span>
        </router-link>
        <router-link to="/soport" class="detailed-menu-item">
            <img :src="pregunta" alt="Soporte" class="icon-img">
            <span class="section-name">Soporte</span>
        </router-link>
        <router-link to="/micuenta" class="detailed-menu-item">
            <img :src="usuario" alt="MiCuenta" class="icon-img">
            <span class="section-name">Mi Cuenta</span>
        </router-link>

        <div class="social-section">
            <a :href="trelloUrl" target="_blank">
                <img :src="trellocolor" alt="Trello" class="icon-img social-icon">
            </a>
            <a :href="githubUrl" target="_blank">
                <img :src="github" alt="GitHub" class="icon-img social-icon">
            </a>
            <a :href="figmaUrl" target="_blank">
                <img :src="figmacolor" alt="Figma" class="icon-img social-icon">
            </a>
        </div>
    </div>
</template>

<script>
import logoAnimatch from '@/assets/principalResouse/logo_animatch.png'; // Nota: Cambia el nombre de tu archivo a 'logo-animatch.png'
import favoritos from '@/assets/principalResouse/favoritos.png';
import chat from '@/assets/principalResouse/chat.png';
import usuario from '@/assets/principalResouse/usuario.png';
import pregunta from '@/assets/principalResouse/pregunta.png';
import trellocolor from '@/assets/principalResouse/trellocolor.png';
import github from '@/assets/principalResouse/github.png';
import figmacolor from '@/assets/principalResouse/figmacolor.png';


export default {
    name: 'NavDesplegable',
    data() {
        return {
            logoAnimatch,
            favoritos,
            chat,
            usuario,
            pregunta,
            trellocolor,
            github,
            figmacolor,
            trelloUrl: 'https://trello.com/b/FMboNN42/animatch',
            githubUrl: 'https://github.com/AgusBarbona/Animatch',
            figmaUrl: 'https://www.figma.com/file/3JQHne2HlpGAI70QtZFGpc/Animatch?type=design&node-id=238-461&mode=design&t=3DJ1hqAJRD9xYBBq-0'

        };
    },
    methods: {
        toggleMenu() {
            const sidebar = this.$el;
            const bar1 = sidebar.querySelector('.bar1');
            const bar2 = sidebar.querySelector('.bar2');
            const bar3 = sidebar.querySelector('.bar3');

            sidebar.classList.toggle('menu-active');
            bar1.classList.toggle('transformed');
            bar2.classList.toggle('transformed');
            bar3.classList.toggle('transformed');
        }
    }
}
</script>


<style scoped>
body, html {
    margin: 0;
    padding: 0;
    height: 90%;
    font-family: Arial, sans-serif;
}

:root {
    --rojoOscuro: #c82711;
    --rosita: #FFB8AE;
    --azulVinculos: #0075CA;
}

.sidebar {
    z-index: 10;         /* Añadido */
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 9.5vh;
    background-color: var(--rosita);
    transition: 0.3s;
    overflow-y: auto;
}

.menu-section {
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-left: 10px;
}

.menu-toggle {
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}

.bar1, .bar2, .bar3 {
    width: 25px;
    height: 4px;
    background-color: var(--rojoOscuro);
    margin: 4px;
    transition: 0.3s;
}

.icon-img {
    width: 40px;
    height: 40px;
    transition: 0.3s;
    padding: auto;
}

.detailed-menu-item {
    text-decoration: none;  /* Remueve el subrayado de los enlaces */
    display: flex;
    align-items: center;
    padding: 10px;

    color: #ffffff;
    transition: 0.3s;
}

.detailed-menu-item:hover {
    background-color: var(--rojoOscuro);
    transition: 0.2s;
}

.brand-name, .section-name {
    color: #ffffff;
    display: none;
    margin: 10px;
}

.menu-active {
    width: 200px;
}

.menu-toggle .bar1.transformed {
    transform: translateY(8px) rotate(45deg);
}

.menu-toggle .bar2.transformed {
    opacity: 0;
}

.menu-toggle .bar3.transformed {
    transform: translateY(-15px) rotate(-45deg);
}

.menu-active .brand-name, .menu-active .section-name {
    display: block;
}

.social-icon{
    padding-top: 5px;
    margin: 10px;
}
.social-section{
    padding-top: 40px;
}


</style>