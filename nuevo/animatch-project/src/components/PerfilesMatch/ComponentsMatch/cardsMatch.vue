
<template>
  <div class="Cards">
     <api :Cart="cart"/>
 </div>

</template>

<script>
import api from "./cardApi.vue";

export default {
  name: 'CardsMatch',
  components: {
    api,
  },
  created (){
    this.getPerfiles();
  },
  data() {
    return {
      cart: [],
    }
  },
  /*mounted() {
   ;
    axios
      .get(
        'https://my-json-server.typicode.com/Arleth-cordero20/Primer.repositoriogit/perfiles'
      )
      .then((response) => {
        this.cart = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },*/
  methods: {
    getPerfiles: async function(){
      try {
        const setting = {
          method: 'GET',
        }
        const url = 'https://my-json-server.typicode.com/Arleth-cordero20/Primer.repositoriogit/perfiles'
        const data = await fetch(url, setting);
        const json = await data.json();
        this.cart = json;
      }
      catch (error){
        console.log(err)
      }
    },
  },
};

</script>
