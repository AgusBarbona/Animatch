import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AppSoport from '@/soport/AppSoport.vue';
import HomePage from '@/components/HomePage.vue';
import Matchs from '@/components/PerfilesMatch/perfilMatch.vue'

const routes = [
    { path: '/', component: App },  
    { path: '/soport', component: AppSoport },
    { path: '/home', component: HomePage },
    { path: '/matchs', component: Matchs },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;