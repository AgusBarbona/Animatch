import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';
//import axios from 'axios';

const app = createApp(App);

//app.config.globalProperties.$axios = axios; // Agrega Axios como una propiedad global para que puedas usarlo en cualquier componente


app.use(router);
app.mount('#app');
