import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';
//import axios from 'axios';

const app = createApp(App);

//app.config.globalProperties.$axios = axios; // Agrega Axios como una propiedad global para que puedas usarlo en cualquier componente


app.use(router);
app.mount('#app');
<<<<<<< HEAD
createApp(App).use(router).mount('#app');
=======
>>>>>>> c12638a659bce720ca01c7e94a20a02c30e9d1c1
