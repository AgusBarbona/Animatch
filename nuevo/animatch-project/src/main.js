import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';
import axios from 'axios';

const app = createApp(App);

app.config.globalProperties.$axios = axios; // Agrega Axios como una propiedad global para que puedas usarlo en cualquier componente

app.mixin({//Los mixins son una forma de compartir opciones entre múltiples componentes en Vue.
  methods: {
    fetchDataFromBackend() {
      axios.get('http://localhost:3000/api/ejemplo')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
});

app.use(router);
app.mount('#app');

/*import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'; 

const app = createApp(App);
app.use(router); 
app.mount('#app');
createApp(App).use(router).mount('#app');*/