import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AppSoport from '@/soport/AppSoport.vue';
import HomePage from '@/components/HomePage.vue';
import IniciarSesion from '@/Login/IniciarSesion.vue';
import CrearCuenta from '@/Registro/CrearCuenta.vue';

const routes = [
    { path: '/', component: App },  
    { path: '/soport', component: AppSoport },
    { path: '/home', component: HomePage },
    { path: '/login', component: IniciarSesion },
    { path: '/registro', component: CrearCuenta },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;